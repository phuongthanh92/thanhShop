<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableUserAddress extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (!Schema::hasTable('user_address')) {
            Schema::create('user_address', function ($table) {
                $table->increments('id');
                $table->integer('user_id');
                $table->string('full_name',100);
                $table->string('address');
                $table->string('phone',30);
                $table->smallInteger('status');
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
