<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class ProductRequest extends BaseRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|required|string',
            'slug' => 'sometimes|required|string|unique:products,slug,' . $this->route('id'),
            'price' => 'sometimes|required|integer|min:0',
            'active' => 'sometimes|boolean',
            'images' => 'sometimes|array',
            'images.*.path' => 'required|string|max:255',
            'discount.type' => 'sometimes|required|in:percent,amount',
            'discount.discount' => 'sometimes|required|integer|min:0',
        ];
    }

    /**
     * Get custom messages for validator errors.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'name.required' => 'A product name is required',
            'description.required' => 'A product description is required',
            'slug.required' => 'A product slug is required',
            'slug.unique' => 'This product slug is already in use',
            'price.required' => 'A product price is required',
            'price.integer' => 'Price must be a whole number',
            'price.min' => 'Price cannot be negative',
            'images.*.path.required' => 'Image path is required',
            'discount.type.in' => 'Discount type must be either percent or amount',
            'discount.discount.min' => 'Discount value cannot be negative',
        ];
    }
} 