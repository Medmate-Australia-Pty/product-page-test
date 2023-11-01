<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\ProductDiscount;
use App\Models\ProductImage;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        Product::factory(10)->create(); // Create 10 dummy products.
        ProductImage::factory(20)->create(); // Create 10 dummy product images.
        ProductDiscount::factory(10)->create(); // Create 10 dummy product discounts.
    }
}
