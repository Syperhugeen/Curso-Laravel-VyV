
//elemento_form_a_enviar, boton disparador y contenedor_seccion = string, 
function envio_de_peticion_post_ajax_con_alert(elemento_form_a_enviar, boton_disparador,contenedor_seccion)
{
  $('body').on('click', boton_disparador,function(e)
  {

  e.preventDefault();
  
  var form = $(elemento_form_a_enviar);

  var url  = form.attr('action');

  var data = form.serialize();

  if(contenedor_seccion === null)
  {
     var contenedor = form;
  }
  else
  {
     var contenedor = $(contenedor_seccion);
    
  }
  

  var mensaje_contenedor = $('#notify-mensaje');

     //envio de peticion con ayax
     $.post(url,data, function(resul){
    
      if(resul.validation == true)
      {
         //elimino de la vista al usuario
         contenedor.fadeOut();  
       
         //llamo a mi funcion de mensajes alert luego de la peticion
         alerta_mensaje_luego_de_peticion(mensaje_contenedor,'success',resul.mensaje);
      }
      else
      {
         //llamo a mi funcion de mensajes alert luego de la peticion
         alerta_mensaje_luego_de_peticion(mensaje_contenedor,'danger',resul.mensaje);
      }

     });
  }); 
}

