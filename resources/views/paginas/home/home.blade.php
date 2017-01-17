@extends('layouts.user_layout.user_layout')


@section('title')
 Home
@stop

@section('MetaContent')
  Description Home 
@stop

@section('MetaRobot')
 INDEX,FOLLOW
@stop


 

@section('content')

 {{-- imagenes en grande --}}
 @include('paginas.home.partes.imagen_de_portada')

 <!--para agregar los márgenes laterales-->
<div class="container-fluid section-wrapper">
  <div class="section-wrapper-welcome">
    <div class="row">    
      <div class="col-md-10 col-md-push-1 col-lg-8 col-lg-push-2">

     {{-- la parte de bienvenidad --}}
     @include('paginas.home.partes.datos_bienvenida')

      </div>
    </div>  
  </div>
</div>

 <!--para agregar los márgenes laterales-->
<div class="container-fluid section-wrapper" id="section-globitos">
  <div class="row">    
    <div class="col-md-10 col-md-push-1 col-lg-8 col-lg-push-2">

     {{-- la parte de los globitos --}}
     @include('paginas.home.partes.globitos')

    </div>  
  </div>
</div>

 <!--para agregar los márgenes laterales-->
<div class="container-fluid section-wrapper" id="section-ultimos-proyectos">
  <div class="row">    
    <div class="col-md-10 col-md-push-1 col-lg-8 col-lg-push-2">

     {{-- la parte de proyectos  --}}
     @include('paginas.home.partes.proyectos')


    </div>  
  </div>
</div>

 <!--para agregar los márgenes laterales-->
<div class="container-fluid section-wrapper" id="section-ultimas-publicaciones">
  <div class="row">    
    <div class="col-md-10 col-md-push-1 col-lg-8 col-lg-push-2">

     {{-- la parte de publicaciones  --}}
     @include('paginas.home.partes.publicaciones')


    </div>  
  </div>
</div>

@stop