 
//tipo de alerta = success,warning,danger . 
function alerta_mensaje_luego_de_peticion(elemento_contenedor_del_mensaje,tipo_de_alerta,texto_alerta)
{

 var mensaje = "<div class='alert alert-"+ tipo_de_alerta +" alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>" + texto_alerta + "</div>" ;

       //agrego de manera manual el
       elemento_contenedor_del_mensaje.html(mensaje);

        //alert(resul);       
        $.notify(
        {
        // options
        message: texto_alerta 
        },
        {
             // settings
             type: tipo_de_alerta,
        placement: {
          from: "top",
          align: "center"
        }
        });
}
