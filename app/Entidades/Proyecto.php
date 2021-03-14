<?php

namespace App\Entidades;

use App\Entidades\ImgProyecto;
use App\Helpers\HelpersGenerales;
use Illuminate\Database\Eloquent\Model;

class Proyecto extends Model
{
    protected $table = 'proyectos';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'description'];
    protected $appends  = ['url_img', 'description_parrafo', 'route'];

    public function imagenesproyecto()
    {
        return $this->hasMany(ImgProyecto::class, 'proyecto_id', 'id')->where('estado', 'si');
    }

    /**
     * PAra busqueda por nombre
     */
    public function scopeName($query, $name)
    {

        if (trim($name) != "") {
            $query->where('name', "LIKE", "%$name%");
        }
    }

    public function scopeActive($query)
    {

        $query->where('estado', "si");
    }

    public function getUrlImgAttribute()
    {
        //imagenes asoiadas al proyecto
        $imagenesProyectos = $this->imagenesproyecto;

        //veo si hay alguna que tenga el atributo
        $cantidad_imagenes = $imagenesProyectos->where('foto_principal', 'si')->count();

        if ($cantidad_imagenes === 1) {
            $imagen_principal = $imagenesProyectos->where('foto_principal', 'si')->first();

            return $imagen_principal->url_img;
        } elseif ($cantidad_imagenes === 0) {
            $imagen                 = $imagenesProyectos->first();
            $imagen->foto_principal = 'si';
            $imagen->save();

            return $imagen->url_img;
        } else {
            return 'https://www.veigaventos.com/imagenes/' . $this->img;
        }
    }

    public function getRouteAttribute()
    {

        return route('get_pagina_proyecto_individual', [str_replace(" ", "_", $this->name), $this->id]);
    }

    public function getDescriptionParrafoAttribute()
    {
        $text = HelpersGenerales::helper_convertir_caractereres_entidades_blog_o_similares($this->description);

        return $text;
    }
}
