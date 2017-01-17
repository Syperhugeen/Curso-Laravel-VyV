
{{-- contenedor de la parte completa de publicaciones en la home --}}

  {{-- titulo de seccion --}}
 <h2 class="home-section-title">ÚLTIMAS PUBLICACIONES</h2>


{{-- contiene hasta dos proyectos como máximo --}}
<div class="home-section-display">

      @foreach($Noticias as $Noticia)
       @include('paginas.noticias.entidad_noticia_para_listado')
      @endforeach

      <a href="{{route('get_pagina_noticias_listado')}}"><p class="text-center"><small><span class="glyphicon glyphicon-list"></span> ver lista completa de publicaciones</small></p></a>

</div>