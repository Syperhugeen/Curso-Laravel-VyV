<?php 


Route::get('get_admin_eventos',
[
  'uses'  => 'Admin_Empresa\Admin_Eventos_Controllers@get_admin_eventos',
  'as'    => 'get_admin_eventos'
]);


Route::get('get_admin_eventos_crear',
[
  'uses'  => 'Admin_Empresa\Admin_Eventos_Controllers@get_admin_eventos_crear',
  'as'    => 'get_admin_eventos_crear'
]);



Route::post('set_admin_eventos_crear',
[
  'uses'  => 'Admin_Empresa\Admin_Eventos_Controllers@set_admin_eventos_crear',
  'as'    => 'set_admin_eventos_crear'
]);

Route::get('get_admin_eventos_editar/{id}',
[
  'uses'  => 'Admin_Empresa\Admin_Eventos_Controllers@get_admin_eventos_editar',
  'as'    => 'get_admin_eventos_editar'
]);

Route::patch('set_admin_eventos_editar/{id}',
[
  'uses'  => 'Admin_Empresa\Admin_Eventos_Controllers@set_admin_eventos_editar',
  'as'    => 'set_admin_eventos_editar'
]);

Route::post('set_admin_eventos_img{id_proyecto}',
[
  'uses'  => 'Admin_Empresa\Admin_Eventos_Controllers@set_admin_eventos_img',
  'as'    => 'set_admin_eventos_img'
]);

Route::get('delete_admin_eventos_img/{id_img}',
[
  'uses'  => 'Admin_Empresa\Admin_Eventos_Controllers@delete_admin_eventos_img',
  'as'    => 'delete_admin_eventos_img'
]);

Route::get('delete_admin_marca_eventos/{id}',
[
  'uses'  => 'Admin_Empresa\Admin_Eventos_Controllers@delete_admin_marca_eventos',
  'as'    => 'delete_admin_marca_eventos'
]); 

Route::get('establecer_como_imagen_principal/{id_img}',
[
  'uses'  => 'Admin_Empresa\Admin_Eventos_Controllers@establecer_como_imagen_principal',
  'as'    => 'establecer_como_imagen_principal'
]); 
