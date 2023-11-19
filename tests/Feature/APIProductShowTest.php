<?php

namespace Tests\Feature;

use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class APIProductShowTest extends TestCase
{
    use RefreshDatabase;

    protected $headers;

    public function setUp(): void
    {
        parent::setUp();
        $this->headers = [
            'Authorisation' => config('app.api_key')
        ];
    }

    // TODO - test POST route
    // TODO - test PUT route
    // TODO - test DELETE route

    public function test_fetch_product_successful()
    {
        Product::factory()
            ->mockData()
            ->hasImages(4)
            ->hasDiscounts(1)
            ->create();

        $response = $this->get('api/product/mock-slug', $this->headers);

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

    public function test_fetch_product_wrong_slug() {

        $response = $this->get('api/product/this-product-doesnt-exist', $this->headers); //wrong slug

        $this->assertEquals('Product not found', $response->original['message']);
        $this->assertEquals(404, $response->status());
    }

    public function test_fetch_inactive_product() {

        Product::factory()
            ->mockInactive()
            ->hasImages(4)
            ->hasDiscounts(1)
            ->create();

        $response = $this->get('api/product/this-product-doesnt-exist', $this->headers);

        $this->assertEquals('Product not found', $response->original['message']);
        $this->assertEquals(404, $response->status());
    }

    public function test_fetch_product_without_API_key() {

        Product::factory()
            ->mockData()
            ->hasImages(4)
            ->hasDiscounts(1)
            ->create();

        $response = $this->get('api/product/mock-slug');

        $this->assertEquals('Authentication error', $response->original['error']);
        $this->assertEquals(403, $response->status());
    }
}
