<?php

namespace App\Models\Product;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Client Routes
|--------------------------------------------------------------------------
|
| Route related to the client application test
|
*/

Route::get('products/{slug}', function ($slug) {
  $product = Product::where("slug", $slug);

  if(!$product){
     return response()->json([
      'data' => null,
      'msg' => 'Item not found.'
    ], 4040); 
  }

  $discount = $product->discount;
  $images = $product->images;
  $discounted = 0;

  if($discount->type === "amount"){
    $discounted = $product->price - $discount->discount;
  } else {
    $discounted = $product->price - ($product->price * ($discount->discount / 100));
  }

  return response()->json([
    'data' => [
      'id' => $product->id,
      'name' => $product->name,
      'description' => $product->description,
      'price' => [
        'full' => $product->price,
        'discounted' => $discounted
      ],
      'discount' => [
        'type' => $discount->type,
        'amount' => $discount->discount
      ],
      'images' => [ $images ]
    ]
  ]);
});
