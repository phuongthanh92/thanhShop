<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsers extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        if (!Schema::hasTable('users')){
            Schema::create('users', function($table)
            {
                $table->increments('id');
                $table->string('username',50);
                $table->string('password');
                $table->string('email',150);
                $table->string('full_name', 100);
                $table->smallInteger('active');
                $table->smallInteger('group');
                $table->timestamps();
            });
            DB::statement('ALTER TABLE users ADD FULLTEXT search(full_name, email, username)');
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
