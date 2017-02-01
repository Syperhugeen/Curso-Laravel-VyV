<?php 

namespace App\Repositorios\Emails;


use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Repositorios\EmpresaRepo;



/*para que un email se envie el remitente del usuario debe estar en la base de datos de los emails*/

/**
* Repositorio de consultas a la base de datos User
*/
class EmailsRepo 
{



    public function getEmpresa()
    {
      $EmpresaDatos =  new EmpresaRepo();
      
      return $EmpresaDatos->getEmpresaDatos();

    }



    /**
     * Funcion De Envio de Email cuando se registra o para Reenviar
     */
    public function EnviarEmailDeConfirmacion($user)
    {
        $url = route('confirmation' , [ 'token' => $user->registration_token ]);
        
        /**
         * Le envio el email con el token para que se valide el registro.
         */
         Mail::send('emails.registration' ,

                   //con esta funcion le envia los datos a la vista.
                   compact('user' , 'url')       ,
                   function($m) use ($user) 
                   {
                     $m->from($this->getEmpresa()
                                   ->email_no_reply, 

                                    $this->getEmpresa()
                                         ->name);
                     $m->to($user->email , $user->name)->subject($user->first_name.' Activa tu cuenta en ' .
                        $this->getEmpresa()
                             ->name );
                   }
        );

    }

    


    /**
     * Email De Contacto
     */
    public function EnvioEmailDeContacto($Request)               
    {
         $nombre   = $Request->get('name');
         $email    = $Request->get('email');
         $mensaje  = $Request->get('mensaje');
         $telefono = $Request->get('telefono');

         Mail::send('emails.solicitud_contacto' ,

                   //con esta funcion le envia los datos a la vista.
                   compact('nombre' , 'email','mensaje','telefono')       ,
                   function($m) use ($nombre,$email) 
                   {

                     $m->from($email, $nombre);

                     $m->to( $this->getEmpresa()
                                  ->email, 
                             $this->getEmpresa()
                                  ->name)->subject('Consulta de '.$nombre );
                   }
         );

    }



   


    

  




  


}