@extends('layouts.user_layout.user_layout')


@section('title')
 Contacto
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
        	<h1>Contacto</h1>
      	</div>

      	<div class="row space-bottom">

      		<div class="col-sm-12">
      			<h3 style="text-align:justify">Puedes contactarnos rellenando el siguiente formulario o, si lo prefieres, a través de nuestros <a href="#footer">datos de contacto</a> situados en la sección inferior de la página.</h3>
      		</div>
      	</div>


       @include('formularios.contacto_form')

      </div>
    </div>
  </div>

<!--para agregar los márgenes laterales-->
<div class="container-fluid section-wrapper section-special2">
  <div class="row">    
    <div class="col-md-10 col-md-push-1 col-lg-8 col-lg-push-2">

      	<div class="row space-bottom">

      		<div class="col-md-6">
      			<h3 class="destacado" style="font-family:arial; text-align:right; margin-top:40px">¿Deseas solicitar la cotización correspondiente a tu proyecto?</h3>
      		</div>
      		<div class="col-md-6">
      			<div>
				    {{-- boton para envio cotización de proyecto --}}
				    @include('paginas.servicios.partes.click_aqui_envio_cotizacion_proyecto')
				</div>
      		</div>

      	</div>

      </div>
    </div>
  </div>



    


  
@stop