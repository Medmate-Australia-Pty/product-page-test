<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class apiTest extends TestCase
{
    
    public function test_fetch_single_product()
    {

        // $product = Product::factory()->create();

        // $response = $this->getJson('/api/products', $this->product->id)
        //     ->assertOk()
        //     ->json('data');

        // $this->assertEquals($response['name'], $this->list->name);

        // $response = $this->getJson('/api/products/ea-non-fuga');

        $response->assertStatus(200);
        $this->assertJsonStringEqualsJsonString(
            json_encode(['Mascot' => 'Tux']),
            json_encode(['Mascot' => 'Tux'])
        );
    }
}
