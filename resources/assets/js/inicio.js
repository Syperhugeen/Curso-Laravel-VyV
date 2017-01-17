$(document).ready(function(){

///////////////////////////////////////////////////////////////////////////////////
/*Funcion Comun para cuando invoco metodo de carga Barra*/
function CargaProgressBar(){
            // Increase randomly
            var interval = setInterval(function() { NProgress.inc(); }, 1000);        
        
            clearInterval(interval);
            NProgress.done();

            // Trigger bar when exiting the page
            $(this).unload(function () {
                NProgress.start();
            })};

///////////////////////////////////////////////////////////////////////////////////


