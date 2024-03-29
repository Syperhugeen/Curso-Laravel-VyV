{{-- donve va el mensaje --}}
<div id="notify-mensaje"></div>
  {!! Form::open(             ['route' => 'post_envio_solicitud_cotizacion_proyecto_form',
                            'method'   => 'post',
                            'files'    => true,
                            'id'       => 'solicitud-de-presupuesto-form'
                            ])               !!}


 
    <div class="messages"></div>

    <div class="controls">

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    {!! Form::label('name', 'Nombre *') !!}
                    {!! Form::text('name', null ,['class'       => 'form-control',
                                                  'placeholder' => 'Escribe tu nombre aquí ' ,
                                                  'required'    => 'required',
                                                  'data-error'  => 'Por favor, ingresa tu nombre.']) !!}
                <div class="help-block with-errors"></div>    
                </div>
                
            </div>
        </div>   

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                     {!! Form::label('email', 'Email *') !!}
                     {!! Form::text('email', null ,['class'     => 'form-control',
                                                  'placeholder' => 'Escribe tu dirección de correo aquí ' ,
                                                  'required'    => 'required',
                                                  'data-error'  => 'Por favor, ingresa una dirección de correo válida.']) !!}
                <div class="help-block with-errors"></div>    
                </div>
                
            </div>



            <div class="col-md-6">
                <div class="form-group">
                   {!! Form::label('telefono', 'Teléfono') !!}
                   {!! Form::text('telefono', null ,['class'       => 'form-control',
                                                     'placeholder' => 'Escribe aquí tu número de línea o celular' ]) !!}
                <div class="help-block with-errors"></div>   
                </div>
                
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    {!! Form::label('mensaje', 'Mensaje *') !!}
                    {!! Form::textarea('mensaje', null ,['class'       => 'form-control',
                                                         'placeholder' => 'Escribe tu consulta aquí ', 
                                                         'rows'        => '4',
                                                         'required'    => 'required',
                                                         'data-error'  => 'Por favor, escribe un mensaje.' ]) !!}
                <div class="help-block with-errors"></div>    
                </div>
                
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 space-bottom">
                <div class="input-group">
                    {!! Form::label('file', 'Archivo *') !!}
                    {!! Form::file('file',['class' => 'form-control']) !!} 
                    
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <input type="submit" class="btn btn-primary btn-lg btn-send" value="Solicitar presupuesto" id="Envio-de-form-solicitud-presupuesto">
            </div>
        </div>

        <hr>

        <div class="row">
            <div class="col-md-12">
                <p class="text-muted small"><strong>*</strong> Estos campos son obligatorios.</p>
            </div>
        </div>
    </div>

{!! Form::close() !!}
  