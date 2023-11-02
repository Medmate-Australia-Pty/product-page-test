<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ProductDiscount;
use App\Models\ProductImage;
use Illuminate\Support\Facades\Validator;

class ProductAPIController extends Controller
{

    /**
     * ProductAPIController constructor.
     */
    public function __construct()
    {
        $this->middleware('client.credentials');
    }

    /**
     * Display a list of Products.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();

        // Check if any products were found
        if ($products->isEmpty()) {
            return response()->json(['message' => 'No products found'], 404);
        }

        return response()->json(['products' => $products], 200);
    }

    /**
     * Store a newly created Product.
     *
     * @param  \Illuminate\Http\Request  $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate the request data
        $validator = $this->validateProduct($request);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Create a new product
        $product = new Product([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'slug' => $request->input('slug'),
            'price' => $request->input('price'),
            'active' => $request->input('active', true),
        ]);

        $product->save();

        return response()->json(['product' => $product], 201);
    }

    /**
     * Display details about a Product.
     *
     * @param  int  $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show(int $id)
    {
        $discount = 0;
        $discountedPrice = 0;
        $discountType = '';
        $images = [];

        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        if (isset($product->discount) && $product->discount instanceof ProductDiscount) {
            $discount = $product->calculateProductDiscount($product);
            $discountType = $product->discount->type;
            $discountedPrice = $product->price - $discount;
        }

        if (isset($product->images)) {
            $images = $product->images->pluck('path')->toArray();
        }


        $response = [
            'id' => $product->id,
            'name' => $product->name,
            'description' => $product->description,
            'slug' => $product->slug,
            'price' => [
                'full' => $product->price,
                'discounted' => $discountedPrice,
            ],
            'discount' => [
                'type' => $discountType,
                'amount' => $discount,
            ],
            'images' => $images,
        ];

        return response()->json($response, 200);

    }

    /**
     * Update a Product by ID.
     *
     * @param  \Illuminate\Http\Request  $request
     *
     * @param  int  $id
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id)
    {
        // Validate the request data
        $validator = $this->validateProduct($request);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $product = Product::find($id);

        // Check if the product exists
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        // Update the product
        $product->name = $request->input('name');
        $product->description = $request->input('description');
        $product->price = $request->input('price');
        $product->active = $request->input('active', true);

        $product->save();

        return response()->json(['product' => $product], 200);
    }

    /**
     * Delete a Product.
     *
     * @param  int  $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        $product = Product::find($id);

        // Check if the product exists
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        $product->delete();
        return response()->json(null, 204);
    }

    /**
     * @param Request $request
     *
     * @return \Illuminate\Contracts\Validation\Validator
     */
    private function validateProduct(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'active' => 'boolean',
        ]);

        return $validator;
    }
}
