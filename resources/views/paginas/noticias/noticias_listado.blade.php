@extends('layouts.user_layout.user_layout')


@section('title')
 Publicaciones
@stop

@section('MetaContent')
  Description Home 
@stop

@section('MetaRobot')
 INDEX,FOLLOW
@stop


 

@section('content')

 

<!--para agregar los márgenes laterales-->
<div class="container-fluid section-wrapper">
  <div class="row">    
    <div class="col-md-10 col-md-push-1 col-lg-8 col-lg-push-2">
      <div class="page-header">
        <h1>Publicaciones</h1>
      </div>

      <!--contenedor de publicaciones individuales-->
      {{-- contiene hasta séis publicaciones como máximo --}}
      <div class="home-section-display">

            @foreach($Noticias as $Noticia)
             @include('paginas.noticias.entidad_noticia_para_listado')
            @endforeach

      </div>

    <div class="col-centered">
      {!! $Noticias->appends(Request::all())->render() !!}
    </div>

    </div>  
  </div>
</div>

@stop