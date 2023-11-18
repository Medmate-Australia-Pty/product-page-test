<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class apiTest extends TestCase
{
    
    public function test_fetch_single_product_successful()
    {
        $response = $this->get('api/products/ea-non-fuga');

        $response->assertExactJson(
            array(
                "id" => "1",
                "name" => "Fall Limited Edition Sneakers",
                "description" => "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
                "slug" => "fall-limited-edition-sneakers",
                "price" => array(
                    "full" => 250,
                    "discounted" => 125
                ),
                "discount" => array(
                    "type" => "percent",
                    "amount" => 50
                ),
                "images" => [
                    "image-path-1.png", 
                    "image-path-2.png",
                    "image-path-3.png",
                    "image-path-4.png"
                ]
            )
        );
    }
}
