<?php

namespace Database\Factories;

use App\Models\ProductDiscount;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Product;

class ProductDiscountFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ProductDiscount::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'product_id' => function () {
                return Product::inRandomOrder()->first()->id;
            },
            'type' => $this->faker->randomElement(['percent', 'amount']),
            'discount' => $this->faker->numberBetween(10, 50),
        ];
    }
}
