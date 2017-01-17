
//Home////////////////////////////////////////////////////
  
  //globitos Home
  $('.globito').tooltipster();
    

  //tooltips para publicación individual y proyecto individual
  $('.tooltip-individual').tooltipster();


   $('.icono-establecer-imagen').tooltipster();

//navbar////////////////////////////////////////////////////

  //icono-user
  $('#icono-user-en-navbar').tooltipster(

     {
      content: $('.contenido-inicio-de-sesion-navbar'),
      interactive:true,
      theme:'contenedor-default-tooltips'
     }

  );

  //icono-user
  $('.icono-user-en-navbar-logeado').tooltipster(

     {
      content: $('.contenido-auth-deplegado-navbar'),
       interactive:true,
      theme:'contenedor-default-tooltips'
     }

  );    