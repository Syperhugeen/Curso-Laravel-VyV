<?php

namespace App\Http\Controllers\Publicas;

use App\Http\Controllers\Controller;
use App\Repositorios\EmpresaRepo;
use App\Repositorios\ImgHomeRepo;
use App\Repositorios\NoticiasRepo;
use App\Repositorios\ProyectoRepo;
use Illuminate\Http\Request;

class Home_Public_Controller extends Controller
{
    protected $ImgHomeRepo;
    protected $EmpresaRepo;
    protected $ProyectoRepo;
    protected $NoticiasRepo;

    public function __construct(ImgHomeRepo $ImgHomeRepo,
        EmpresaRepo $EmpresaRepo,
        ProyectoRepo $ProyectoRepo,
        NoticiasRepo $NoticiasRepo) {
        $this->ImgHomeRepo  = $ImgHomeRepo;
        $this->EmpresaRepo  = $EmpresaRepo;
        $this->ProyectoRepo = $ProyectoRepo;
        $this->NoticiasRepo = $NoticiasRepo;
    }

    public function get_home(Request $Request)
    {

        //$Empresa   = $this->EmpresaRepo->getEmpresaDatos();
        //$Proyectos = $this->ProyectoRepo->getUltimasEntidadesModificadasRegistradasRandomActive($Request, 2);
        //$Noticias  = $this->NoticiasRepo->getUltimasEntidadesModificadasRegistradasRandomActive($Request, 2);

        //return view('paginas.home.home', compact('Empresa', 'Proyectos', 'Noticias'));

        $Data = [
            'title'       => 'Estudio de ingeniería en Uruguay | V & V',
            'description' => 'Brindamos soluciones profesionales, confiables y creativas utilizando diversas técnicas constructivas.',
            'og_img'      => url() . "/imagenes/Empresa/og.jpg",
        ];

        return view('paginas.webpack_compilado.index', compact('Data'));
    }

}
