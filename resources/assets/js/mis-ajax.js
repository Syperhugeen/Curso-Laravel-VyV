//envio la peticion de contacto
$('body').on('click','#Envio-de-form',function(e){

  e.preventDefault();


  
  var form = $('#solicitud-trabajo-form');

  var url  = form.attr('action');

  var data = form.serialize();

  var contenedor = form;

  var mensaje_contenedor = $('#notify-mensaje');

     //envio de peticion con ayax
     $.post(url,data, function(resul){
    
      if(resul.validation == true)
      {
        //elimino de la vista al usuario
       contenedor.fadeOut();

       

       //alert(resul);       
       $.notify(
        {

        // options
        message: resul.mensaje 
        },
        {
             // settings
             type: 'success',
        placement: {
          from: "top",
          align: "center"
        }
        });

       //en div alert(resul);       
       $.notify(
        {

        // options
        message: resul.mensaje 
        },
        {
             // settings
             type: 'success',
          element: mensaje_contenedor,
         position: 'static',
        placement: {
          from: "top",
          align: "center"
        }
        });
        
      }
      else
      {
        $.notify({

        // options
        message: resul.mensaje 
        },{
        // settings
        type: 'danger',
     element: mensaje_contenedor,
    position: 'relative',
      placement: {
        from: "top",
        align: "center"
      }
        });
      }

     });
     


}); 