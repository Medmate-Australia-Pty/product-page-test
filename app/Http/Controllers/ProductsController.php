<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductsController extends Controller
{
    public function show($slug)
    {
        $product = DB::table('products')
            ->select(
                'products.*',
                'product_discounts.type',
                'product_discounts.discount',
                DB::raw('GROUP_CONCAT(product_images.path) as images'),
            )
            ->where('products.slug', $slug)
            ->where('products.active', true)
            ->join('product_discounts', 'products.id', '=', 'product_discounts.product_id')
            ->join('product_images', 'products.id', '=', 'product_images.product_id')
            ->groupBy('products.id', 'product_discounts.id')
            ->get();


        if(!empty($product))
        {
            return response()->json($product);
        }
        else
        {
            return response()->json([
                "message" => "product not found",
            ], 404);

            // TODO - test that the 404 is returned when requesting a product that doesn't exist
            // TODO - create full crud
        }

        
    }
}
