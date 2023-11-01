<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'slug', 'price', 'active'];

    public function images()
    {
        return $this->hasMany(ProductImage::class);
    }

    public function discount()
    {
        return $this->hasOne(ProductDiscount::class);
    }

    /**
     * To calculate discount for a product based on type.
     *
     * @param Product $product
     *
     * @return int
     */
    public function calculateProductDiscount(Product $product) : int
    {
        $type = $product->discount->type;
        $price = $product->price;
        $discount = $product->discount->discount;

        if ($type === 'percent') {
            return $price * ($discount / 100);
        } elseif ($type === 'amount') {
            return $discount;
        } else {
            return 0; // No discount if the type is invalid
        }
    }
}
