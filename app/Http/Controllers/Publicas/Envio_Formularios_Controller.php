<?php

namespace App\Http\Controllers\Publicas;

use App\Helpers\HelpersGenerales;
use App\Http\Controllers\Controller;
use App\Managers\envio_contacto_manager;
use App\Managers\envio_solicitud_trabajo_manager;
use App\Repositorios\Emails\EmailsEspecificosDePaginasRepo;
use App\Repositorios\Emails\EmailsRepo;
use App\Repositorios\EmpresaRepo;
use Illuminate\Http\Request;

class Envio_Formularios_Controller extends Controller
{

    protected $EmpresaRepo;
    protected $EmailsRepo;
    protected $EmailsEspecificosDePaginasRepo;

    public function __construct(EmpresaRepo $EmpresaRepo,
        EmailsRepo $EmailsRepo,
        EmailsEspecificosDePaginasRepo $EmailsEspecificosDePaginasRepo) {

        $this->EmpresaRepo                    = $EmpresaRepo;
        $this->EmailsRepo                     = $EmailsRepo;
        $this->EmailsEspecificosDePaginasRepo = $EmailsEspecificosDePaginasRepo;
    }

    public function dataFooterEmail()
    {
        return [

            [
                'url'  => route('get_new_empresa'),
                'name' => 'Acerca de Veiga y Ventós',
            ],
            [
                'url'  => route('get_pagina_new_servicios'),
                'name' => 'Servicios',
            ],
            [
                'url'  => route('get_pagina_new_proyecto_listado'),
                'name' => 'Proyectos realizados',
            ],
            [
                'url'  => route('get_new_contactar'),
                'name' => 'Contactar',
            ],

        ];
    }

    public function post_contacto_form(Request $Request)
    {

        $manager = new envio_contacto_manager(null, $Request->all());

        //Agrego Data para el email
        $Request->attributes->add(['Color_principal' => '#4a9fff']);
        $Request->attributes->add(['Logo_url' => 'https://www.veigaventos.com/imagenes/Empresa/logo_cuadrado.png']);
        $Request->attributes->add(['Color_fondo' => 'transparent']);
        $Request->attributes->add(['Titulo' => 'Contacto de ' . $Request->get('name')]);
        $Request->attributes->add(['EmpresaName' => 'Estudio de ingeniería Veiga y Ventós']);
        $Request->attributes->add(['Data_footer' => $this->dataFooterEmail()]);

        if ($manager->isValid()) {

            //envio el email de la solciitud de trabajo
            $this->EmailsEspecificosDePaginasRepo->EnviarEmailDeSolicitud($Request, 'Contacto por web de  ' . $Request->get('name'));

            return HelpersGenerales::formateResponseToVue(true, 'Solicitud de contacto enviada con exíto.');

        } else {

            return HelpersGenerales::formateResponseToVue(false, 'Upssssss! algo está mal', $manager->getErrors());
        }
    }

    public function post_envio_solicitud_trabajo_form(Request $Request)
    {

        $manager = new envio_solicitud_trabajo_manager(null, $Request->all());

        //Agrego Data para el email
        $Request->attributes->add(['Color_principal' => '#4a9fff']);
        $Request->attributes->add(['Logo_url' => 'https://www.veigaventos.com/imagenes/Empresa/logo_cuadrado.png']);
        $Request->attributes->add(['Color_fondo' => 'transparent']);
        $Request->attributes->add(['Titulo' => $Request->get('name') . ' CV.']);
        $Request->attributes->add(['EmpresaName' => 'Estudio de ingeniería Veiga y Ventós']);
        $Request->attributes->add(['Data_footer' => $this->dataFooterEmail()]);

        if ($manager->isValid()) {

            //envio el email de la solciitud de trabajo
            $this->EmailsEspecificosDePaginasRepo->EnviarEmailDeSolicitud($Request, 'CV de ' . $Request->get('name'));

            return HelpersGenerales::formateResponseToVue(true, 'Solicitud de contacto enviada con exíto.');

        } else {

            return HelpersGenerales::formateResponseToVue(false, 'Upssssss! algo está mal', $manager->getErrors());
        }

    }

    /**
     * solicitud de cotizacion
     */
    public function post_envio_solicitud_cotizacion_proyecto_form(Request $Request)
    {
        $manager = new envio_contacto_manager(null, $Request->all());

        //Agrego Data para el email
        $Request->attributes->add(['Color_principal' => '#4a9fff']);
        $Request->attributes->add(['Logo_url' => 'https://www.veigaventos.com/imagenes/Empresa/logo_cuadrado.png']);
        $Request->attributes->add(['Color_fondo' => 'transparent']);
        $Request->attributes->add(['Titulo' => 'Cotizar proyecto para ' . $Request->get('name')]);
        $Request->attributes->add(['EmpresaName' => 'Estudio de ingeniería Veiga y Ventós']);
        $Request->attributes->add(['Data_footer' => $this->dataFooterEmail()]);

        if ($manager->isValid()) {

            //envio el email de la solciitud de trabajo
            $this->EmailsEspecificosDePaginasRepo->EnviarEmailDeSolicitud($Request, 'Cotizar proyecto a  ' . $Request->get('name'));

            return HelpersGenerales::formateResponseToVue(true, 'Solicitud de contacto enviada con exíto.');

        } else {

            return HelpersGenerales::formateResponseToVue(false, 'Upssssss! algo está mal', $manager->getErrors());
        }
    }

}
