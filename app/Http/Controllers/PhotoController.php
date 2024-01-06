<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\ProductImageTrait;
use App\Models\ProductImage;
use App\Exceptions\CustomErrors;

class PhotoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try{
        $images = ProductImage::orderBy("created_at","desc")->get();
        foreach ($images as $key) {
            $key['path'] = str_replace('//','/',$key['path']);
        }
        return response()->json(["message"=>"Record found","data"=>$images],200);
    }catch (\Exception $e){
        throw CustomErrors::make();
    }
}


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    use ProductImageTrait;
    public function store(Request $request)
    {
        try{
            $path = $this->verifyAndUpload($request);
            ProductImage::create([
                'product_id' => $request->id,
                'path' => $path
            ]);
            return response()->json(["message"=>"File Stored","data"=>$path],200);
        }
        catch (\Exception $e){
            throw CustomErrors::make();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        try{
        $productImage = ProductImage::where('product_id',$id)->get();
        if ($productImage == null){
            return response()->json(['message'=>'Record Not Found','data'=>[]],404);
        }
        foreach ($productImage as $key) {
            $key['path'] = str_replace('//','/',$key['path']);
        }
        return response()->json(['message'=> 'Record Found','data'=>$productImage],200);
    }catch (\Exception $e){
        throw CustomErrors::make();
    }
}

    
    

    
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        try{
        $productImage = ProductImage::find($id);
        if ($productImage == null){
            return response()->json(['message'=>'Record Not Found','data'=>[]],404);
        }
        $productImage->delete();
        return response()->json(['message'=> 'Image Deleted',"data"=>''],200);
    }catch (\Exception $e){
        throw CustomErrors::make();
    }
}
    public function getImage($filename)
    {
        try{
        $path = storage_path("app/public/product_images/{$filename}");
    
        if (file_exists($path)) {
            return response()->file($path);
        } else {
            return response()->json(['message' => 'Image not found',"data"=>[]], 404);
        }
    }
    catch (\Exception $e){
        throw CustomErrors::make();
    }
}
}
