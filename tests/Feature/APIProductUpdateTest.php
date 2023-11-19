<?php

namespace Tests\Feature;

use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class APIProductUpdateTest extends TestCase
{
    use RefreshDatabase;

    protected $headers;
    protected $initialProductData;

    public function setUp(): void {
        parent::setUp();

        $this->headers = [
            'Authorisation' => config('app.api_key')
        ];

        $this->initialProductData = [
            'name' => 'mock name',
            'description' => 'mock description',
            'slug' => 'mock-slug',
            'price' => 100,
            'active' => true
        ];

        $this->post('/api/product', $this->initialProductData, $this->headers);
    }

    public function test_put_product_multiple_item_successful() {
        $productData = [
            'name' => 'new name',
            'description' => 'new description',
            'slug' => 'new-slug',
            'price' => 1,
            'active' => false
        ];

        $response = $this->put('/api/product/mock-slug', $productData, $this->headers);

        $response->assertStatus(200);

        $this->assertDatabaseHas('products', [
            'name' => $productData['name'],
            'description' => $productData['description'],
            'slug' => $productData['slug'],
            'price' => $productData['price'],
            'active' => $productData['active'],

        ]);

        $this->assertDatabaseCount('products', 1);
    }

    public function test_put_product_single_item_successful() {
        $productData = [
            'name' => 'new name',
        ];

        $response = $this->put('/api/product/mock-slug', $productData, $this->headers);

        $response->assertStatus(200);

        $this->assertDatabaseHas('products', [
            'name' => $productData['name'],
            'description' => $this->initialProductData['description'],
            'slug' => $this->initialProductData['slug'],
            'price' => $this->initialProductData['price'],
            'active' => $this->initialProductData['active'],

        ]);

        $this->assertDatabaseCount('products', 1);
    }

    // test still creates a record if there is an extra 'wrong' field
    public function test_put_product_extra_data() {
        $productData = [
            'name' => 'new name',
            'description' => 'new description',
            'slug' => 'new-slug',
            'price' => 1,
            'active' => false,
            'extra_field' => 'extra field',
        ];

        $response = $this->put('/api/product/mock-slug', $productData, $this->headers);

        // record should not have been updated - should still show initial data
        $this->assertDatabaseHas('products', [
            'name' => $this->initialProductData['name'],
            'description' => $this->initialProductData['description'],
            'slug' => $this->initialProductData['slug'],
            'price' => $this->initialProductData['price'],
            'active' => $this->initialProductData['active'],

        ]);

        $this->assertDatabaseCount('products', 1);
    }

    public function test_put_product_wrong_data_type() {
        $productData = [
            'name' => 1, // wrong datatype - should be string
            'description' => 'test description',
            'slug' => 'test-slug',
            'price' => 100,
            'active' => true
        ];

        $this->put('/api/product/mock-slug', $productData, $this->headers);

        // record should not have been updated - should still show initial data
        $this->assertDatabaseHas('products', [
            'name' => $this->initialProductData['name'],
            'description' => $this->initialProductData['description'],
            'slug' => $this->initialProductData['slug'],
            'price' => $this->initialProductData['price'],
            'active' => $this->initialProductData['active'],

        ]);

        $this->assertDatabaseCount('products', 1);
    }

    public function test_put_product_wrong_slug() {
        $productData = [
            'name' => 'new name',
            'description' => 'test description',
            'slug' => 'test-slug',
            'price' => 100,
            'active' => true
        ];

        $response = $this->put('/api/product/wrong-slug', $productData, $this->headers); //wrong slug
        
        // record should not have been updated - should still show initial data
        $this->assertDatabaseHas('products', [
            'name' => $this->initialProductData['name'],
            'description' => $this->initialProductData['description'],
            'slug' => $this->initialProductData['slug'],
            'price' => $this->initialProductData['price'],
            'active' => $this->initialProductData['active'],

        ]);

        $this->assertEquals($response->original['message'], 'Product not found');

        $this->assertDatabaseCount('products', 1);
    }

    public function test_put_product_missing_authorisation() {
        $productData = [
            'name' => 'new name',
            'description' => 'new description',
            'slug' => 'new-slug',
            'price' => 1,
            'active' => false,
        ];

        $headersWithoutAuth = [];

        $this->put('/api/product/mock-slug', $productData, $headersWithoutAuth);

        // record should not have been updated - should still show initial data
        $this->assertDatabaseHas('products', [
            'name' => $this->initialProductData['name'],
            'description' => $this->initialProductData['description'],
            'slug' => $this->initialProductData['slug'],
            'price' => $this->initialProductData['price'],
            'active' => $this->initialProductData['active'],

        ]);

        $this->assertDatabaseCount('products', 1);
    }
}
