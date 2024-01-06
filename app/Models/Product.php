<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Collection;

class Product extends Model
{
    use HasFactory;
    public function product_images(): HasMany
    {
        return $this->hasMany(ProductImage::class,'product_id');
    }
    public function product_discounts(): HasMany
    {
        return $this->hasMany(ProductDiscounts::class,'product_id');
    }
}
