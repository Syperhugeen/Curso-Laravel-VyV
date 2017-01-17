@extends('layouts.user_layout.user_layout')


@section('title')
 Empresa
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
        	<h1>Acerca de {{$Empresa->name}}</h1>
      	</div>



      	<div class="row space-bottom">
      		<div class="col-lg-6 empresa-individual">
      			<h3>Misión</h3>
      			<p>{{$Empresa->mision}}.</p>
      		</div>

      		<div class="col-lg-6 empresa-individual">
      			<h3>Visión</h3>
      			<p>{{$Empresa->vision}}.</p>
      		</div>
      	</div>




      	<div class="row empresa-individual" style="padding-top:60px;padding-bottom:100px;">

      		<div class="col-md-6">
      			<img class="img-responsive center-block" style="max-width:40%;" src="imagenes/Img/team_structure.png">
      		</div>

      		<div class="col-md-6">
      			<div class="destacado">
	      			<h3 style="padding-bottom:10px;">Directores</h3>
	      			<h4 class="color-gris-claro">Ing. Leandro Veiga</h4>
	      			<h4 class="color-gris-claro">Ing. Mariano Veiga</h4>
      			</div>
      		</div>

      	</div>





      	<div class="row space-bottom">

      		<div class="col-md-12">
      			<img class="img-responsive img-rounded" src="http://cjconsultora.cl/wp-content/uploads/2015/11/consultoria-empresarial.jpg">
      		</div>

      	</div>



    </div>  
  </div>
</div>

<!--para agregar los márgenes laterales-->
<div class="container-fluid section-wrapper section-special">
  <div class="row">    
    <div class="col-md-10 col-md-push-1 col-lg-8 col-lg-push-2">


      	<div class="row space-bottom">

      		<div class="col-md-6">
      			<img class="img-responsive center-block" style="max-width:50%;" src="imagenes/Img/structure.png">
      		</div>

      		<div class="col-md-6">
      			<h3 class="color-blanco" style="font-family:arial;">V&amp;V cuenta con una <span style="font-family:pioret;font-size:30px;">estructura flexible</span>, adaptable a los requerimientos de cada cliente.</h3>
      			<h4 class="color-blanco">Contamos con experiencia en los diversos métodos constructivos y continuamos capacitándonos permanentemente.</h4>
      		</div>

      	</div>



    </div>  
  </div>
</div>


<!--para agregar los márgenes laterales-->
<div class="container-fluid section-wrapper section-special-2">
  <div class="row">    
    <div class="col-md-10 col-md-push-1 col-lg-8 col-lg-push-2">

      <div class="row space-bottom">
          <div class="col-sm-6 col-sm-push-6">
            <h3 style="font-family:arial;">¿Quieres formar parte de la empresa?</h3>
            <div> 
            {{-- boton para envio de curriculumn --}}
            @include('paginas.servicios.partes.click_aqui_envio_curriculumn')  
            </div>
          </div>
      </div>

    </div>  
  </div>
</div>

@stop