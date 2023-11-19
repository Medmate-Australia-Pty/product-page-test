<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word(),
            'description' => $this->faker->sentence(),
            'slug' => $this->faker->slug(3, false),
            'price' => $this->faker->randomFloat(2, 120, 300),
            'active' => $this->faker->boolean()
        ];
    }

    // TODO - use this method to instantiate tests
    public function mockData()
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => 'mock product',
                'description' => 'mock description',
                'slug' => 'mock-slug',
                'price' => 100.00,
                'active' => true
            ];
        });
    }

}
