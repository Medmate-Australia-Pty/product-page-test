<?php

namespace App\Http\Controllers;

use App\Models\Product; // Corrected case
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ProductController extends Controller
{
    public function store(Request $request)
    {   
        try{
        $requestData = $request->json()->all();

        $product = new Product();
        $product->name = $requestData['name'];
        $product->description = $requestData['description'];
        $product->slug = $requestData['slug'];
        $product->price = $requestData['price'];
        $product->active = $requestData['active'];
        $product->save();

        return response()->json($product, 201);
        } catch (\Exception $e) {
            Log::error('Error creating product: ' . $e);
            if($e->getCode() == 23000) {
                return response()->json(["message" => "Duplicate entry"], 409);
            }
            if($e->getCode() == 22001) {
                return response()->json(["message" => "String too long"], 422);
            }
            return response()->json(["message" => "Error creating product"], 500);
        }
    }

    public function index()
    {
        $products = Product::all();
        return response()->json($products, 200);
    }
    public function show($id)
    {
        $product = Product::find($id);
        if ($product == null) {
            return response()->json(["message" => "Record not found"], 404);
        }
        return response()->json($product, 200);
    }
    public function update(Request $request, $id)
    {
        $requestData = $request->json()->all();
        $product = Product::find($id);
        if ($product == null) {
            return response()->json(["message" => "Record not found"], 404);
        }
        $product->name = $requestData['name'];
        $product->description = $requestData['description'];
        $product->slug = $requestData['slug'];
        $product->price = $requestData['price'];
        $product->active = $requestData['active'];
        $product->save();
        return response()->json($product, 200);
    }
    public function destroy($id)
    {
        $product = Product::find($id);
        if ($product == null) {
            return response()->json(["message" => "Record not found"], 404);
        }
        $product->delete();
        return response()->json(["message" => "Record deleted"], 204);
    }
}
