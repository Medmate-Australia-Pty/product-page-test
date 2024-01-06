<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Services\ProductService;
use App\Services\ValidationService;
use App\Exceptions\InvalidOrderException;
use App\Exceptions\CustomErrors;

class ProductController extends Controller
{
    private $validator;
    private $prodServiceObj;

    public function __construct(ValidationService $validator, ProductService $prodServiceObj)
    {
        $this->validator = $validator;
        $this->prodServiceObj = $prodServiceObj;
    }

    public function store(Request $request)
    {
        try {
            $validationResponse = $this->validator->validateRequest($request, [
                'name' => 'required',
                'description' => 'required',
                'slug' => 'required|unique:products',
                'price' => 'required',
                'active' => 'required',
            ]);

            if ($validationResponse['status']==422) {
                return response()->json(["message" => $validationResponse['message'], "data" => []], 422);
            }

            $requestData = $request->json()->all();

            $product = new Product();
            $product->name = $requestData['name'];
            $product->description = $requestData['description'];
            $product->slug = $requestData['slug'];
            $product->price = $requestData['price'];
            $product->active = $requestData['active'];
            $product->save();

            return response()->json(['message'=>'Record Created','data'=>$product], 201);
        } catch (\Exception $e) {
            Log::error('Error creating product: ' . $e->getMessage());

            if ($e->getCode() == 23000) {
                return response()->json(["message" => "Duplicate entry", "data" => []], 422);
            }

            if ($e->getCode() == 22001) {
                return response()->json(["message" => "String too long", "data" => []], 422);
            }

            return response()->json(["message" => "Error creating product", "data" => []], 422);
        }
    }

    public function index()
    {
        try {
            $products = $this->prodServiceObj->processProducts(Product::all());

            if ($products['code'] == 0) {
                return response()->json(["message"=>'Record Found','data' => $products['message']], 404);
            }

            return response()->json(['data' => $products['data'], 'message' => $products['message']], 200);
        } catch (\Exception $e) {
            throw CustomErrors::make();
        }
    }

    public function show($slug)
    {
        try {
            $products = $this->prodServiceObj->processProducts(Product::where('slug', $slug)->get());

            if ($products['code'] == 0) {
                return response()->json(["message" => $products['message']], 404);
            }

            return response()->json(['data' => $products['data'], 'message' => $products['message']], 200);
        } catch (\Exception $e) {
            throw CustomErrors::make();
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $validationResponse = $this->validator->validateRequest($request, [
                'name' => 'required',
                'description' => 'required',
                'slug' => 'required|unique:products,slug,' . $id,
                'price' => 'required',
                'active' => 'required',
            ]);

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
        } catch (\Exception $e) {
            throw CustomErrors::make();
        }
    }

    public function destroy($id)
    {
        try {
            $product = Product::find($id);

            if ($product == null) {
                return response()->json(["message" => "Record not found"], 404);
            }

            $product->delete();

            return response()->json(["message" => "Record deleted"], 200);
        } catch (\Exception $e) {
            throw CustomErrors::make();
        }
    }
}
