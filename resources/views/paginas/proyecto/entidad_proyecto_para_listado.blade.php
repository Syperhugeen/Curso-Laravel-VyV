 <a href="{{$Proyecto->route}}"> 
              <div class="row home-section-display-item">
                <div class="media-left col-sm-4">
                  <img class="my-media-object img-rounded" src="{{$Proyecto->url_img}}" alt="{{$Proyecto->name}}">
                </div>
                <div class="my-media-body col-sm-8">
                  <h3 class="media-heading">{{$Proyecto->name}}</h3>
                  <p><span class="glyphicon glyphicon-calendar"></span> {{$Proyecto->fecha}}</p>
                  <p><span class="glyphicon glyphicon-map-marker"></span> {{$Proyecto->ubicacion}}</p>
                  <p><span class="glyphicon glyphicon-wrench"></span> {{$Proyecto->metodo_de_construccion}}</p>
                  <p class="home-section-display-description-wrapper1">{{$Proyecto->description}}</p>
                    <p class="home-section-display-ampliar"><span class="glyphicon glyphicon-plus-sign"></span> ampliar</p>
                </div>
              </div> 
            </a>
<hr class="home-section-display-divider">