<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Product extends Model
{
    use HasFactory;

    //Product attributes
    protected $fillable = [
        'name',
        'description',
        'slug',
        'price',
        'active'
    ];

    protected $hidden = [
        'active',
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    //Product has many product images
    public function product_images() : HasMany {
        return $this->hasMany(ProductImage::class);
    }

    //Product has a multiple product discounts
    public function product_discounts() : HasMany {
        return $this->hasMany(ProductDiscount::class);
    }

    public function getLatestDiscount() {
        $latest_discount = ProductDiscount::where('product_id', $this->id)->orderby('created_at', 'desc')->first();

        if ($latest_discount) {
            return [
                'type' => $latest_discount->type,
                'amount' => $latest_discount->discount
            ];
        }
    }

    public function getLatestDiscountPrice() {
        //check if discount exists for this product
        $latest_discount = ProductDiscount::where('product_id', $this->id)->orderby('created_at', 'desc')->first();
        //calculate discount based on enum type
        if ($latest_discount) {
            switch($latest_discount->type) {
                case 'percent':
                    return $this->price * ($latest_discount->discount / 100);
                case 'amount':
                    return $this->price - $latest_discount;
            }
        }

        return null;
    }
}
