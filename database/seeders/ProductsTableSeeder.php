<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            'name' => 'Ipohne 15 Pro',
            'description' => 'dual sim',
            'slug' => '11',
            'price' => 1500,
            'active' => 1,
            'created_at' => null,
            'updated_at' => null,
        ]);
    }
}
