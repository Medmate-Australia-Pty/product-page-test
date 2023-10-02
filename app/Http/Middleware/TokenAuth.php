<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\User;

class TokenAuth
{
    public function handle(Request $request, Closure $next)
    {

        $token = $request->header('Authorization');

        if (!$token) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }


        $user = User::where('remember_token', $token)->first();

        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }


        $request->user = $user;

        return $next($request);
    }
}
