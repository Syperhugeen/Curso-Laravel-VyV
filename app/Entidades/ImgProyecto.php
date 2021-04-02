<?php

namespace App\Entidades;

use Illuminate\Database\Eloquent\Model;

class ImgProyecto extends Model
{
    protected $table   = 'imgs_proyectos';
    protected $appends = ['url_img'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'description'];

    public function getUrlImgAttribute()
    {

        return 'https://www.veigaventos.com/imagenes/' . $this->img;
    }
}
