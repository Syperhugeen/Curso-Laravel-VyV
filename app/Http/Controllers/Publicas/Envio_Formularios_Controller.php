<?php

namespace App\Http\Controllers\Publicas;

use App\Http\Controllers\Controller;
use App\Repositorios\EmpresaRepo;
use Illuminate\Http\Request;
use App\Repositorios\Emails\EmailsRepo;
use App\Repositorios\Emails\EmailsEspecificosDePaginasRepo;;
use App\Managers\envio_solicitud_trabajo_manager;
use App\Managers\envio_contacto_manager;



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
        $manager = new envio_contacto_manager($entidad,$Request->all());

        //si la peticion es por ajax
        if($Request->ajax())
        {
            
            
              if ($manager->isValid())
              {
                
                //envio el email de la solciitud de trabajo
                $this->EmailsRepo->EnvioEmailDeContacto($Request);

               return response()->json(
                [ 
                    'validation'  => true,
                    'mensaje'     => 'Solicitud de contacto enviada con exíto.',
                                       
                ]
               );     
              }
              else
              {


                return response()->json(
                [ 
                    'validation'  => false,
                    'mensaje'     => 'Verifica lo siguiente:'. $errores,
                                       
                ]
               );  

              }  
         }


        if ($manager->isValid())
        {
         
         //envio el email de la contacto
         $this->EmailsRepo->EnvioEmailDeContacto($Request);

         return redirect()->route('get_home')
                          ->with('alert' , 'Solicitud de contacto enviada con exíto.');      
        }  

        // convierto los errores en array
                $errores = $manager->getErrors();
                 
                $cadena  = $errores;  
                
                foreach ($errores as $error)
                {
                  $cadena = $error;
                }
                dd($cadena);   
        
        return redirect()->back()->withErrors($manager->getErrors())->withInput($manager->getData());
    }

    public function post_envio_solicitud_trabajo_form(Request $Request)
    {
        
        $entidad = '';
        $manager = new envio_solicitud_trabajo_manager($entidad,$Request->all());


        //si la peticion es por ajax
        if($Request->ajax())
        {
            
            
              if ($manager->isValid())
              {
                
                //envio el email de la solciitud de trabajo
                $this->EmailsEspecificosDePaginasRepo->EnviarEmailDeSolicitudDeTrabajo($Request);

               return response()->json(
                [ 
                    'validation'  => true,
                    'mensaje'     => 'Solicitud de trabajo enviada correctamente. En breve nos contactaremos con usted.',
                                       
                ]
               );     
              }
              else
              {
                return response()->json(
                [ 
                    'validation'  => false,
                    'mensaje'     => 'Verifica lo siguiente:'. $manager->getErrors(),
                                       
                ]
               );  

              }  
         }

        // si no es ajax
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

        //si la peticion es por ajax
        if($Request->ajax())
        {
            
            
              if ($manager->isValid())
              {
                
                //envio el email de la solciitud de trabajo
                $this->EmailsEspecificosDePaginasRepo->EnviarEmailDeSolicitudDeTrabajo($Request);

               return response()->json(
                [ 
                    'validation'  => true,
                    'mensaje'     => 'Solicitud de cotización de proyecto enviada correctamente. En breve nos contactaremos con usted. ',
                                       
                ]
               );     
              }
              else
              {
                return response()->json(
                [ 
                    'validation'  => false,
                    'mensaje'     => 'Verifica lo siguiente:'. $manager->getErrors(),
                                       
                ]
               );  

              }  
         }


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
