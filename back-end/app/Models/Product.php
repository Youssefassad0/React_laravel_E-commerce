<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'status',
        'description',
        'summary',
        'price',
        'disscounted_price',
        'image',
        'category_id',
        'brand_id',
        'stock'
    ];
    public function catgory()
    {
        return $this->belongsTo(Category::class);
    }
    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }
    // Child table review ko lagui
    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
}
