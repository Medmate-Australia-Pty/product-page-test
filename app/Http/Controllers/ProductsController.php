<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function show($slug)
    {
        $product = Product::where('slug', $slug)
            ->where('active', true)
            ->first();

        if(!empty($product))
        {
            return response()->json($product);
        }
        else
        {
            return response()->json([
                "message" => "product not found",
            ], 404);
        }
    }
}
