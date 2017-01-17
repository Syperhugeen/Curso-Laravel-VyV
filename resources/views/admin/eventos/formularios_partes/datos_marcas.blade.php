<div class="formulario-label-fiel">
{!! Form::label('img', 'Marcas', array('class' => 'control-label')) !!}

<select id="select-marcas" multiple  style="margin: 15px 0;" value="{{ Input::old('marca_asociado_id') }}" name="marca_asociado_id[]">
      <OPTION VALUE="">
      Elige una Empresa de Transporte
      </OPTION>               
      @foreach($Marcas as $Marca)
        <OPTION data-img-src=" {{$Marca->url_img}}" 
                      VALUE="{{$Marca->id}}"
                      >
        {{$Marca->name}} 
        </OPTION>
      @endforeach 
</select>
</div>