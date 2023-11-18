<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use Illuminate\Auth\AuthenticationException;

class ApiKey
{
  public function handle($request, Closure $next)
  {
    $key = $request->header('Authorisation');

    if (!$key || $key !== config('app.api_key')) {
    //   throw new AuthenticationException('Wrong api key');
        return response()->json(['error' => 'Authentication error'], 403);
    }

    return $next($request);
  }
}

// TODO - write tests for with/without passing API key