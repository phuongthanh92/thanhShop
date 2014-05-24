<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 27/02/2014
 * Time: 06:00
 */

class AttributeCollectionSeeder extends Seeder{
    public function run()
    {
        DB::connection('mongodb')->collection('attribute')->delete();
        $attributes = array(
            array(
                'code'      => 'name',
                'label'     => 'Tên sản phẩm',
                'type'      => 'text',
                'unique'    => 0,
                'require'   => 1,
                'validate'  => 0,
                'system'    => 1,
                'group'     => 'general'
            ),
            array(
                'code'      => 'code',
                'label'     => 'Mã sản phẩm',
                'type'      => 'text',
                'unique'    => 1,
                'require'   => 1,
                'validate'  => 0,
                'system'    => 1,
                'group'     => 'general'
            ),
            array(
                'code'      => 'slug',
                'label'     => 'Đường dẫn thân thiện',
                'type'      => 'text',
                'unique'    => 0,
                'require'   => 1,
                'validate'  => 'slug',
                'system'    => 1,
                'group'     => 'general'
            ),
//            array(
//                'code'      => 'sku',
//                'label'     => 'SKU',
//                'type'      => 'text',
//                'unique'    => 1,
//                'require'   => 0,
//                'validate'  => 'alphanum',
//                'system'    => 1,
//                'group'     => 'general'
//            ),
            array(
                'code'      => 'status',
                'label'     => 'Trạng thái',
                'type'      => 'select',
                'data'      => array(
                    1       => 'Hiển thị',
                    0       => 'Ẩn'
                ),
                'unique'    => 0,
                'require'   => 0,
                'validate'  => 0,
                'system'    => 1,
                'group'     => 'general'
            ),
            array(
                'code'      => 'short_description',
                'label'     => 'Mô tả ngắn gọn',
                'type'      => 'textarea',
                'unique'    => 0,
                'require'   => 0,
                'validate'  => 0,
                'system'    => 1,
                'group'     => 'general'
            ),
            array(
                'code'      => 'description',
                'label'     => 'Mô tả',
                'type'      => 'textarea',
                'unique'    => 0,
                'require'   => 0,
                'validate'  => 0,
                'system'    => 1,
                'group'     => 'general'
            ),
            array(
                'code'      => 'color',
                'label'     => 'Màu sắc',
                'type'      => 'multiselect',
                'data'      => array(
                    'red'       =>  'Đỏ',
                    'white'     =>  'Trắng',
                    'yellow'    =>  'Vàng',
                    'black'     =>  'Đen',
                    'green'     => 'Xanh lá cây',
                    'blue'      =>  'Xanh da trời',
                    'orange'    =>  'Cam',
                    'violet'    =>  'Tím',
                ),
                'unique'    => 0,
                'require'   => 0,
                'validate'  => 0,
                'system'    => 1,
                'group'     => 'general'
            ),
            array(
                'code'      => 'size',
                'label'     => 'Size',
                'type'      => 'text',
                'unique'    => 0,
                'require'   => 0,
                'validate'  => 0,
                'system'    => 1,
                'group'     => 'general'
            ),
            array(
                'code'      => 'hot',
                'label'     => 'Hot',
                'type'      => 'select',
                'data'      => array(
                    0       => 'Không',
                    1       => 'Có',
                ),
                'unique'    => 0,
                'require'   => 0,
                'validate'  => 0,
                'system'    => 1,
                'group'     => 'general'
            ),
            array(
                'code'      => 'image',
                'label'     => 'Hình ảnh',
                'type'      => 'file',
                'unique'    => 0,
                'require'   => 1,
                'validate'  => 'image',
                'system'    => 1,
                'group'     => 'image'
            ),
            array(
                'code'      => 'price',
                'label'     => 'Giá',
                'type'      => 'price',
                'unique'    => 0,
                'require'   => 1,
                'validate'  => 'price',
                'system'    => 1,
                'group'     => 'price'
            ),
            array(
                'code'      => 'group_price',
                'label'     => 'Nhóm giá',
                'type'      => 'group',
                'unique'    => 0,
                'require'   => 0,
                'validate'  => 'price',
                'system'    => 1,
                'group'     => 'group'
            ),
            array(
                'code'      => 'special_price',
                'label'     => 'Giá đặc biệt',
                'type'      => 'price',
                'unique'    => 0,
                'require'   => 0,
                'validate'  => 'price',
                'system'    => 1,
                'group'     => 'price'
            ),
            array(
                'code'      => 'special_form_date',
                'label'     => 'Giá đặc biệt từ ngày',
                'type'      => 'date',
                'unique'    => 0,
                'require'   => 0,
                'validate'  => 'date',
                'system'    => 1,
                'group'     => 'price'
            ),
            array(
                'code'      => 'special_to_date',
                'label'     => 'Giá đặc biệt đến ngày',
                'type'      => 'date',
                'unique'    => 0,
                'require'   => 0,
                'validate'  => 'date',
                'system'    => 1,
                'group'     => 'price'
            ),

            array(
                'code'      => 'meta_title',
                'label'     => 'Meta Title',
                'type'      => 'text',
                'unique'    => 0,
                'require'   => 0,
                'validate'  => 0,
                'system'    => 1,
                'group'     => 'seo'
            ),
            array(
                'code'      => 'meta_keyword',
                'label'     => 'Meta Keywords',
                'type'      => 'textarea',
                'unique'    => 0,
                'require'   => 0,
                'validate'  => 0,
                'system'    => 1,
                'group'     => 'seo'
            ),
            array(
                'code'      => 'meta_description',
                'label'     => 'Meta Description',
                'type'      => 'textarea',
                'unique'    => 0,
                'require'   => 0,
                'validate'  => 0,
                'system'    => 1,
                'group'     => 'seo'
            ),
            array(
                'code'      => 'tag',
                'label'     => 'Tag',
                'type'      => 'text',
                'unique'    => 0,
                'require'   => 0,
                'validate'  => 0,
                'system'    => 1,
                'group'     => 'seo'
            ),
        );

        DB::connection('mongodb')->collection('attribute')->insert( $attributes );

    }
}