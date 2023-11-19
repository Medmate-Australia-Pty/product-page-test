<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Product::factory()
            ->count(10)
            ->hasImages(4)
            ->hasDiscounts(1)
            ->create();

        Product::factory()
            ->count(1)
            ->mockNullDescription()
            ->hasImages(4)
            ->hasDiscounts(1)
            ->create();
    }
}
