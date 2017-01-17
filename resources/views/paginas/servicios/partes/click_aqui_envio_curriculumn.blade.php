<div type="button" class="btn btn-primary btn-lg boton-presupuesto" data-toggle="modal" data-target="#modal-envio-cuuriculumn" style="margin-top:40px;margin-bottom:40px">
<h2 class="color-blanco"><span class="glyphicon glyphicon-new-window"></span> Enviar solicitud</h2>
</div>

  {{-- escondo contenido modal --}}
  <div class="modal fade" id="modal-envio-cuuriculumn" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">  
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">Formulario de solicitud de trabajo</h4>
            </div>
            <div class="modal-body">
              @include('formularios.solicitud_trabajo_form')
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>              
            </div>
          </div>
        </div>            
  </div>
