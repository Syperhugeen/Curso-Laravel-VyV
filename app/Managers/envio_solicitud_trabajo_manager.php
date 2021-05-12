<?php
namespace App\Managers;

use App\Managers\ManagerBase;

/**
 *
 */
class envio_solicitud_trabajo_manager extends ManagerBase
{

    public function getRules()
    {
        $rules = [
            'name'    => 'required',
            'email'   => 'required|email',
            'message' => 'required',
        ];

        return $rules;
    }

}
