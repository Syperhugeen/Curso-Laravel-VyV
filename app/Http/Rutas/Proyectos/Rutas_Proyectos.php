<?php 

Route::get('get_admin_proyectos',
[
  'uses'  => 'Admin_Empresa\Admin_Proyectos_Controllers@get_admin_proyectos',
  'as'    => 'get_admin_proyectos'
]);


Route::get('get_admin_proyectos_crear',
[
  'uses'  => 'Admin_Empresa\Admin_Proyectos_Controllers@get_admin_proyectos_crear',
  'as'    => 'get_admin_proyectos_crear'
]);



Route::post('set_admin_proyectos_crear',
[
  'uses'  => 'Admin_Empresa\Admin_Proyectos_Controllers@set_admin_proyectos_crear',
  'as'    => 'set_admin_proyectos_crear'
]);

Route::get('get_admin_proyectos_editar/{id}',
[
  'uses'  => 'Admin_Empresa\Admin_Proyectos_Controllers@get_admin_proyectos_editar',
  'as'    => 'get_admin_proyectos_editar'
]);

Route::patch('set_admin_proyectos_editar/{id}',
[
  'uses'  => 'Admin_Empresa\Admin_Proyectos_Controllers@set_admin_proyectos_editar',
  'as'    => 'set_admin_proyectos_editar'
]);

Route::post('set_admin_proyectos_img{id_proyecto}',
[
  'uses'  => 'Admin_Empresa\Admin_Proyectos_Controllers@set_admin_proyectos_img',
  'as'    => 'set_admin_proyectos_img'
]);

Route::get('delete_admin_proyectos_img/{id_img}',
[
  'uses'  => 'Admin_Empresa\Admin_Proyectos_Controllers@delete_admin_proyectos_img',
  'as'    => 'delete_admin_proyectos_img'
]); 

Route::get('establecer_como_imagen_principal/{id_img}',
[
  'uses'  => 'Admin_Empresa\Admin_Proyectos_Controllers@establecer_como_imagen_principal',
  'as'    => 'establecer_como_imagen_principal'
]); 


