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

    public function setUp(): void
    {
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

    public function test_put_product_successful() {
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

    // public function test_post_product_missing_data() {
    //     $productData = [];

    //     $this->post('/api/product', $productData, $this->headers);

    //     $this->assertDatabaseCount('products', 0);
    // }

    // // test still creates a record if there is an extra 'wrong' field
    // public function test_post_product_extra_data() {
    //     $productData = [
    //         'name' => 'test name',
    //         'description' => 'test description',
    //         'slug' => 'test-slug',
    //         'price' => 100,
    //         'active' => true,
    //         'extra_field' => 'extra'
    //     ];

    //     $this->post('/api/product', $productData, $this->headers);

    //     $this->assertDatabaseCount('products', 1);
    // }

    // public function test_post_product_wrong_data_type() {
    //     $productData = [
    //         'name' => 1, // wrong datatype - should be string
    //         'description' => 'test description',
    //         'slug' => 'test-slug',
    //         'price' => 100,
    //         'active' => true
    //     ];

    //     $this->post('/api/product', $productData, $this->headers);

    //     $this->assertDatabaseCount('products', 0);
    // }

    // public function test_post_product_missing_authorisation() {
    //     $productData = [
    //         'name' => 1, // wrong datatype - should be string
    //         'description' => 'test description',
    //         'slug' => 'test-slug',
    //         'price' => 100,
    //         'active' => true
    //     ];

    //     $headersWithoutAuth = [];

    //     $this->post('/api/product', $productData, $headersWithoutAuth);

    //     $this->assertDatabaseCount('products', 0);
    // }

    // public function test_post_product_duplicate_slug() {
    //     $productData1 = [
    //         'name' => 'test name',
    //         'description' => 'test description',
    //         'slug' => 'test-slug',
    //         'price' => 100,
    //         'active' => true
    //     ];

    //     $productData2 = [
    //         'name' => 'test name 2',
    //         'description' => 'test description 2',
    //         'slug' => 'test-slug',
    //         'price' => 100,
    //         'active' => true
    //     ];

    //     $this->post('/api/product', $productData1, $this->headers);
    //     $this->post('/api/product', $productData2, $this->headers);

    //     $this->assertDatabaseCount('products', 1);
    // }


}
