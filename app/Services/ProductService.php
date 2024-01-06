<?php
namespace App\Services;
use App\Models\Product;
use Illuminate\Database\Eloquent\Collection;
class ProductService
{
    private $productModel;

    

    public function processProducts(Collection $products): array
    {   
        foreach ($products as $product) {
            $this->processProduct($product);
        }

        return ["data"=>$products,"code"=> 1,"message" => "Record found"];
    }
    private function processProduct($product)
    {
        $images = $product->find($product->id)->product_images->pluck('path')->map(function ($path) {
            return str_replace('//', '/', $path);
        })->toArray() ?? [];
        $discount = $product->find($product->id)->product_discounts->where('active', true)->first();

        $product->images = $images;

        if ($discount) {
            $discountedPrice = ($discount->type == 'percentage')
                ? round($product->price - ($product->price * $discount->discount / 100), 2)
                : round($product->price - $discount->discount, 2);

            $product->price = ["full" => $product->price, "discounted" => $discountedPrice];
            $product->discount = ["type" => $discount->type, "discount" => $discount->discount];
        } else {
            $product->price = ["full" => $product->price, "discounted" => $product->price];
            $product->discount = ["type" => null, "discount" => null];
        }
    }
}
