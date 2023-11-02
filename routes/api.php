<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ProductAPIController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// To display list of products.
Route::get('products', [ProductAPIController::class, 'index']);

// To display details about a product.
Route::get('products/{id}', [ProductAPIController::class, 'show']);

// To create a product.
Route::post('products', [ProductAPIController::class, 'store']);

// To update a product.
Route::patch('products/{id}',  [ProductAPIController::class, 'update']);

// To delete a product.
Route::delete('products/{id}', [ProductAPIController::class, 'destroy']);

// Use this endpoint to generate access tokens for users.
Route::post('oauth/token', 'Laravel\Passport\Http\Controllers\AccessTokenController@issueToken');