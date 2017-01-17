
{{-- contenedor de la parte completa de proyectos en la home --}}

  {{-- titulo de seccion --}}
 <h2 class="home-section-title">ÚLTIMOS PROYECTOS</h2>


{{-- contiene hasta dos proyectos como máximo --}}
<div class="home-section-display">

      @foreach($Proyectos as $Proyecto)
        @include('paginas.proyecto.entidad_proyecto_para_listado')
      @endforeach


        <a href="{{route('get_pagina_proyecto_listado')}}"><p class="text-center"><small><span class="glyphicon glyphicon-list"></span> ver lista completa de proyectos</small></p></a>


</div>