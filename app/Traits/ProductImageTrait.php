<?php
namespace App\Traits;
use Illuminate\Http\Request;
trait ProductImageTrait {
    /**
     * @param Request $request
     * @return $this|false|string
     */
    public function verifyAndUpload(Request $request, $fieldname = 'file', $directory = 'ProductImages' ) {
        if( $request->hasFile( $fieldname ) ) {
            if (!$request->file($fieldname)->isValid()) {
                return response()->json(['invalid_file_upload'], 400);
            }
            $image_name = rand(11111, 99999) . '_' . time() . '.' . $request->file($fieldname)->getClientOriginalExtension();
            return $request->file($fieldname)->storeAs('product_images/' , $image_name, 'public');
       }
       return null;
    }
}