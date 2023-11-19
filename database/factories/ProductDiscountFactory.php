<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductDiscountFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $discountType = (rand(0, 1) == 0) ? 'percent' : 'amount';

        if ($discountType == 'percent') {
            $discount = rand(5, 80);
        } else {
            $discount = rand(5, 100);
        };

        return [
            'type'  => $discountType,
            'discount' => $discount,
        ];
    }
}
