<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController; 
use App\Http\Controllers\PhotoController;
use App\Http\Controllers\DiscountController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\ApiTokenAuthMiddleware;

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
Route::controller(UserController::class)->group(function () {
    Route::post('/users', 'store');
    Route::put('/users', 'update');
});
Route::middleware([ApiTokenAuthMiddleware::class])->group(function () {
    Route::controller(ProductController::class)->group(function () {
        Route::get('/products', 'index');
        Route::post('/products', 'store');
        Route::get('/products/{id}', 'show');
        Route::put('/products/{id}', 'update');
        Route::delete('/products/{id}', 'destroy');
    });

    Route::controller(PhotoController::class)->group(function(){
        Route::post('/photos', 'store');
        Route::get('/photo/{id}','show');
        Route::get('/photos','index');
        Route::delete('/photos/{id}','destroy');
        Route::get('/product_images/{filename}', 'getImage');
    });

    Route::controller(DiscountController::class)->group(function(){
        Route::get('/discounts', 'index');
        Route::post('/discounts', 'store');
        Route::get('/discounts/history/{id}','history');
    });
    

});