<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductsController extends Controller
{
    public function show($slug)
    {
        //TODO - account for null entry in nullable fields
        $productData = DB::table('products')
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

        if(count($productData) > 0) {
            // Calculate discount
            if ($productData[0]->type == 'amount') {
                $discountedPrice = $productData[0]->price - $productData[0]->discount;
            } else {
                $discountedPrice = $productData[0]->price * (1 - $productData[0]->discount/100);
            }

            // Create array from string of images
            $images = explode("," , $productData[0]->images);
            
            // Construct product in the required shape
            $product = [
                "id" => (string) $productData[0]->id,
                "name" => $productData[0]->name,
                "description" => $productData[0]->description,
                "slug" => $productData[0]->slug,
                "price" => array(
                    "full" => (double) $productData[0]->price,
                    "discounted" => $discountedPrice
                ),
                "discount" => array(
                    "type" => $productData[0]->type,
                    "amount" => (double) $productData[0]->discount
                ),
                "images" => $images
            ];

            return response()->json($product);
        } else {
            return response()->json([
                "message" => "Product not found",
            ], 404);
        }
    }

    // TODO - create full crud

}
