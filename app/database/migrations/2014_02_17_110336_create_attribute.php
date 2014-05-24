<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAttribute extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        if (!Schema::connection('mongodb')->hasTable('attribute'))
        {
            Schema::connection('mongodb')->create('attribute', function($collection)
            {
                $collection->index('code');
                $collection->unique('code');
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

	}

}
