<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCategory extends Migration{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        if(!Schema::connection('mongodb')->hasTable('category')){
            Schema::connection('mongodb')->create('category', function ($collection){
                $collection->index('url_key');
                $collection->unique('url_key');
                $collection->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(){
        //
    }

}
