<?php

namespace Tests\Feature;

use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class apiTest extends TestCase
{
    use RefreshDatabase;

    // TODO - test POST route
    // TODO - test PUT route
    // TODO - test DELETE route

    // TODO - figure out how to make the controller call a mocked db to remove tests' dependency on db
    
    public function test_fetch_product_successful()
    {
        Product::factory()
            ->mockData()
            ->hasImages(4)
            ->hasDiscounts(1)
            ->create();

        $response = $this->get('api/products/mock-slug',
            ["Authorisation" => config('app.api_key')]
        );

        $dataAsArray = $response->original;

        //Assert that all expected keys are present in the array
        $this->assertArrayHasKey("id", $dataAsArray);
        $this->assertArrayHasKey("name", $dataAsArray);
        $this->assertArrayHasKey("description", $dataAsArray);
        $this->assertArrayHasKey("slug", $dataAsArray);
        $this->assertArrayHasKey("price", $dataAsArray);
        $this->assertArrayHasKey("discount", $dataAsArray);
        $this->assertArrayHasKey("images", $dataAsArray);

    }

    public function test_fetch_non_existent_product() {

        $response = $this->get('api/products/this-product-doesnt-exist',
            ['Authorisation' => config('app.api_key')]
        );

        $this->assertEquals('Product not found', $response->original['message']);
        $this->assertEquals(404, $response->status());
    }

    public function test_fetch_inactive_product() {

        Product::factory()
            ->mockInactive()
            ->hasImages(4)
            ->hasDiscounts(1)
            ->create();

        $response = $this->get('api/products/this-product-doesnt-exist',
            ['Authorisation' => config('app.api_key')]
        );

        $this->assertEquals('Product not found', $response->original['message']);
        $this->assertEquals(404, $response->status());
    }

    public function test_fetch_product_without_API_key() {

        Product::factory()
            ->mockData()
            ->hasImages(4)
            ->hasDiscounts(1)
            ->create();

        $response = $this->get('api/products/mock-slug');

        $this->assertEquals('Authentication error', $response->original['error']);
        $this->assertEquals(403, $response->status());
    }
}
