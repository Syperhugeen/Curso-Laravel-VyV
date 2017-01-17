<!--este es el carrusel de imágenes de portada-->

<div id="myCarousel" class="carousel slide" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
    <li data-target="#myCarousel" data-slide-to="3"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <img class="img-carousel" src="imagenes/Img/metodo1.jpg" alt="Método1">
      <!--      <div class="carousel-caption">
        <h3>Método1</h3>
        <p>Un breve renglón de descripción.</p>
      </div>      -->
    </div>

    <div class="item">
      <img class="img-carousel" src="imagenes/Img/metodo2.jpg" alt="Método2">
            <!--    <div class="carousel-caption">
        <h3>Método2</h3>
        <p>Un breve renglón de descripción.</p>
      </div>    -->
    </div>

    <div class="item">
      <img class="img-carousel" src="imagenes/Img/metodo3.jpg" alt="Método3">
            <!--    <div class="carousel-caption">
        <h3>Método3</h3>
        <p>Un breve renglón de descripción.</p>
      </div>    -->
    </div>

    <div class="item">
      <img class="img-carousel" src="imagenes/Img/metodo4.jpg" alt="Método4">
            <!--    <div class="carousel-caption">
        <h3>Método4</h3>
        <p>Un breve renglón de descripción.</p>
      </div>    -->
    </div>
  </div>

  <!-- Left and right controls -->
  <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>