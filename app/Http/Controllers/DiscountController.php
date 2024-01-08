<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use App\Models\ProductDiscounts;
use App\Services\ValidationService;
use App\Exceptions\CustomErrors;
use Illuminate\Validation\ValidationException;
use App\Services\UpdateDiscounts;

class DiscountController extends Controller
{   private $validator;
    public function __construct()
    {
        $this->validator = new ValidationService();
    }
    /*
     * Display all discounts.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        try{
        $discounts = ProductDiscounts::where('active',1)->get();
        return response()->json(['message'=>'Record Found','data'=>$discounts], 200);
        }
        catch(\Exception $e){
            
            throw CustomErrors::make();
        }
    }
    /*
     * Store a newly created discount For the specified  product.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        try{
        $rules = [
            'product_id' => 'required|exists:products,id',
            'type' => 'required',
            'discount' => 'required',
        ];
        $validationResponse = $this->validator->validateRequest($request, $rules);
        if ($validationResponse['status'] == 422) {
            return response()->json(["message"=>$validationResponse['message'],'data'=>[]], 422);
        }
        $request = $request->json()->all();
        if ($request['type'] != 'percentage' && $request['type'] != 'amount') {
            throw CustomErrors::make('Invalid type',422);
        }
        if ($request['discount'] < 0 || $request['discount'] > 100  || $request['discount'] == null) {
            throw CustomErrors::make('Invalid Discount',422);
        }
        $discount = new UpdateDiscounts();
        return $discount->updateDiscount($request);
    }
        catch (\Exception $e) {
            throw CustomErrors::make($e);
        }
    }
    /*
     * Display discount for specified product.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function history($id){
        try{
        $history = ProductDiscounts::where('product_id',$id)->get();
        if ($history == null) {
            return response()->json(['message'=> 'Record Not Found','data'=>[]],404);
        }
        return response()->json(["message"=>"Record found","data"=>$history], 200);
    }catch (\Exception $e) {
        throw CustomErrors::make();
    }
    }
}
