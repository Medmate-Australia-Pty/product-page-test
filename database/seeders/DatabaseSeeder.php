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
        // $this->call([
        //     ProductsSeeder::class,
        // ]);

        Product::factory()
            ->count(10)
            ->hasImages(4)
            ->hasDiscounts(1)
            ->create();
    }
}
