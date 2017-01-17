//Cuando Sale Mensaje de Error (Validaciones del Servidor)

$('body').on('click','.Error-iconoCerrar, .alerta-iconoCerrar',function(e){

e.preventDefault();

 

var Contenedor  = $(this).parent('div');

Contenedor.fadeOut(500);
});