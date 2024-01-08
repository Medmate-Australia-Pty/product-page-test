<?php

namespace App\Http\Controllers;

use App\Exceptions\CustomErrors;
use App\Models\User;
use Illuminate\Http\Request;
use App\Services\ValidationService;
use App\Services\CreateToken;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    private $validator;

    public function __construct(ValidationService $validator)
    {
        $this->validator = $validator;
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     *
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $validation_response = $this->validator->validateRequest($request, [
                'name' => 'required',
                'email' => 'required|email|unique:users',
                'password' => 'required'
            ]);

            if ($validation_response['status'] == 422) {
                return response()->json(["message" => $validation_response['message']], 422);
            }

            $token = CreateToken::createToken()['token'];
            User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->password),
                'api_token' => $token,
            ]);

            return response()->json(['message' => 'User Created Successfully', 'data' => ['Api_token' => $token]], 200);
        } catch (\Exception $e) {
            throw CustomErrors::make();
        }
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     *
     *
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if ($user) {
            $token = CreateToken::createToken()['token'];

            $user->forceFill([
                'api_token' => $token,
            ])->save();

            return response()->json(['message' => 'New Token Generated', 'data' => ['Api_token' => $token]], 200);
        } else {
            return response()->json(['error' => 'User not found'], 404);
        }
    }
}
