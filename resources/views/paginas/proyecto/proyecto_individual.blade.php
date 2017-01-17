@extends('layouts.user_layout.user_layout')


@section('title')
Proyecto {{$Proyecto->name}}  
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
        	<h1>{{$Proyecto->name}}</h1>
      	</div>



      	<!--primera parte (foto a la izquierda y texto a la derecha)-->
      	<div class="row space-bottom">

      		<div class="col-md-6">
      			<img class="img-responsive img-rounded" src="{{$Proyecto->url_img}}">
      		</div>

      		<div class="col-md-6">
      			<hr style="width:50%;left:0;">
      			<a><h3><span class="tooltip-individual" title="Fecha de realización"><span class="glyphicon glyphicon-calendar"></span></span> {{$Proyecto->fecha}}</h3></a>
      			<a><h4><span class="tooltip-individual" title="Ubicación del proyecto"><span class="glyphicon glyphicon-map-marker"></span></span> {{$Proyecto->ubicacion}}</h4></a>
      			<a><h4><span class="tooltip-individual" title="Método de construcción"><span class="glyphicon glyphicon-wrench"></span></span> {{$Proyecto->metodo_de_construccion}}</h4></a>
      			<a><h5 class="color-gris"><span class="tooltip-individual" title="Autoría del proyecto"><span class="glyphicon glyphicon-pencil"></span></span> {{$Proyecto->autores}}</h5></a>

      			<hr style="width:50%;left:0;">
      		</div>

      		<div class="col-md-12">
      			<h3>Acerca del proyecto</h3>
      			<p>{{$Proyecto->description_parrafo}}<br></p>
      		</div>

      	</div>


        @if($Proyecto->imagenesproyecto->count() > 0)
          <ul class="bxslider">
            @foreach($Proyecto->imagenesproyecto as $img)           
                <li><img class="img-carousel" src="{{$img->url_img}}"></li>                      
            @endforeach 
          </ul>
        @endif

      {{-- 	<!--slideshow de fotos-->
      	<div class="row space-bottom">
			  <div class="col-md-12">
				<div id="myCarousel" class="carousel slide" data-ride="carousel">
				  <!-- Indicators -->

          
				  <ol class="carousel-indicators">
				    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
				    <li data-target="#myCarousel" data-slide-to="1"></li>
				    <li data-target="#myCarousel" data-slide-to="2"></li>
				    <li data-target="#myCarousel" data-slide-to="3"></li>
				  </ol>

           @foreach($Proyecto->imagenesproyecto as $img)
				    <!-- Wrapper for slides -->
				    <div class="item">
				      <img class="img-carousel" src="{{$img->url_img}}">
				    </div>				    
           @endforeach 

				  <!-- Left and right controls -->
				  <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
				    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
				    <span class="sr-only">Previous</span>
				  </a>
				  <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
				    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
				    <span class="sr-only">Next</span>
				  </a>
				</div> 
			</div>

			<div class="col-md-12">
				<a href="{{route('get_pagina_proyecto_listado')}}"><p><span class="glyphicon glyphicon-circle-arrow-left"></span> volver a Proyectos</p></a>
			</div>
		</div> --}}
     


    </div>  
  </div>
</div>

@stop