<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableOrder extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('order')) {
            Schema::create('order', function ($table) {
                $table->increments('id');
                $table->integer('user_id');
                $table->integer('address_id');
                $table->integer('total_product');
                $table->string('total_amount', 100);
                $table->smallInteger('status');
                $table->smallInteger('active');
                $table->text('note');
                $table->timestamps();
                $table->index('user_id');
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
