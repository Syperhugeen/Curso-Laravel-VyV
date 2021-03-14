<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Administrador Panel</title>
    <link rel="stylesheet" type="text/css" href="{{asset('build/css/public.css')}}">
    <link rel="stylesheet" type="text/css" href=" {{ asset('Iconos/fonts/style.css')}}">
    <META name="robots" content="NOINDEX,NOFOLLOW">
  </head>
  <body>


   <div class="admin-contiene-columna-y-content">
      @include('layouts.admin_layout.columna_derecha.columna')
      <div class="admin-contiene-content">
        @include('layouts.admin_layout.header.global')
        @yield('content')
      </div>
   </div>
      <!-- Scripts -->
      <script src="{{ asset('build/js/public.js')}}"></script>
      <script src="//cdn.ckeditor.com/4.5.11/standard/ckeditor.js"></script>
  </body>
</html>
