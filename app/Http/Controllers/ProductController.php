<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
class ProductController extends Controller
{
    public function show($id)
    {
        $product = Product::with('images', 'discount')->find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        if($product->discount->type ==="percent")
        {
            $discountedPrice = $product->price  - ($product->price  * ($product->discount->discount / 100));
        }
        else
        {
            $discountedPrice = $product->price - $product->discount->discount;
        }
        $priceData = [
            'full' => $product->price,
            'discounted' => $discountedPrice,
        ];
        $productData = $product->select(['id', 'name', 'description', 'slug'])->with( 'discount')->find($id);

        // Add the custom "price" array to the product data
        $productData['price'] = $priceData;
        $imagePaths = $product->images->pluck('path');
        $productData['images'] = $imagePaths;
        return response()->json($productData);
    }
}
