<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ProductController extends Controller
{
    public function render($request, $exception)
    {
        if ($exception instanceof ModelNotFoundException && $request->wantsJson()) {
            return response()->json(['error' => 'Product not found.'], 404);
        }

        return parent::render($request, $exception);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreProductRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreProductRequest $request)
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

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
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

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateProductRequest  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateProductRequest $request, Product $productId)
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return response()->json(['message' => 'Deleted successfully']);
    }
}
