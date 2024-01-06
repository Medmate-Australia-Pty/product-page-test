<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ProductDiscounts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
            Schema::create("product_discounts", function (Blueprint $table) {
                $table->id();
                $table->foreignId('product_id')->constrained('products','id')->onDelete('cascade')->onupdate('cascade');
                $table->enum('type', ['percentage', 'amount']);
                $table->integer('discount');
                $table->timestamps();
            });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
            Schema::dropIfExists('product_discounts');
    }
}
