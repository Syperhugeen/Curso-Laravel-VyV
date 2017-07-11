<div class="admin-columna-contenedor">
 {{-- imagen logo --}}
 <a href="{{route('get_home')}}"><img class="admin-header-logo" src="{{url()}}/imagenes/{{$Empresa->logo_cuadrado}}"></a>
 <ul>
   @if(Auth::user()->role === 'adminMcos522')
     <a href="{{route('get_admin_users')}}"><li class="admin-columna-li"><span class="icon-group"></span> Usuarios</li></a>
     <a href="{{route('get_admin_marcas')}}"><li class="admin-columna-li"><span class="icon-whatshot"></span> Marcas</li></a>
     <a href="{{route('get_admin_eventos')}}"><li class="admin-columna-li"><span class="icon-chrome_reader_mode"></span> Eventos</li></a>
     <li class="admin-columna-li"><span class="icon-insert_emoticon"></span> Modelos</li>
     <a href="{{route('get_datos_home_web')}}"> <li class="admin-columna-li"><span class="icon-home"></span> Home Edit</li></a>   
   @endif
     <a href="{{route('get_datos_corporativos')}}"><li class="admin-columna-li"><span class="icon-domain"></span> Empresa</li></a>
     <a href="{{route('get_admin_proyectos')}}"><li class="admin-columna-li"><span class="icon-web"></span> Proyectos</li></a>
     <a href="{{route('get_admin_noticias')}}"><li class="admin-columna-li"><span class="icon-drafts"></span> Noticias</li></a>
 </ul>
 
<a href="{{route('get_home')}}"><p class="link-go-to-web"><small>www.veigaventos.com</small></p></a>

</div>