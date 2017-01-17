<?php 

namespace App\Repositorios;

use App\Entidades\Evento;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

/**
* Repositorio de consultas a la base de datos User
*/
class EventoRepo extends BaseRepo
{
  
  public function getEntidad()
  {
    return new Evento();
  }



 
  

  
}