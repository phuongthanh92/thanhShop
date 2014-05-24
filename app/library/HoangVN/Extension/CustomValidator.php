<?php
namespace HoangVN\Validation;
class CustomValidator{
    public function validateHex($attribute, $value, $parameters)
    {
        if(preg_match("/^#?([a-f0-9]{6}|[a-f0-9]{3})$/", $value))
        {
            return true;
        }
        return false;
    }
}
