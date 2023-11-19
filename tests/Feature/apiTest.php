<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class apiTest extends TestCase
{
    // TODO - reinstate below line to refresh db once factory is implemented
    // use RefreshDatabase;
    
    public function test_fetch_product_successful()
    {
        // TODO - mock db to remove this dependency from test cases
        $response = $this->get('api/products/quis-ab-provident',
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
        //TODO - mock 404 response from database
        $response = $this->get('api/products/this-product-doesnt-exist',
            ['Authorisation' => config('app.api_key')]
        );

        $this->assertEquals('Product not found', $response->original['message']);
        $this->assertEquals(404, $response->status());
    }

    public function test_fetch_product_without_API_key() {
        //TODO - mock 403 Error response from database
        $response = $this->get('api/products/quis-ab-provident');

        $this->assertEquals('Authentication error', $response->original['error']);
        $this->assertEquals(403, $response->status());
    }

    // TODO - write test for fetching inactive product
}
