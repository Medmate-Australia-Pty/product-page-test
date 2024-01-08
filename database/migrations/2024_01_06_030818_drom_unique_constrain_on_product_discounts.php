<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DromUniqueConstrainOnProductDiscounts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('product_discounts', function (Blueprint $table) {
            $table->dropForeign(['product_id']);
        });

        // Now drop the unique constraint
        Schema::table('product_discounts', function (Blueprint $table) {
            $table->dropUnique(['product_id', 'active']);
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
    }
}
