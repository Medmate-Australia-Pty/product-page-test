<?php
namespace App\Services;
use App\Models\ProductDiscounts;

class UpdateDiscounts{
    public function updateDiscount($request){
        try {
            
            $affectedRows = ProductDiscounts::where('product_id', $request['product_id'])
                ->where('active', 1)
                ->update(['active' => false]);
        
            $discount = ProductDiscounts::create([
                'product_id' => $request['product_id'],
                'type' => $request['type'],
                'discount' => $request['discount'],
            ]);
    
            return response()->json(['message' => 'Discount created successfully','data'=>[]], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => $e,'data'=>[]], 500);
        }
    }
    
}