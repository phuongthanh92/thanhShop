<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableOrderItems extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('order_item')) {
            Schema::create('order_item', function ($table) {
                $table->increments('id');
                $table->string('product_id', 50);
                $table->integer('order_id');
                $table->smallInteger('quantity');
                $table->integer('price');
                $table->string('category');
                $table->string('attributes');
                $table->timestamps();
                $table->index('product_id');
                $table->index('order_id');
            });
        }
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
