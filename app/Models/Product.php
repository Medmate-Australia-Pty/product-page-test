<?php

namespace App\Models;
namespace App\Models\ProductDiscount;
namespace App\Models\ProductImage;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "description",
        "slug",
        "price",
        "active"
    ];
    
    public function discount() : HasOne {
        return $this->hasOne(ProductDiscount::class);
    }

    public function images() : HasMany {
        return $this->hasMany(ProductImage::class);
    }
}
