<?php

require __DIR__ . '/Noticias/Rutas_Noticias_Publicas.php';

require __DIR__ . '/Proyectos/Rutas_Proyectos_Publicas.php';

require __DIR__ . '/Eventos/Rutas_Eventos_Publicas.php';

require __DIR__ . '/Formularios/Rutas_Formularios_Publicas.php';

//Ruta de Home
Route::get('/', [
    'uses' => 'Publicas\Home_Public_Controller@get_home',
    'as'   => 'get_home']
);

//Contacto
Route::get('/Contacto', [
    'uses' => 'Publicas\Paginas_Controller@get_pagina_contacto',
    'as'   => 'get_pagina_contacto']
);

Route::get('/contactar', [
    'uses' => 'Publicas\Paginas_Controller@get_new_contactar',
    'as'   => 'get_new_contactar']
);

Route::get('/cotizar-proyecto', [
    'uses' => 'Publicas\Paginas_Controller@get_cotizar',
    'as'   => 'get_cotizar']
);

//Empresa
Route::get('/Empresa', [
    'uses' => 'Publicas\Paginas_Controller@get_pagina_empresa',
    'as'   => 'get_pagina_empresa']
);

Route::get('/sobre-v-y-v', [
    'uses' => 'Publicas\Paginas_Controller@get_new_empresa',
    'as'   => 'get_new_empresa']
);

//Servicios
Route::get('/Servicios', [
    'uses' => 'Publicas\Paginas_Controller@get_pagina_servicios',
    'as'   => 'get_pagina_servicios']
);

Route::get('/servicios', [
    'uses' => 'Publicas\Paginas_Controller@get_pagina_new_servicios',
    'as'   => 'get_pagina_new_servicios']
);
