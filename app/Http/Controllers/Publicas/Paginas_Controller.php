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

    //Contacto
    public function get_pagina_contacto()
    {
        return view('paginas.contacto.contacto');
    }

    //Empresa
    public function get_pagina_empresa()
    {
        $Empresa = $this->EmpresaRepo->getEmpresaDatos();

        return view('paginas.empresa.empresa', compact('Empresa'));
    }

    //servicios
    public function get_pagina_servicios()
    {

        return view('paginas.servicios.servicios');
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
        $Proyectos = $this->ProyectoRepo->getEntidadActivasPaginadas($Request, 6);

        return view('paginas.proyecto.proyecto_listado', compact('Proyectos'));
    }

    public function get_pagina_proyecto_individual($name, $id)
    {

        $Proyecto = $this->ProyectoRepo->find($id);

        return view('paginas.proyecto.proyecto_individual', compact('Proyecto'));
    }
}
