<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class ProductImagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product_images')->insert([
            ['product_id' => 1, 'path' => './images/iphone-15-pro.jpg'],
            ['product_id' => 1, 'path' => './images/iphone-15-pro2.jpg'],
            ['product_id' => 1, 'path' => './images/iphone-15-pro3.jpg'],
            ['product_id' => 1, 'path' => './images/iphone-15-pro4.jpg'],
        ]);
    }
}
