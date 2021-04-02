<?php

//Proyectos
Route::get('/Proyecto/{name}/{id}', [
    'uses' => 'Publicas\Paginas_Controller@get_pagina_proyecto_individual',
    'as'   => 'get_pagina_proyecto_individual']
);

//Proyectos Individuales
Route::get('/Proyectos', [
    'uses' => 'Publicas\Paginas_Controller@get_pagina_proyecto_listado',
    'as'   => 'get_pagina_proyecto_listado']
);

Route::get('get_trabajos_ajax', [
    'uses' => 'Publicas\Paginas_Controller@get_trabajos_ajax',
    'as'   => 'get_trabajos_ajax']
);

Route::get('get_projecto_individual_ajax', [
    'uses'       => 'Publicas\Paginas_Controller@get_projecto_individual_ajax',
    'as'         => 'get_projecto_individual_ajax',
    'middleware' => 'cors']
);
