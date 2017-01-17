@extends('layouts.user_layout.user_layout')


@section('title')
 Servicios
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
        	<h1>Servicios</h1>
      	</div>
 

      	<div class="row space-bottom">

      		<div class="col-sm-12">
      			<h3 style="text-align:justify">En V&amp;V ofrecemos una amplia gama de Servicios relacionados con el Diseño y Construcción de Obras Civiles de forma confiable, responsable y seria.</h3>
      			<h4>Priorizamos las relaciones cordiales, amigables y de intercambio permanente de propuestas con nuestros clientes.</h4>
      		</div>
      	</div>

			<div class="row space-bottom">

	      		<div class="col-sm-6 servicio-individual">
	      			<div class="well well-sm">
						<h3>Servicios de Ing. Civil Estructural</h3>
	      			</div>
	      			<h4><span class="glyphicon glyphicon-ok-circle"></span> Diseño estructural</h4>
	      			<p>Diseñamos, calculamos y realizamos las verificaciones de la estructura que desee.</p>
	      			<h4><span class="glyphicon glyphicon-ok-circle"></span> Planificación y Gerenciamiento de Proyectos de Ing. Civil</h4>
	      			<p>Realizamos o ajustamos su proyecto para que sea lo más rentable posible y se lleve a cabo con la mayor rapidez que se pueda lograr.</p>
	      			<h4><span class="glyphicon glyphicon-ok-circle"></span> Asistencia técnica en problemas de Ing. Civil</h4>
	      			<p>Respondemos sus dudas sobre su obra o proyecto y le brindaremos soluciones prácticas, precisas, confiables e innovadoras.</p>
	      		</div>

	      		<div class="col-sm-6 servicio-individual">
	      			<div class="well well-sm">
						<h3>Gestión de proyectos</h3>
	      			</div>
	      			<h4 style="text-align:justify"><span class="glyphicon glyphicon-ok-circle"></span> En V&amp;V trabajamos y operamos conjuntamente con estudios de Arquitectura que cuentan con profesionales de alto nivel, para realizar proyectos que satisfagan al cliente de la mejor manera y complementan nuestros Servicios de Ingeniería.</h4>
	      		</div>

			</div>
			<div class="row space-bottom">


	      		<div class="col-sm-6 servicio-individual">
	      			<div class="well well-sm">
						<h3>Construcción</h3>
	      			</div>
	      			<h4 style="text-align:justify"><span class="glyphicon glyphicon-ok-circle"></span> Construimos obras de todo tipo, con mano de obra capacitada y confiable. Construcciones seguras y con excelentes terminaciones.</h4>
	      			<h4><span class="glyphicon glyphicon-ok-circle"></span> Reparaciones y recuperaciones</h4>
	      			<p>Ideamos y creamos alternativas para su construcción deteriorada o generamos el proyecto adecuado para la recuperación de su vivienda.</p>
	      		</div>

	      		<div class="col-sm-6 servicio-individual">
	      			<div class="well well-sm">
						<h3>Dirección de obras</h3>
	      			</div>
	      			<h4 style="text-align:justify"><span class="glyphicon glyphicon-ok-circle"></span> Puede optar por contratar V&V para la dirección de su obra, ya que contamos con profesionales capacitados para llevar adelante su construcción y garantizar la eficiencia y la más correcta ejecución.</h4>
	      		</div>


      		</div>




    </div>  
  </div>
</div>




<!--para agregar los márgenes laterales-->
<div class="container-fluid section-wrapper section-special-1">
  <div class="row">    
    <div class="col-md-10 col-md-push-1 col-lg-8 col-lg-push-2">

      	<div class="row space-bottom">

      		<div class="col-md-6">
      			<h3 class="color-blanco" style="font-family:arial;">Realizamos las cotizaciones que precise acerca de los servicios descritos.</h3>
      			<div>
				    {{-- boton para envio cotización de proyecto --}}
				    @include('paginas.servicios.partes.click_aqui_envio_cotizacion_proyecto')
				</div>
      		</div>

      	</div>

    </div>  
  </div>
</div>



