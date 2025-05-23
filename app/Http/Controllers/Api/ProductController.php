<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ShowProductRequest;
use App\Http\Requests\ProductRequest;
use App\Models\Product;
use App\Models\ProductImage;
use App\Models\ProductDiscount;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ProductController extends Controller
{
    /**
     * Get product details
     *
     * @param \App\Http\Requests\ShowProductRequest $request
     * @param string $slug
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(ShowProductRequest $request, $slug)
    {
        try {
            $product = Product::with(['images', 'discount'])
                ->where('slug', $slug)
                ->where('active', true)
                ->firstOrFail();

            // Calculate discounted price if a discount exists
            $fullPrice = $product->price;
            $discountedPrice = $fullPrice;
            
            $discount = null;
            if ($product->discount) {
                if ($product->discount->type === 'percent') {
                    $discountedPrice = $fullPrice - ($fullPrice * $product->discount->discount / 100);
                } else { // amount
                    $discountedPrice = $fullPrice - $product->discount->discount;
                }
                
                $discount = [
                    'type' => $product->discount->type,
                    'amount' => $product->discount->discount
                ];
            }

            // Format image paths
            $images = $product->images->pluck('path')->toArray();

            return response()->json([
                'id' => (string) $product->id,
                'name' => $product->name,
                'description' => $product->description,
                'slug' => $product->slug,
                'price' => [
                    'full' => $fullPrice,
                    'discounted' => (int) $discountedPrice
                ],
                'discount' => $discount,
                'images' => $images
            ]);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Product not found',
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'An error occurred while retrieving the product',
                'details' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Store a new product
     *
     * @param \App\Http\Requests\ProductRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(ProductRequest $request)
    {
        try {
            $product = Product::create([
                'name' => $request->name,
                'description' => $request->description,
                'slug' => $request->slug,
                'price' => $request->price,
                'active' => $request->active ?? true,
            ]);

            // Handle images if provided
            if ($request->has('images')) {
                foreach ($request->images as $image) {
                    ProductImage::create([
                        'product_id' => $product->id,
                        'path' => $image['path'],
                    ]);
                }
            }

            // Handle discount if provided
            if ($request->has('discount')) {
                ProductDiscount::create([
                    'product_id' => $product->id,
                    'type' => $request->discount['type'],
                    'discount' => $request->discount['discount'],
                ]);
            }

            return response()->json([
                'status' => 'success',
                'message' => 'Product created successfully',
                'product' => $product->load(['images', 'discount']),
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'An error occurred while creating the product',
                'details' => $e->getMessage()
            ], 500);
        }
    }
} 