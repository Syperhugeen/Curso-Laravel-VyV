<?php 

Route::get('get_admin_modelos',
[
  'uses'  => 'Admin_Empresa\Admin_Modelos_Controllers@get_admin_modelos',
  'as'    => 'get_admin_modelos'
]);

Route::get('get_admin_modelos_crear',
[
  'uses'  => 'Admin_Empresa\Admin_Modelos_Controllers@get_admin_modelos_crear',
  'as'    => 'get_admin_modelos_crear'
]);

Route::post('set_admin_modelos_crear',
[
  'uses'  => 'Admin_Empresa\Admin_Modelos_Controllers@set_admin_modelos_crear',
  'as'    => 'set_admin_modelos_crear'
]);

Route::get('get_admin_modelos_editar{id}',
[
  'uses'  => 'Admin_Empresa\Admin_Modelos_Controllers@get_admin_modelos_editar',
  'as'    => 'get_admin_modelos_editar'
]);

Route::patch('set_admin_modelos_editar{id}',
[
  'uses'  => 'Admin_Empresa\Admin_Modelos_Controllers@set_admin_modelos_editar',
  'as'    => 'set_admin_modelos_editar'
]);
