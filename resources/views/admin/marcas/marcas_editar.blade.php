@extends('layouts.admin_layout.admin_layout')

@section('content')

<div class="admin-contnedor-navegacion-miga">
  {{-- home --}}
  <a href="{{route('get_admin_home')}}"><span class="icon-home"></span></a>

  {{-- separador --}}
  <span class="spam-separador"><span class="icon-keyboard_arrow_right"></span></span> 

  {{-- lugar atras --}}
  <a href="{{route('get_admin_marcas')}}"><span>Marcas</span></a>

  {{-- separador --}}
  <span class="spam-separador"><span class="icon-keyboard_arrow_right"></span></span> 

  {{-- lugar donde esta --}}
  <span>Editar Marca: {{$marca->name}}</span>
</div>

<div class="contenedor-admin-entidad">

 {{-- titulo --}}
 <div class="admin-entidad-titulo">Editar Marca {{$marca->name}}
 </div>

 {{-- formulario --}}
  {!! Form::model($marca,   ['route' => ['set_admin_marcas_editar',$marca->id],
                            'method'=> 'patch',
                            'files' =>  true,
                            'id'    => 'form-admin-empresa-datos'
                          ])               !!}
   <div class="formulario-contenedor">

      {{-- datos corporativos --}}
      <div class="contenedor-grupo-datos">
        <div class="contenedor-grupo-datos-titulo"><span class="icon-person"></span> Identidad</div>
        <div class="contenedor-formulario-label-fiel">                       
         @include('admin.marcas.formularios_partes.datos_basicos')
        </div>
      </div>

      {{-- imagenes corporativos --}}
      <div class="contenedor-grupo-datos">
        <div class="contenedor-grupo-datos-titulo"><span class="icon-person"></span> Estado y Rol</div>
        <div class="contenedor-formulario-label-fiel">                       
          @include('admin.marcas.formularios_partes.datos_imagenes')
        </div>
      </div>

      

      
   </div>
   <div class="admin-boton-editar">
     Editar Marca
   </div> 


  {!! Form::close() !!}


  
</div>
  
@stop