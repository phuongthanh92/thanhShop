<?php

class DatabaseSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Eloquent::unguard();
//        $this->call('AttributeCollectionSeeder');
        // $this->call('UserTableSeeder');
//		$this->call('CategoriesCollectionSeeder');
        $this->call('PermissionSeeder');

	}

}