<?php 

//Proyectos
Route::get('/Proyecto/{name}/{id}' , [                    
  'uses' => 'Publicas\Paginas_Controller@get_pagina_proyecto_individual',
  'as'   => 'get_pagina_proyecto_individual']
);


  //Proyectos Individuales
  Route::get('/Proyectos' , [                    
    'uses' => 'Publicas\Paginas_Controller@get_pagina_proyecto_listado',
    'as'   => 'get_pagina_proyecto_listado']
  );
