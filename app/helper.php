<?php

function resizeImage($link, $width = null, $height = null, $quantity = null){
    $fileResize = url('resizeImage.php');
    if(preg_match('/^http:\/\//',$link) == false && preg_match('/^https:\/\//',$link) == false){
        $link = url($link);
    }
    $url = $fileResize . "?src={$link}";
    $url .= $width == null ? '' : "&amp;w={$width}";
    $url .= $height == null ? '' : "&amp;h={$height}";
    $url .= $quantity == null ? '' : "&amp;q={$quantity}";
    return url($url);
}
function resizeImageAgent($link, $width = null, $height = null, $quantity = null){
    if(Agent::isMobile()){
        $width = 150;
    }elseif(Agent::isTablet()){
        $width = 200;
    }
    $fileResize = url('resizeImage.php');
    if(preg_match('/^http:\/\//',$link) == false && preg_match('/^https:\/\//',$link) == false){
        $link = url($link);
    }
    $url = $fileResize . "?src={$link}";
    $url .= $width == null ? '' : "&amp;w={$width}";
    $url .= $height == null ? '' : "&amp;h={$height}";
    $url .= $quantity == null ? '' : "&amp;q={$quantity}";
    return url($url);
}