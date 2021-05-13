<?php

namespace App\Repositorios\Emails;

use App\Repositorios\EmpresaRepo;
use Illuminate\Support\Facades\Mail;

/*para que un email se envie el remitente del usuario debe estar en la base de datos de los emails*/

/**
 * Repositorio de consultas a la base de datos User
 */
class EmailsEspecificosDePaginasRepo
{
    public function getEmpresa()
    {
        $EmpresaDatos = new EmpresaRepo();

        return $EmpresaDatos->getEmpresaDatos();

    }

    /**
     * Email De Contacto De usuario Conectado
     */
    public function EnviarEmailDeSolicitud($request, $Subject)
    {
        $nombre  = $request->get('name');
        $email   = $request->get('email');
        $archivo = $request->file('file');

        Mail::send('emails.solicitud_trabajo',

            //con esta funcion le envia los datos a la vista.
            compact('request'),
            function ($m) use ($nombre, $email, $archivo, $Subject) {

                $m->from($email, $nombre);

                if ($archivo != null) {

                    $m->attach($archivo->getRealPath(), [
                        'as'   => $archivo->getClientOriginalName(),
                        'mime' => $archivo->getMimeType()]);
                }

                $m->to($this->getEmpresa()
                        ->email,
                    $this->getEmpresa()
                        ->name)->subject($Subject);
            }
        );

    }

}
