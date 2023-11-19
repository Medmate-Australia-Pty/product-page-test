<?php

namespace Tests\Feature;

use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class APIProductDeleteTest extends TestCase
{
    use RefreshDatabase;

    protected $headers;
    protected $initialProductData;

    public function setUp(): void {
        parent::setUp();

        $this->headers = [
            'Authorisation' => config('app.api_key')
        ];

        Product::factory()
            ->mockData()
            ->hasImages(4)
            ->hasDiscounts(1)
            ->create();
    }

    public function test_delete_product_successful() {
        $response = $this->delete('/api/product/mock-slug', [], $this->headers);

        $response->assertStatus(200);

        $this->assertDatabaseCount('products', 0);
    }

    public function test_delete_product_wrong_slug() {
        $response = $this->delete('/api/product/wrong-slug', [], $this->headers); //wrong slug

        $this->assertDatabaseCount('products', 1);
        $this->assertEquals('Product not found', $response->original['message']);
        $this->assertEquals(404, $response->status());
    }

    public function test_delete_product_missing_authorisation() {
        $this->delete('/api/product/mock-slug', [], []);

        $this->assertDatabaseCount('products', 1);
    }
}
