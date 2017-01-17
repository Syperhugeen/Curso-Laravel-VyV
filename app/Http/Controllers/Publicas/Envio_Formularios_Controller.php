<?php

namespace App\Http\Controllers\Publicas;

use App\Http\Controllers\Controller;
use App\Repositorios\EmpresaRepo;
use Illuminate\Http\Request;
use App\Repositorios\Emails\EmailsRepo;
use App\Repositorios\Emails\EmailsEspecificosDePaginasRepo;;
use App\Managers\envio_solicitud_trabajo_manager;



class Envio_Formularios_Controller extends Controller
{
  
    protected $EmpresaRepo;
    protected $EmailsRepo;
    protected $EmailsEspecificosDePaginasRepo;
   

    public function __construct(EmpresaRepo                    $EmpresaRepo,
                                EmailsRepo                     $EmailsRepo,
                                EmailsEspecificosDePaginasRepo $EmailsEspecificosDePaginasRepo)
    {
        
        $this->EmpresaRepo                    = $EmpresaRepo;
        $this->EmailsRepo                     = $EmailsRepo;
        $this->EmailsEspecificosDePaginasRepo = $EmailsEspecificosDePaginasRepo;
    }

    public function post_contacto_form(Request $Request)
    {
        $entidad = '';
        $manager = new envio_solicitud_trabajo_manager($entidad,$Request->all());


        if ($manager->isValid())
        {
         
         //envio el email de la contacto
         $this->EmailsRepo->EnvioEmailDeContacto();

         return redirect()->route('get_home')
                          ->with('alert' , 'Solicitud de contacto enviada con exíto.');      
        }  


        
        
        return redirect()->back()->withErrors($manager->getErrors())->withInput($manager->getData());
    }

    public function post_envio_solicitud_trabajo_form(Request $Request)
    {
        
        $entidad = '';
        $manager = new envio_solicitud_trabajo_manager($entidad,$Request->all());


        if ($manager->isValid())
        {
         
         //envio el email de la solciitud de trabajo
         $this->EmailsEspecificosDePaginasRepo->EnviarEmailDeSolicitudDeTrabajo($Request);

         return redirect()->route('get_home')
                          ->with('alert' , 'Solicitud de trabajo enviada correctamente. En breve nos contactaremos con usted. ');      
        }  
        
        return redirect()->back()->withErrors($manager->getErrors())->withInput($manager->getData());
    }

    public function post_envio_solicitud_cotizacion_proyecto_form(Request $Request)
    {
        
        $entidad = '';
        $manager = new envio_solicitud_trabajo_manager($entidad,$Request->all());


        if ($manager->isValid())
        {
         
         //envio el email de la solciitud de trabajo
         $this->EmailsEspecificosDePaginasRepo->EnviarEmailDeSolicitudDeCotizacion($Request);

         return redirect()->route('get_home')
                          ->with('alert' , 'Solicitud de cotización de proyecto enviada correctamente. En breve nos contactaremos con usted. ');      
        }  
        
        return redirect()->back()->withErrors($manager->getErrors())->withInput($manager->getData());
    }


}
