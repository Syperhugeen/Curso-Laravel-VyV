@extends('layouts.admin_layout.admin_layout')

@section('content')

<div class="admin-contnedor-navegacion-miga">
  {{-- home --}}
  <a href="{{route('get_admin_home')}}"><span class="icon-home"></span></a>

  {{-- separador --}}
  <span class="spam-separador"><span class="icon-keyboard_arrow_right"></span></span> 

  {{-- lugar atras --}}
  <a href="{{route('get_admin_eventos')}}"><span>Eventos</span></a>

  {{-- separador --}}
  <span class="spam-separador"><span class="icon-keyboard_arrow_right"></span></span> 

  {{-- lugar donde esta --}}
  <span>Editar evento: {{$Evento->name}}</span>
</div>

<div class="contenedor-admin-entidad">

 <div class="contenedor-img-titulo">
   <img class="admin-entidad-img" src="{{$Evento->url_img}}">
   {{-- titulo --}}
   <div class="admin-entidad-titulo">Editar Evento {{$Evento->name}}</div>
 </div>
 
   
 

 </div>
 

 {{-- formulario --}}
  {!! Form::model($Evento,   ['route' => ['set_admin_eventos_editar',$Evento->id],
                            'method'=> 'patch',
                            'files' =>  true,
                            'id'    => 'form-admin-empresa-datos'
                          ])               !!}
   <div class="formulario-contenedor">

      {{-- datos imagenes --}}
      <div class="contenedor-grupo-datos">
        <div class="contenedor-grupo-datos-titulo"><span class="icon-person"></span> Marcas</div>
        <div class="contenedor-formulario-label-fiel">     
          @include('admin.eventos.partes.parte_de_marcas')                    
          @include('admin.eventos.formularios_partes.datos_marcas')
        </div>
      </div>
      {{-- datos imagenes --}}
      <div class="contenedor-grupo-datos">
        <div class="contenedor-grupo-datos-titulo"><span class="icon-person"></span> Imagenes</div>
        <div class="contenedor-formulario-label-fiel"> 
          @include('admin.eventos.partes.parte_imagenes_adicionales')                      
          @include('admin.eventos.formularios_partes.datos_imagenes')
        </div>
      </div>

      {{-- datos corporativos --}}
      <div class="contenedor-grupo-datos">
        <div class="contenedor-grupo-datos-titulo"><span class="icon-person"></span> Datos</div>
        <div class="contenedor-formulario-label-fiel">                       
         @include('admin.eventos.formularios_partes.datos_basicos')

         <div class="formulario-label-fiel">
            {!! Form::label('estado', 'Estado', array('class' => 'formulario-label ')) !!}
            {!! Form::select('estado',['si' => 'Activo',
                                       'no' => 'Desactivar'] , null )          !!}
         </div>
        </div>
      </div>

      

      

      
   </div>
   <div class="admin-boton-editar">
     Editar evento
   </div> 


  {!! Form::close() !!}


  
</div>
  
@stop