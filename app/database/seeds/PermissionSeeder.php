<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 15/03/2014
 * Time: 10:00
 */

class PermissionSeeder extends Seeder {

    public function run()
    {
        DB::table('permissions')->delete();


        $permissions = array(
            array(
                'name'      => 'management_customer',
                'display_name'      => 'Quản lý khách hàng'
            ),
            array(
                'name'      => 'management_order',
                'display_name'      => 'Quản lý hoá đơn'
            ),
            array(
                'name'      => 'management_product',
                'display_name'      => 'Quản lý sản phẩm'
            ),
            array(
                'name'      => 'management_category',
                'display_name'      => 'Quản lý danh mục'
            ),
            array(
                'name'      => 'management_attribute',
                'display_name'      => 'Quản lý thuộc tính'
            ),
            array(
                'name'      => 'management_attribute_group',
                'display_name'      => 'Quản lý nhóm thuộc tính'
            ),
            array(
                'name'      => 'management_contact',
                'display_name'      => 'Quản lý liên hệ'
            ),
            array(
                'name'      => 'management_statistic',
                'display_name'      => 'Quản lý thống kê'
            ),
            array(
                'name'      => 'management_user',
                'display_name'      => 'Quản lý thành viên'
            ),
            array(
                'name'      => 'management_permissions',
                'display_name'      => 'Phân quyền'
            ),
            array(
                'name'      => 'management_setting',
                'display_name'      => 'Quản lý thông tin website'
            ),
            array(
                'name'      => 'management_banner',
                'display_name'      => 'Quản lý banner'
            ),
            array(
                'name'      => 'management_slide',
                'display_name'      => 'Quản lý slide'
            ),
            array(
                'name'      => 'management_article',
                'display_name'      => 'Quản lý bài viết'
            ),
        );

        DB::table('permissions')->insert( $permissions );

        DB::table('permission_role')->delete();

        $permissions = array(
            array(
                'role_id'      => 1,
                'permission_id' => 1
            ),
            array(
                'role_id'      => 1,
                'permission_id' => 2
            ),
            array(
                'role_id'      => 1,
                'permission_id' => 3
            ),
            array(
                'role_id'      => 1,
                'permission_id' => 4
            ),
            array(
                'role_id'      => 1,
                'permission_id' => 5
            ),
            array(
                'role_id'      => 1,
                'permission_id' => 6
            ),
            array(
                'role_id'      => 2,
                'permission_id' => 6
            ),
        );

        DB::table('permission_role')->insert( $permissions );
    }

}
