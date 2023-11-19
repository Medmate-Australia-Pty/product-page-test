<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Show the profile for a given product.
     */
    public function getSingleProduct(string $slug)
    {
        try {
            $product = Product::with('product_images', 'product_discounts')->where('slug', $slug)->first();
            return new ProductResource($product);
        } catch (\Exception $e) {
            return response()->json([
                'data' => null,
                'msg' => $e->getMessage()
            ], 404);
        }
    }
}
