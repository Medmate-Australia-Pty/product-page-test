<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ProductController extends Controller
{
    public function render($request, Throwable $exception)
    {
        if ($exception instanceof ModelNotFoundException && $request->wantsJson()) {
            return response()->json(['error' => 'Product id not found.'], 404);
        }

        return parent::render($request, $exception);
    }

    public function show(Product $product)
    {
        $product->load('images', 'discount');
        $discountedPrice = $product->price;
        if ($product->discount->type === 'percent') {
            $discountedPrice = $product->price - ($product->price * ($product->discount->discount / 100));
        } elseif ($product->discount->type === 'amount') {
            $discountedPrice -= $product->discount->discount;
        }

        $response = [
            'id' => $product->id,
            'name' => $product->name,
            'description' => $product->description,
            'slug' => $product->slug,
            'price' => [
                'full' => $product->price,
                'discounted' => $discountedPrice
            ],
            'discount' => [
                'type' => $product->discount->type,
                'amount' => $product->discount->discount
            ],
            'images' => $product->images->pluck('path')
        ];

        return response()->json($response);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'slug' => 'required|string|unique:products,slug',
            'price' => 'required|integer',
            'active' => 'required|boolean',
            'type' => 'required|in:percent,amount',
            'amount' => 'required|integer',
            'images' => 'required|array'
        ]);

        $product = Product::create([
            'name' => $validatedData['name'],
            'description' => $validatedData['description'],
            'slug' => $validatedData['slug'],
            'price' => $validatedData['price'],
            'active' => $validatedData['active']
        ]);

        $product->discount()->create([
            'type' => $validatedData['type'],
            'discount' => $validatedData['amount']
        ]);

        foreach ($validatedData['images'] as $imagePath) {
            $product->images()->create(['path' => $imagePath]);
        }

        return response()->json(['message' => 'Post successfully', 'product' => $product], 200);
    }

    public function update(Request $request, $productId)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'slug' => 'required|string|unique:products,slug,' . $productId,
            'price' => 'required|integer',
            'active' => 'required|boolean',
            'type' => 'required|in:percent,amount',
            'amount' => 'required|integer',
            'images' => 'required|array'
        ]);

        $product = Product::findOrFail($productId);

        $product->update([
            'name' => $validatedData['name'],
            'description' => $validatedData['description'],
            'slug' => $validatedData['slug'],
            'price' => $validatedData['price'],
            'active' => $validatedData['active']
        ]);

        $product->discount()->updateOrCreate(
            ['product_id' => $product->id],
            [
                'type' => $validatedData['type'],
                'discount' => $validatedData['amount']
            ]
        );

        $product->images()->delete();
        foreach ($validatedData['images'] as $imagePath) {
            $product->images()->create(['path' => $imagePath]);
        }

        return response()->json(['message' => 'Updated successfully', 'product' => $product], 200);
    }
    
    public function destroy(Product $product)
    {
        $product->delete();

        return response()->json(['message' => 'Deleted successfully']);
    }


}
