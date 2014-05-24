<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCategories extends Migration{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(){
        if(!Schema::connection('mongodb')->hasTable('categories')){
            Schema::create('categories', function ($table){
                $table->increments('id');
                $table->string('name', 100);
                $table->string('url_key', 100);
                $table->string('meta_keyword');
                $table->string('meta_description');
                $table->smallInteger('active')->default(1);
                $table->smallInteger('parent');
                $table->smallInteger('position');
                $table->index('url_key');
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
