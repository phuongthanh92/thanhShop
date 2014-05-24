<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableOrderItemsComment extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('order_comment')) {
            Schema::create('order_comment', function ($table) {
                $table->increments('id');
                $table->integer('order_id');
                $table->integer('user_id');
                $table->smallInteger('active');
                $table->smallInteger('status');
                $table->text('content');
                $table->timestamps();
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
