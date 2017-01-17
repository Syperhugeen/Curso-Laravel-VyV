//////////////////////////////////////////
//Dispara Formularios
function DispararForm($ElementoQueDispara,$FormADisparar)
{
  $('body').on('click',$ElementoQueDispara,function(e)
  {
   e.preventDefault();

   // Show the progress bar 
   NProgress.start();

   var form  = $FormADisparar ;  
   form.submit();
  });
}

