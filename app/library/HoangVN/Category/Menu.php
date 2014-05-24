<?php
/**
 * Created by PhpStorm.
 * User: Hoang
 * Date: 05/03/2014
 * Time: 23:13
 */
namespace HoangVN\Category;
class Menu
{
    private  $breadcrumb = null;

    // Recursive function that builds the menu from an array or object of items
    // In a perfect world some parts of this function would be in a custom Macro or a View
    public function buildMenuNestable($menu, $parentId = 0)
    {
        $result = null;
        foreach ($menu as $item) {
            if ($item->parent_id == $parentId) {
                $result .= '<li class="dd-item dd3-item" data-name="' . $item->name . '" data-parent-id="' . $item->parent_id . '" data-id="' . $item->id . '" title="' . $item->slug . '" data-order="' . $item->order . '">';
                $result .= '<div class="dd-handle dd3-handle icon-move">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>';
                $result .= '<div class="dd3-content">';
                if ($item->active == 0) {
                    $result .= '<i class="not-active">' . $item->name . '<i>';
                } else {
                    $result .= $item->name;
                }
                $result .= '<div class="pull-right">';
                $result .= '<a href="' . action('AdminCategoriesController@getEdit', $item->id) . '" title="Edit"> Sửa </a> | ';
                $result .= '<a href="javascript:void(0)" class="delete_toggle" rel="' . $item->id . '" title="Delete"> Xoá </a>';
                $result .= '</div>';
                $result .= '</div>';
                $result .= $this->buildMenuNestable($menu, $item->id);
                $result .= '</li>';
            }
        }
        return $result ? "\n<ol class=\"dd-list\">\n$result</ol>\n" : null;
    }

    public function buildTree($menu, $parentId = 0, $selected=array())
    {
        $result = null;
        foreach ($menu as $item) {
            if ($item->parent_id == $parentId && $item->active == 1) {
                if(in_array($item->id,$selected)){
                    $result .= '<li id="' . $item->id . '" class="expanded selected">';
                }else{
                    $result .= '<li id="' . $item->id . '" class="expanded">';
                }
                $result .= $item->name;
                $result .= $this->buildTree($menu, $item->id, $selected);
                $result .= '</li>';
            }
        }
        return $result ? "\n<ul class=\"tree\">\n$result</ul>\n" : null;
    }

    public function buildNavigation($menu, $parentId = 0)
    {
        $result = null;
        foreach ($menu as $key=>$item) {
            if ($item['parent_id'] == $parentId && $item['active'] == 1) {
                $listId = array();
                foreach($menu as $val){
                    array_push($listId, $val['parent_id']);
                }
                if(in_array($item['id'], $listId)){
                    $result .= '<li class="dropdown"><a href="' . url($item['slug']) . '" class="dropdown-toggle" data-toggle="dropdown">';
                    $result .= $item['name'];
                    $result .='<b class="caret"></b>';
                }else{
                    $result .= '<li><a href="' . url($item['slug']) . '">';
                    $result .= $item['name'];
                }
                $result .= '</a>';
                $result .= $this->buildNavigation($menu, $item['id']);
                $result .= '</li>';
            }
        }
        if($result === null){
            return null;
        }else{
            if(in_array($item['id'], $listId)){
                return "\n<ul>\n$result</ul>\n";
            }else{
                return "\n<ul class=\"dropdown-menu\">\n$result</ul>\n";
            }
        }

//        return $result ? "\n<ul>\n$result</ul>\n" : null;
    }
/*
    public function buildNavigation($menu, $parentId = 0)
    {
        $result = null;
        foreach ($menu as $key=>$item) {
            if ($item->parent_id == $parentId && $item->active == 1) {
                $result .= '<li><a href="' . url($item->slug) . '">';
                $result .= $item->name;
                $result .= '</a>';
                unset($menu[$key]);
                $result .= $this->buildNavigation($menu, $item->id);
                $result .= '</li>';
            }
        }
        return $result ? "\n<ul class='1'>\n$result</ul>\n" : null;
    }*/

    public function buildBreadcrumb($menu, $slug, $parent = null){
        $breadcrumb = null;
        if ($parent === null) {
            foreach ($menu as $key => $item) {
                if ($item->slug == $slug) {
                    $this->breadcrumb = '<li><a href="' . url($item->slug) . '">' . $item->name . '</a></li>' . $this->breadcrumb;
                    unset($menu[$key]);
                    $this->breadcrumb = $this->buildBreadcrumb($menu, null, $item->parent_id);
                }
            }
        } else {
            foreach ($menu as $key => $item) {
                if ($item->id == $parent) {
                    $this->breadcrumb = '<li><a href="' . url($item->slug) . '">' . $item->name . '</a></li>' . $this->breadcrumb;
                    unset($menu[$key]);
                    $this->breadcrumb = $this->buildBreadcrumb($menu, null, $item->parent_id);
                }
            }
        }
        return $this->breadcrumb;
    }
    public function getChild($menu, $slug, $id = null){
        $child = array();
        if ($id === null) {
            foreach ($menu as $key => $item) {
                if ($item->slug == $slug) {
                    array_push($child, $item->id);
                    unset($menu[$key]);
                    $child = array_merge($child, $this->getChild($menu, null, $item->id));
                }
            }
        } else {
            foreach ($menu as $key => $item) {
                if ($item->parent_id == $id) {
                    array_push($child, $item->id);
                    unset($menu[$key]);
                    $child = array_merge($child, $this->getChild($menu, null, $item->id));
                }
            }
        }
        return $child;

    }
}
