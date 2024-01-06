<?php

namespace App\Services;

use Illuminate\Http\Request;
use Illuminate\Validation\Validator;

class ValidationService
{
    public function validateRequest(Request $request, array $rules)
    {
        $validator = \Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return ["message"=>$validator->errors(),"data"=>[],"status"=>422];
        }

        return ["message"=>"","data"=>[],"status"=>200]; 
    }
}