<!--para agregar los márgenes laterales-->
<div class="container-fluid section-wrapper" id="section-metodos">
  <div class="row">    
    <div class="col-md-10 col-md-push-1 col-lg-8 col-lg-push-2">

    	<div class="page-header">
        	<h1>Métodos de construcción</h1>
      	</div>
 

      	<div class="row space-bottom">
      		<div class="col-sm-12">
      			<h3 style="text-align:justify">En V&amp;V le ayudamos a que decida cuál es la construcción más conveniente para usted.</h3>
      			<h4>Las construcciones pueden estar compuestas por una vasta variedad de materiales, pero usualmente se realiza una clasificación de acuerdo a cuál es el material predominante en la misma.</h4>
      			<h4>Los distintos tipos de construcciones más utilizados son los siguientes:</h4>
      		</div>
      	</div>



      	<div class="row space-bottom">

      	    <div class="col-md-6">
      			<img class="img-responsive img-rounded" style="margin-bottom:10px;" src="imagenes/Img/metodo_hormigon.jpg">
      		</div>

      		<div class="col-md-6 metodo-individual">
      			<h3>Hormigón armado</h3>
      			<p>La estructura en este tipo de construcción está compuesta por hormigón y barras de acero dispuestas estratégicamente en el interior del mismo conformando un material compuesto con grandes capacidades resistentes. La extracción de los materiales componentes genera un gran impacto sobre el medioambiente asimismo los residuos generados en los procesos de elaboración.</p>
      			<h4>Ventajas principales:</h4>
      			<p>- Método muy utilizado por lo que su aplicación se encuentra muy estudiada y su calidad comprobada, se encuentran muchas variantes que lo adecuan a los requerimientos del proyecto.</p>
      			<p>- Considerable relación calidad- precio; en especial para estructuras de más de tres niveles.</p>
      			<p>- Se encuentra mano de obra especializada fácilmente.</p>
      		</div>

      	</div>



      	<div class="row space-bottom">

      	    <div class="col-md-6">
      			<img class="img-responsive img-rounded" style="margin-bottom:10px;" src="imagenes/Img/metodo_metalicas.jpg">
      		</div>

      		<div class="col-md-6 metodo-individual">
      			<h3>Estructuras metálicas</h3>
      			<p>El principal componente: el acero, es una aleación (combinación o mezcla de varios metales), principalmente formada por carbono y hierro. Las conocidas como estructuras metálicas están compuestas por perfiles laminados en caliente (referido al método de fabricación) como son los PNI, PNC, HE-A/B etc. Estos son perfiles normalizados o estandarizados y se vinculan de distintas maneras (soldaduras, bulones, etc) de manera de constituir la estructura requerida por el proyecto.</p>
      			<p>También se incluyen en esta categoría los cables, formados por múltiples cordones a su vez conformados por alambres retorcidos. Los mismos tienen usos comunes en tensores para torres o puentes entre otros.</p>
      			<p>La fabricación de estos productos consume mucha energía traduciéndose a veces en contaminaciones atmosféricas.</p>
      			<h4>Ventajas principales:</h4>
      			<p>- El acero soporta grandes esfuerzos por lo que se pueden salvar luces mayores con dimensiones de perfiles no tan grandes.</p>
      			<p>- Tiempos de ejecución rápidos, obra muy limpia y prolija.</p>
      			<p>- Es un tipo de construcción muy segura en cuanto al control de calidad de los materiales ya que todo el proceso de fabricación está industrializado y sometido a estándares de calidad.</p>
      		</div>

      	</div>




      	<div class="row space-bottom">

      	    <div class="col-md-6">
      			<img class="img-responsive img-rounded" style="margin-bottom:10px;" src="imagenes/Img/metodo_madera.jpg">
      		</div>

      		<div class="col-md-6 metodo-individual">
      			<h3>Estructuras de madera</h3>
      			<p>Para este tipo de estructuras se utiliza como materia prima la parte sólida y rígida situada bajo la corteza de los tallos leñosos de árboles y arbustos (madera). En el Uruguay contamos con madera de pino y de eucaliptus en abundancia lo que permite reducir los costos de la misma haciendo que el método sea más atractivo. Las maderas de mayor calidad como el lapacho, cedro, roble, no se encuentran en abundancia y sus costos son elevados.</p>
      			<p>La madera es uno de los materiales de construcción más sostenible debido a sus procesos de renovación. Algunas maderas cuentan con un certificado que garantiza que la misma se obtuvo de una manera controlada y renovable.</p>
      			<h4>Ventajas principales:</h4>
      			<p>- Terminación con aspecto agradable y muy requerido por la arquitectura.</p>
      			<p>- Se trata de un material liviano, pero al mismo tiempo tiene una buena relación peso- resistencia mecánica, ideal para cubiertas livianas, pérgolas etc.</p>
      			<p>- Con el debido mantenimiento se obtiene una gran durabilidad.</p>
      		</div>

      	</div>


      	<div class="row space-bottom">

      	    <div class="col-md-6">
      			<img class="img-responsive img-rounded" style="margin-bottom:10px;" src="imagenes/Img/metodo_mamposteria.jpg">
      		</div>

      		<div class="col-md-6 metodo-individual">
      			<h3>Mampostería estructural</h3>
      			<p>La mampostería estructural es un sistema compuesto por bloques de mortero o cerámicos que por definición son colocados a mano y unidos o pegados entre sí mediante un aglomerante que puede ser cementicio, calcáreo, arcilloso, etc. La variación más usual que se le ha dado a la mampostería estructural es lo denominado “mampostería armada” que consta, al igual que el hormigón armado, de varillas de acero nterpuestas entre los bloques en este caso se deberá tener especial cuidado en el material aglomerante de manera de no afectar el acero.</p>
      			<p>El impacto medioambiental  de este tipo de construcción es muy similar al descrito en "hormigón armado".</p>
      			<h4>Ventajas principales:</h4>
      			<p>- No se requiere mano de obra especializada.</p>
      			<p>- Construcción económica y confortable.</p>
      			<p>- Las terminaciones pueden ser lisas o rústicas según diseño pero ambas opciones se logran muy buenos resultados.</p>
      		</div>

      	</div>



      	<div class="row space-bottom">

      	    <div class="col-md-6">
      			<img class="img-responsive img-rounded" style="margin-bottom:10px;" src="imagenes/Img/metodo_steelframing.jpg">
      		</div>

      		<div class="col-md-6 metodo-individual">
      			<h3>Steel Framing</h3>
      			<p>El Steel framing es un método que involucra una gran cantidad de materiales (acero, madera, membranas, aglomerantes, entre otros). Estructuralmente el principal material es el acero conformado en frio (referido a su proceso de fabricación). Se parte de largas bobinas de distintos anchos y espesores las cuales son plegadas por grandes maquinas (de manera que no se pierda espesor en el pliegue) para adquirir resistencia. De acuerdo al tipo de sección las más frecuentes son los perfiles “C”, “U” y “omega”.</p>
      			<p>Las uniones entre los perfiles se realizan con tornillos o “clinching” permitiendo al usuario mayor rapidez de armado sin grandes herramientas como soldadoras o taladros perforadores.</p>
      			<p>Este método busca industrializar todos los procesos que conforman la construcción de la vivienda, desde la elaboración de los materiales a la implantación en obra. El impacto ambiental está dado por la obtención del acero ya que el plegado del mismo involucra muy poca energía. El producto final tiene una eficiencia energética mayor al resto permitiendo ahorros a futuro. Utiliza plásticos (derivados del petróleo) en menor escala pero con muy bajos desperdicios de obra por lo que se reducen los impactos residuales.</p>
      			<h4>Ventajas principales:</h4>
      			<p>- Cortos tiempos de ejecución, se logran tiempos del orden del 50% menores que para la construcción tradicional. Para casas de hasta 3 pisos la relación calidad/precio es conveniente.</p>
      			<p>- Industrialización, se realiza la obra casi sin desperdicios y puede ejecutarse parte de la misma en un taller ahorrando de esa manera mano de obra de construcción.</p>
      			<p>- Se logra un producto final con una eficiencia energética superior al resto.</p>
      		</div>

      	</div>


      	<div class="row space-bottom">

      	    <div class="col-md-6">
      			<img class="img-responsive img-rounded" style="margin-bottom:10px;" src="imagenes/Img/metodo_mixtas.jpg">
      		</div>

      		<div class="col-md-6 metodo-individual">
      			<h3>Estructuras mixtas</h3>
      			<p>Tal como se encuentra explícito en el nombre, este no es un método en si sino un conjunto de métodos.</p>
      			<p>En muchas ocasiones en la búsqueda del diseño optimo y eficiente de la estructura se recurre a la utilización de varios sistemas constructivos.</p>
      			<h4>Los más comunes suelen ser:</h4>
      			<p>- Hormigón armado – Estructuras de acero</p>
      			<p>- Hormigón armado – Steel framing</p>
      			<p>- Steel framing – Estructuras de acero</p>
      			<p>- Steel framing – Estructuras de madera</p>
      		</div>

      	</div>


    </div>  
  </div>
</div>

@stop