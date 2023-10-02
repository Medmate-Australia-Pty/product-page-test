<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class ProductDiscountsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product_discounts')->insert([
            'product_id' => 1,
            'type' => 'percent',
            'discount' => 50,
            'created_at' => null,
            'updated_at' => null,
        ]);
    }
}
