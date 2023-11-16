<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\ProductImage;
use Faker\Factory;

class ProductImagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();
        $productIds = Product::all()->pluck('id');
        
        foreach ($productIds as $productId) {
            for ($i = 0; $i < 4; $i++) {
                ProductImage::create([
                    'product_id' => $productId,
                    'path' => $faker->word() . '.png',
                ]);
            }
        }
    }
}
