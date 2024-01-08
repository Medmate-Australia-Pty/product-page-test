<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class ApiTokenAuthMiddleware
{   /**
    * Handle auth verification on incoming requests.
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  \Closure  $next
    *
    * @return mixed
    */
    public function handle($request, Closure $next)
    {   try{
        if (!$request->header('Authorization')) {
            return response()->json(['error' => 'No Authorization Token Found'], 401);
        }
        $token = str_replace('Bearer ', '', $request->header('Authorization'));
    
        if (!Auth::guard('api')->validate(['api_token' => $token])) {
            return response()->json(['error' => 'Unauthorized token'], 401);
        }

        return $next($request);}
        catch(\Exception $e){
            throw $e;
        }
    }
}
