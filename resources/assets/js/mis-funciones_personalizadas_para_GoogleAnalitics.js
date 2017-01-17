
//Evento De Caragar Unidades
function EventoDeGoogleAnalitics($Elemento,$Categoria,$Nombre,$Accion)
{	

  return $('body').on($Accion,$Elemento,function(e){

  ga('send', 'event', $Categoria, $Accion, $Nombre);
  
  }); 

  
}

