<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\ProductDiscount;

class ProductDiscountsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $product = Product::all();

        foreach ($product as $product) {
            $discountType = (rand(0, 1) == 0) ? 'percent' : 'amount';

            if ($discountType == 'percent') {
                $discount = rand(5, 80);
            } else {
                $discount = rand(5, $product->price * 0.8);
            };

            ProductDiscount::create([
                'product_id'  => $product->id,
                'type'  => $discountType,
                'discount' => $discount,
            ]);
        }
    }
}
