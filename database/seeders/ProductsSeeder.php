<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Product;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 10; $i++) {
            Product::create([
                'name' => $faker->word(),
                'description' => $faker->sentence(),
                'slug' => $faker->slug(3, false),
                'price' => $faker->randomFloat(2, 2, 300),
                'active' => $faker->boolean()
            ]);
        }

    }
}
