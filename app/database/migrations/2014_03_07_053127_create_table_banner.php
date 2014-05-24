<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableBanner extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        if (!Schema::hasTable('slide')){
            Schema::create('slide', function($table)
            {
                $table->increments('id');
                $table->string('image');
                $table->string('title');
                $table->string('link');
                $table->smallInteger('status');
                $table->integer('order');
                $table->timestamps();
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
