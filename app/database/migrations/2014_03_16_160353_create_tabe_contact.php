<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTabeContact extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        if (!Schema::hasTable('contact')) {
            Schema::create('contact', function ($table) {
                $table->increments('id');
                $table->string('title');
                $table->string('email');
                $table->text('content');
                $table->smallInteger('status');
                $table->timestamps();
                $table->index('email');
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
