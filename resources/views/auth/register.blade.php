@extends('layouts.user_layout.user_layout')


@section('title')
 Registro de Usuario en Worldmaster Uruguay 
@stop

@section('MetaContent')
  Crea tu Cuenta en Worldmaster y accede al sitio #1 en atención de Uruguay.  
@stop

@section('MetaRobot')
 INDEX,FOLLOW
@stop


 

@section('content')



{{-- ejemplo para la bavehacion --}}
<div class="admin-contnedor-navegacion-miga">
  {{-- home --}}
  <a href="{{route('get_home')}}"><span class="icon-home"></span></a>

  {{-- separador --}}
  <span class="spam-separador"><span class="icon-keyboard_arrow_right"></span></span> 
    
  {{-- lugar donde esta --}}
  <span>Registro</span>
</div>

 <h1>formulario de registro</h1>
    <div class="container-fluid section-wrapper">
     <div class="row">    
      <div class="col-sm-8 col-sm-push-2 col-md-6 col-md-push-3 col-lg-4 col-lg-push-4 wow fadeInUp">
       @include('formularios.auth.register_form')
      </div>
    </div>
  </div>
     

@stop