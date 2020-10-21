





    <div class="row" id="footer">


      <div class="col-md-6">
        <p class="footer-p-izquierda footer-p-destacado">VEIGA VENTOS INGENIERÍA <span class="glyphicon glyphicon-copyright-mark"></span>2016</p>
        <p class="footer-p-izquierda">Diseño de interfaz <a href="https://www.simbiontecreativo.com/">Ernesto Calvo</a>  |  Desarrollo web  <a href="https://mauricio.mwebs.com.uy/">Mauricio Costanzo</a>   </p>
      </div>


      <div class="col-md-6 footer-col-derecha">
       @if($Empresa->email != null)
        <p class="footer-p-derecha"><span class="glyphicon glyphicon-envelope"></span> {{$Empresa->email}}</p>
       @endif
       @if($Empresa->telefono != null) 
        <p class="footer-p-derecha">
          <span class="glyphicon glyphicon-earphone"></span> {{$Empresa->telefono}}
          @if($Empresa->celular != null)
           <span class="glyphicon glyphicon-phone" style="padding-left:8px;"></span> {{$Empresa->celular}}
          @endif
        </p>
       @endif 
       @if($Empresa->direccion != null) 
        <p class="footer-p-derecha"><span class="glyphicon glyphicon-map-marker"></span> {{$Empresa->direccion}}</p>
       @endif
       @if($Empresa->horarios_dias != null) 
        <p class="footer-p-derecha"><span class="glyphicon glyphicon-time"></span> {{$Empresa->horarios_dias}}</p>
       @endif
      </div>

  
    </div>
        




