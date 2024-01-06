<?php
namespace App\Services;
use Illuminate\Support\Str;
class CreateToken{
    public static function createToken(){
        $token = Str::random(60);
        return ["token"=>hash('sha256',$token),];
    }
}