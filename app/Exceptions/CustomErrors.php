<?php

namespace App\Exceptions;

class CustomErrors extends \Exception
{
    public static function make($message = "Something Went Wrong", $code = 500)
    {
        return new CustomErrors($message, $code);
    }
    public static function recordNotFound($message = "Record Not Found", $code = 200){
        return new CustomErrors($message, $code);
    }
}
