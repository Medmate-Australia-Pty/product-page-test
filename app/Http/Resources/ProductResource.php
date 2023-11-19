<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'slug' => $this->slug,
            'price' =>  [
                'full' => $this->price,
                'discounted' => $this->getLatestDiscountPrice()
            ],
            'discount' => $this->getLatestDiscount(),
            'images' => $this->getImagesPath($this->product_images),
            'discounts' => $this->product_discounts
        ];
    }

    private function getImagesPath($images) {
        $images_paths = [];
        if (!empty($images)) {
            foreach ($images as $image) {
                $images_paths[] = $image->path;
            }
        }

        return $images_paths;
    }
}
