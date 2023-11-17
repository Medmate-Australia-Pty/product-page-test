<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductsController extends Controller
{
    public function show($slug)
    {
        // TODO - fix query to return discount info as well. Then need to format it as required.

        $product = DB::table('products')
            ->where('products.slug', $slug)
            ->where('products.active', true)
            ->join('product_images', 'products.id', '=', 'product_images.product_id')
            ->join('product_discounts', 'products.id', '=', 'product_discounts.product_id')
            ->select(
                'products.*',
                DB::raw('GROUP_CONCAT(product_images.path) as images'),
            )
            ->groupBy('products.id')
            ->get();

        if(!empty($product))
        {
            $fakeProduct = array(
                "id" => "1",
                "name" => "Fall Limited Edition Sneakers",
                "description" => "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
                "slug" => "fall-limited-edition-sneakers",
                "price" => array(
                    "full" => 250,
                    "discounted" => 125
                ),
                "discount" => array(
                    "type" => "percent",
                    "amount" => 50
                ),
                "images" => [
                    "image-path-1.png", 
                    "image-path-2.png",
                    "image-path-3.png",
                    "image-path-4.png"
                ]
            );
            // return response()->json($product);
            return response()->json($fakeProduct);
        }
        else
        {
            return response()->json([
                "message" => "product not found",
            ], 404);
        }

        
    }
}
