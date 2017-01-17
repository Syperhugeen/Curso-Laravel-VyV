
<!--este row es para las dos columnas de texto (bienvenidos y contact info)-->
<div class="row">

<!--columna izquierda-->
<div class="col-sm-8 col-sm-push-2 col-md-6 col-md-push-0">
<h1 class="home-title-welcome">Bienvenidos</h1>
<h4>Brindamos soluciones profesionales, confiables y creativas utilizando diversas técnicas constructivas.</h4>
<div class="text-slide-container">
<ul class="text-slide">
<a class="smoothScroll" href="#section-globitos"><li><h4><span class="chevron-saltarin"><span class="glyphicon glyphicon-chevron-down"></span></span> Explora el contenido</h4></li></a>
<a class="smoothScroll" href="#section-ultimas-publicaciones"><li><h4><span class="chevron-saltarin"><span class="glyphicon glyphicon-chevron-down"></span></span> Últimas publicaciones</h4></li></a>
<a class="smoothScroll" href="#section-ultimos-proyectos"><li><h4><span class="chevron-saltarin"><span class="glyphicon glyphicon-chevron-down"></span></span> Últimos proyectos</h4></li></a>
<a class="smoothScroll" href="#section-globitos"><li><h4><span class="chevron-saltarin"><span class="glyphicon glyphicon-chevron-down"></span></span> Explora el contenido</h4></li></a>
</ul>
</div>
</div>

<!--columna derecha-->
<div class="col-sm-8 col-sm-push-2 col-md-6 col-md-push-0 home-contact-info">
<h4><span class="glyphicon glyphicon-envelope" style="font-size:120%; padding-right:10px;""></span>{{$Empresa->email}}</h4>
<h4><span class="glyphicon glyphicon-earphone" style="font-size:120%; padding-right:10px;"></span>{{$Empresa->telefono}}</h4>
<h4><span class="glyphicon glyphicon-phone" style="font-size:120%; padding-right:10px;"></span>{{$Empresa->celular}}</h4>
</div>

<!--/cierra el row-->
</div>