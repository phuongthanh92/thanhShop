<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableCart extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        if (!Schema::connection('mongodb')->hasTable('cart')){

            Schema::connection('mongodb')->create('cart', function($collection)
            {
                $collection->index('user_id');
                $collection->index('product_id');
                $collection->index('session_id');
                $collection->timestamps();
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
