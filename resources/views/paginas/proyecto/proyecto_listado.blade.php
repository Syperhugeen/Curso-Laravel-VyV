@extends('layouts.user_layout.user_layout')


@section('title')
 Proyectos
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
        <h1>Proyectos</h1>
      </div>



       <!--contenedor de proyectos individuales-->
      {{-- contiene hasta séis proyectos como máximo --}}
      <div class="home-section-display">
            @foreach($Proyectos as $Proyecto)
              @include('paginas.proyecto.entidad_proyecto_para_listado')
            @endforeach
      </div>

      <div class="col-centered">
      {!! $Proyectos->appends(Request::all())->render() !!}
      </div>




    </div>  
  </div>
</div>

@stop