<?php
namespace App\Repositorios;

use App\Repositorios\Emails\EmailsRepo;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Input;

/**
 * Contiene metodos comunes para todo los repositorios
 */
abstract class BaseRepo
{
    /**
     * entidad que ingresamos por parametro
     */
    protected $entidad;

    public function __construct()
    {

        $this->entidad = $this->getEntidad();
    }

    public function getEmailsRepo()
    {
        return new EmailsRepo();
    }

    /**
     *  Devulve entidades filtrando por estos parametros
     *  @param $Entidad_key_array es un array de este tipo [
    [ 'where_tipo' => 'where',
    'key'        => 'empresa_id',
    'value'      => $Empresa_id
    ]
    ]
     *  @param $Cantidad La cantidad que quiero cada vez que pido
     *  @param $Ordenar_key Orden key
     *  @param $Order_sentido sentido del orden
     *  @param $Borrado si trae borrados o no
     *
     *  @return array
     */
    public function getEntidadesMenosIdsYConFiltros($Entidad_key_array = null,
        $Ids_ya_cargados,
        $Cantidad,
        $Ordenar_key = 'fecha',
        $Order_sentido = 'desc') {
        $Entidades = $this->getEntidad()
            ->where(function ($q) use ($Entidad_key_array) {

                if ($Entidad_key_array != null) {
                    foreach ($Entidad_key_array as $clave => $valor) {
                        if ($valor['where_tipo'] == 'where') {
                            $q->where($valor['key'], $valor['value']);
                        } elseif ($valor['where_tipo'] == 'orWhere') {
                            $q->orWhere($valor['key'], $valor['value']);
                        } elseif ($valor['where_tipo'] == 'whereBetween') {
                            $q->whereBetween($valor['key'], [
                                $valor['value']['start'],
                                $valor['value']['end'],
                            ]);
                        }
                    }
                }
            })
            ->whereNotIn('id', $Ids_ya_cargados)
            ->orderBy($Ordenar_key, $Order_sentido)
            ->get();

        if ($Entidades->count() >= $Cantidad && $Cantidad != null) {
            return $Entidades->take($Cantidad);
        }

        return $Entidades;
    }

    public function find($id)
    {
        return $this->entidad->find($id);
    }

    public function destroy_entidad($id)
    {
        $entidad_a_borrar = $this->find($id);
        $entidad_a_borrar->delete();
    }

    /**
     * Entidades Activas
     */
    public function getEntidadActivas()
    {
        return $this->entidad
            ->active()
            ->orderBy('id', 'desc')
            ->get();
    }

    /**
     * Entidades Activas Paginadas
     */
    public function getEntidadActivasPaginadas($request, $paginacion)
    {
        return $this->entidad
            ->name($request->get('name'))
            ->active()
            ->orderBy('updated_at', 'desc')
            ->paginate($paginacion);
    }

    /**
     * Entidades All ya paginadas Paginadas
     */
    public function getEntidadesAllPaginadas($request, $paginacion)
    {

        return $this->entidad
            ->name($request->get('name'))
            ->orderBy('id', 'desc')
            ->paginate($paginacion);
    }

    /**
     * Ultimas Entidades Activas
     */
    public function getUltimasEntidadesRegistradasRandomActive($request, $cantidad)
    {

        $cantidad_de_entidades = $this->entidad->active()->get()->count();

        if ($cantidad_de_entidades >= $cantidad) {
            $entidades = $this->entidad
                ->name($request->get('name'))
                ->active()
                ->orderBy('id', 'DESC')
                ->take($cantidad)
                ->get();
        } else {
            $entidades = $this->entidad
                ->name($request->get('name'))
                ->active()
                ->orderBy('id', 'DESC')
                ->get();
        }

        return $entidades;
    }

    /**
     * Ultima entidades modificadas
     */
    public function getUltimasEntidadesModificadasRegistradasRandomActive($request, $cantidad)
    {
        $cantidad_de_entidades = $this->entidad->active()->get()->count();

        if ($cantidad_de_entidades >= $cantidad) {
            $entidades = $this->entidad
                ->name($request->get('name'))
                ->active()
                ->orderBy('updated_at', 'DESC')
                ->take($cantidad)
                ->get();
        } else {
            $entidades = $this->entidad
                ->name($request->get('name'))
                ->active()
                ->orderBy('updated_at', 'DESC')
                ->get();
        }

        return $entidades;
    }

    /**
     * funcion que va a hacer creada el los repo que extiendan.
     */
    abstract public function getEntidad();

    //setters

    public function setEntidadDato($Entidad, $request, $Propiedades)
    {

        foreach ($Propiedades as $Propiedad) {
            if ($request->input($Propiedad) != '') {
                $Entidad->$Propiedad = $request->input($Propiedad);
            } else {
                $Entidad->$Propiedad = null;
            }
        }

        $Entidad->save();
    }

    public function setImagen($Entidad, $request, $nombreDelCampoForm, $carpetaDelArchivo, $nombreDelArchivo, $ExtensionDelArchivo)
    {

        if ($request->hasFile($nombreDelCampoForm)) {
            //obtenemos el campo file definido en el formulario
            $file = $request->file($nombreDelCampoForm);

            //nombre del Archico / Carpeta Incluido
            $nombre                       = $carpetaDelArchivo . $nombreDelArchivo . $ExtensionDelArchivo;
            $Entidad->$nombreDelCampoForm = $nombre;
            $Entidad->save();

            //indicamos que queremos guardar un nuevo archivo en el disco local
            Storage::disk('local')->put($nombre, File::get($file));
        }
    }

    /**
     * Para subidas multiples
     */
    public function setImagenMultiples($Entidad, $file, $nombreDelCampoForm, $carpetaDelArchivo, $nombreDelArchivo, $ExtensionDelArchivo)
    {
        //nombre del Archico / Carpeta Incluido
        $nombre                       = $carpetaDelArchivo . $nombreDelArchivo . $ExtensionDelArchivo;
        $Entidad->$nombreDelCampoForm = $nombre;

        //indicamos que queremos guardar un nuevo archivo en el disco local
        Storage::disk('local')->put($nombre, File::get($file));
        $Entidad->save();
    }

    /**
     * De vuelve las imagenes segun el campo e id a buscar de la entidad
     */
    public function get_imagen_principal_de_entidad_especifica($atributo_name, $id_del_atributo)
    {
        return $this->entidad
            ->where($atributo_name, $id_del_atributo)
            ->where('foto_principal', 'si')
            ->get();
    }

    public function set_datos_de_img($file, $Entidad, $nombre_de_la_propiedad, $id_de_la_propiedad, $request, $LugarDondeSeAloja)
    {
        $Imagen = $Entidad;

        //nombre de la calve foraña y su valor
        $Imagen->$nombre_de_la_propiedad = $id_de_la_propiedad;

        //estado activo
        $Imagen->estado = 'si';

        //guardo
        $Imagen->save();

        $this->setImagenMultiples($Imagen, $file, 'img', $LugarDondeSeAloja, $Imagen->id, '.png');

        $Imagen->save();
    }

    //base Repo. Ahorro codigo
    public function cambio_a_imagen_principal_desde_base_repo($imagen_pricipal, $imagen)
    {

//cuento si es que hay
        if ($imagen_pricipal->count() > 0) {
            //agarro la imagen
            $imagen_principal_efectiva                 = $imagen_pricipal->first();
            $imagen_principal_efectiva->foto_principal = null;
            $imagen_principal_efectiva->save();

            //le indico que es la imagen pricnipal
            $imagen->foto_principal = 'si';
            $imagen->save();
        }
    }
}
