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
        //Create single product
        $product = Product::create([
            'name' => "Fall Limited Edition Sneakers",
            'description' => "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
            'slug' => "fall-limited-edition-sneakers",
            'price' => 250,
            'active' => true
        ]);

        //Create product discount related to the product above
        ProductDiscount::create([
            'product_id' => $product->id,
            'type' => 'percent',
            'discount' => 50
        ]);

        //Product Images for product above
        for( $i = 0; $i < 4; $i++) {
            ProductImage::create([
                'product_id' => $product->id,
                'path' => 'images/image-product-' . ($i + 1) . '.jpg',
            ]);
        }
    }
}
