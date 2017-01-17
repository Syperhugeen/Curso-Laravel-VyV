@extends('layouts.admin_layout.admin_layout')

@section('content')

<div class="admin-contnedor-navegacion-miga">
  {{-- home --}}
  <a href="{{route('get_admin_home')}}"><span class="icon-home"></span></a>

  {{-- separador --}}
  <span class="spam-separador"><span class="icon-keyboard_arrow_right"></span></span> 

  {{-- lugar donde esta --}}
  <span>Mi Empresa</span>
</div>

<div class="contenedor-admin-entidad">

 {{-- titulo --}}
 <div class="admin-entidad-titulo">Mi Empresa</div>

  {{-- formulario --}}
  {!! Form::model($Empresa,['route' => 'set_datos_corporativos',
                            'method'=> 'PATCH',
                            'files' =>  true,
                            'id'    => 'form-admin-empresa-datos'
                          ])               !!}
   <div class="formulario-contenedor">

      {{-- datos corporativos --}}
      <div class="contenedor-grupo-datos">
        <div class="contenedor-grupo-datos-titulo"><span class="icon-person"></span> Identidad</div>
        <div class="contenedor-formulario-label-fiel">                       
          @include('admin.empresa.formularios_partes.datos_basicos')
        </div>
      </div>

      {{-- imagenes corporativos --}}
      <div class="contenedor-grupo-datos">
        <div class="contenedor-grupo-datos-titulo"><span class="icon-person"></span> Imagen Corporativa</div>
        <div class="contenedor-formulario-label-fiel">                       
          @include('admin.empresa.formularios_partes.datos_imagenes')
        </div>
      </div>

      {{-- datos de contacto --}}
      <div class="contenedor-grupo-datos">
        <div class="contenedor-grupo-datos-titulo"><span class="icon-person"></span> Contacto</div>
        <div class="contenedor-formulario-label-fiel">                       
          @include('admin.empresa.formularios_partes.datos_contactos')
        </div>
      </div>

      
   </div>
   <div class="admin-boton-editar">
     Editar
   </div>


  {!! Form::close() !!}


  
</div>
  
@stop