<?php

namespace App\Http\Controllers\Publicas;

use App\Helpers\HelpersGenerales;
use App\Http\Controllers\Controller;
use App\Repositorios\EmpresaRepo;
use App\Repositorios\ImgHomeRepo;
use App\Repositorios\NoticiasRepo;
use App\Repositorios\ProyectoRepo;
use Illuminate\Http\Request;

class Paginas_Controller extends Controller
{
    protected $ImgHomeRepo;
    protected $ProyectoRepo;
    protected $NoticiasRepo;
    protected $EmpresaRepo;

    public function __construct(ImgHomeRepo $ImgHomeRepo,
        ProyectoRepo $ProyectoRepo,
        NoticiasRepo $NoticiasRepo,
        EmpresaRepo $EmpresaRepo) {
        $this->ProyectoRepo = $ProyectoRepo;
        $this->ImgHomeRepo  = $ImgHomeRepo;
        $this->NoticiasRepo = $NoticiasRepo;
        $this->EmpresaRepo  = $EmpresaRepo;
    }

    //Contacto viejo que redirecciona al nuevo
    public function get_pagina_contacto()
    {
        return redirect()->route('get_new_contactar');
    }

    public function get_new_contactar()
    {
        $Data = [
            'title'       => 'Contactar',
            'description' => 'Brindamos soluciones profesionales, confiables y creativas utilizando diversas técnicas constructivas.',
            'og_img'      => url() . "/imagenes/Empresa/v-y-v-ingenieria.png",
        ];

        return view('paginas.webpack_compilado.index', compact('Data'));
    }

    //Empresa
    public function get_pagina_empresa()
    {
        return redirect()->route('get_new_empresa');
    }

    public function get_new_empresa()
    {
        $Data = [
            'title'       => 'Acerca de V & V | Estudio de ingeniería',
            'description' => 'Brindamos soluciones profesionales, confiables y creativas utilizando diversas técnicas constructivas.',
            'og_img'      => url() . "/imagenes/Empresa/v-y-v-ingenieria.png",
        ];

        return view('paginas.webpack_compilado.index', compact('Data'));
    }

    public function get_cotizar()
    {
        $Data = [
            'title'       => 'Cotizar proyecto',
            'description' => 'Le hacemos el presupuesto de su proyecto de ingeniería con celeridad.',
            'og_img'      => url() . "/imagenes/Empresa/v-y-v-ingenieria.png",
        ];

        return view('paginas.webpack_compilado.index', compact('Data'));
    }

    //servicios
    public function get_pagina_servicios()
    {

        return redirect()->route('get_pagina_new_servicios');
    }

    public function get_pagina_new_servicios()
    {
        $Data = [
            'title'       => 'Servicios',
            'description' => 'Brindamos soluciones profesionales, confiables y creativas utilizando diversas técnicas constructivas.',
            'og_img'      => url() . "/imagenes/Empresa/v-y-v-ingenieria.png",
        ];

        return view('paginas.webpack_compilado.index', compact('Data'));
    }

    //Noticias
    public function get_pagina_noticias_listado(Request $Request)
    {
        $Noticias = $this->NoticiasRepo->getEntidadActivasPaginadas($Request, 6);

        return view('paginas.noticias.noticias_listado', compact('Noticias'));
    }

    //Noticias Individual
    public function get_pagina_noticia_individual($name, $id)
    {
        $Noticia = $this->NoticiasRepo->find($id);

        return view('paginas.noticias.noticias_individual', compact('Noticia'));
    }

    public function get_trabajos_ajax(Request $Request)
    {
        $arrayConsulta = [
            [
                'where_tipo' => 'where',
                'key'        => 'estado',
                'value'      => 'si',
            ],
        ];
        $Ids      = $Request->get('ids');
        $Cantidad = $Request->get('cantidad');

        if ($Ids == '') {
            $Ids = [];
        } else {
            $Ids = array_values(explode(',', $Ids));
        }

        $Blogs = $this->ProyectoRepo->getEntidadesMenosIdsYConFiltros($arrayConsulta, $Ids, $Cantidad, 'created_at', 'DESC');

        return HelpersGenerales::formateResponseToVue(true, 'Se cargaron los blogs bien.', $Blogs);
    }

    //Proyectos
    public function get_pagina_proyecto_listado(Request $Request)
    {
        return redirect()->route('get_pagina_new_proyecto_listado');
    }

    public function get_pagina_new_proyecto_listado()
    {
        $Data = [
            'title'       => 'Proyectos',
            'description' => 'Trabajos de  V & V ',
            'og_img'      => url() . "/imagenes/Empresa/v-y-v-ingenieria.png",
        ];

        return view('paginas.webpack_compilado.index', compact('Data'));
    }

    public function get_pagina_proyecto_individual($name, $id)
    {
        return redirect()->route('get_pagina_new_proyecto_individual', [$name, $id]);
    }

    public function get_pagina_new_proyecto_individual($name, $id)
    {
        $Proyecto = $this->ProyectoRepo->find($id);

        // vieja // return view('paginas.proyecto.proyecto_individual', compact('Proyecto'));

        $Data = [
            'title'       => $Proyecto->name,
            'description' => 'Brindamos soluciones profesionales, confiables y creativas utilizando diversas técnicas constructivas.',
            'og_img'      => $Proyecto->url_img,
        ];

        return view('paginas.webpack_compilado.index', compact('Data'));
    }

    public function get_projecto_individual_ajax(Request $Request)
    {
        return HelpersGenerales::formateResponseToVue(true, 'Se cargo proeycto', $this->ProyectoRepo->find($Request->get('id')));
    }
}
