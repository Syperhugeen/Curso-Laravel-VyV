@extends('emails.layouts.layout_nuevo')

{{--*/ $Color_principal  = $request->get('Color_principal') /*--}}
{{--*/ $Logo_url         = $request->get('Logo_url') /*--}}
{{--*/ $Color_fondo      = $request->get('Color_fondo')  /*--}}
{{--*/ $Data_footer      = $request->get('Data_footer')  /*--}}
{{--*/ $Titulo           = $request->get('Titulo')  /*--}}
{{--*/ $EmpresaName           = $request->get('EmpresaName')  /*--}}


@section('logo')
 <table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:{{$Color_fondo}};background-repeat:repeat;background-position:center top">
        <tbody>
         <tr style="border-collapse:collapse">
          <td align="center" style="padding:0;Margin:0">
           <table class="es-header-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
            <tbody>
             <tr style="border-collapse:collapse">
              <td align="left" style="Margin:0;padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:20px">
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                <tbody>
                 <tr style="border-collapse:collapse">
                  <td valign="top" align="center" style="padding:0;Margin:0;width:580px">
                   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                    <tbody>
                     <tr style="border-collapse:collapse">
                      <td align="center" style="Margin:0;padding-left:10px;padding-right:10px;padding-top:25px;padding-bottom:25px;font-size:0">
                        @if($Logo_url != null)
                        <img src="{{$Logo_url}}" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="170">
                        @endif
                      </td>
                     </tr>
                    </tbody>
                   </table></td>
                 </tr>
                </tbody>
               </table></td>
             </tr>
            </tbody>
           </table></td>
         </tr>
        </tbody>
       </table>
@stop

@section('titulo')
 <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
        <tbody>
         <tr style="border-collapse:collapse">
          <td style="padding:0;Margin:0;background-color:{{$Color_fondo}}" bgcolor="{{$Color_fondo}}" align="center">
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center">
            <tbody>
             <tr style="border-collapse:collapse">
              <td align="left" style="padding:0;Margin:0">
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                <tbody>
                 <tr style="border-collapse:collapse">
                  <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
                   <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#FFFFFF;border-radius:4px" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
                    <tbody>
                     <tr style="border-collapse:collapse">
                      <td align="center" style="Margin:0;padding-bottom:5px;padding-left:30px;padding-right:30px;padding-top:35px">

                        <h1 style="Margin:0;line-height:58px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:38px;font-style:normal;font-weight:normal;color:#111111">{{$Titulo}}</h1>

                      </td>
                     </tr>
                     <tr style="border-collapse:collapse">
                      <td bgcolor="#ffffff" align="center" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px;font-size:0">
                       <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tbody>
                         <tr style="border-collapse:collapse">
                          <td style="padding:0;Margin:0px;border-bottom:1px solid #FFFFFF;background:#FFFFFFnone repeat scroll 0% 0%;height:1px;width:100%;margin:0px"></td>
                         </tr>
                        </tbody>
                       </table></td>
                     </tr>
                    </tbody>
                   </table></td>
                 </tr>
                </tbody>
               </table></td>
             </tr>
            </tbody>
           </table></td>
         </tr>
        </tbody>
       </table>


@stop



@section('contenido')

                     <tr style="border-collapse:collapse">
                      <td class="es-m-txt-l" bgcolor="#ffffff" align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:30px;padding-right:30px">
                        <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666">Datos de la solicitud.
                        </p>
                      </td>
                     </tr>




                     <tr style="border-collapse:collapse">
                      <td class="es-m-txt-l" align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:30px;padding-right:30px">
                        <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666">
                          <strong>Nombre</strong>:  {{$request->get('name')}}
                        </p>

                      </td>
                     </tr>
                     <tr style="border-collapse:collapse">
                      <td class="es-m-txt-l" align="left" style="padding:0;Margin:0;padding-top:10px;padding-left:30px;padding-right:30px">
                        <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666">
                          <strong>Email</strong>:  {{$request->get('email')}}
                        </p>

                      </td>
                     </tr>




                     @if($request->get('celular') != '')
                     <tr style="border-collapse:collapse">
                      <td class="es-m-txt-l" align="left" style="padding:0;Margin:0;padding-top:10px;padding-left:30px;padding-right:30px">
                        <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666">
                          <strong>Celular</strong>: {{$request->get('celular')}}
                        </p>

                      </td>
                     </tr>
                     @endif






                     <tr style="border-collapse:collapse">
                      <td class="es-m-txt-l" align="left" style="padding:0;Margin:0;padding-top:10px;padding-left:30px;padding-right:30px;padding-bottom: 40px;">
                        <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666">
                          <strong>Mensaje</strong>: {{$request->get('message')}}
                        </p>

                      </td>
                     </tr>




@stop

@section('mas-ayuda')

<table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
        <tbody>
         <tr style="border-collapse:collapse">
          <td align="center" style="padding:0;Margin:0">
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center">
            <tbody>
             <tr style="border-collapse:collapse">
              <td align="left" style="padding:0;Margin:0">
               <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                <tbody>
                 <tr style="border-collapse:collapse">
                  <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
                   <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#ffffff;border-radius:4px" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffecd1">
                    <tbody>
                     <tr style="border-collapse:collapse">
                      <td align="center" style="padding:0;Margin:0;padding-top:30px;padding-left:30px;padding-right:30px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#111111">Más información </h3></td>
                     </tr>
                     <tr style="border-collapse:collapse">
                      <td esdev-links-color="#ffa73b" align="center" style="padding:0;Margin:0;padding-bottom:30px;padding-left:30px;padding-right:30px"><a target="_blank" href="{{url()}}" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;text-decoration:underline;color:{{$Color_principal}}">{{$EmpresaName}}</a></td>
                     </tr>
                    </tbody>
                   </table></td>
                 </tr>
                </tbody>
               </table></td>
             </tr>
            </tbody>
           </table></td>
         </tr>
        </tbody>
       </table>

@stop

@section('footer')

@if($Data_footer != null || $Data_footer != ''  )


  <tr style="border-collapse:collapse">
    <td align="left" style="padding:0;Margin:0">
      <p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#666666">
        <strong>
          -
          @foreach($Data_footer as $Data)
            <a target="_blank" href="{{$Data['url']}}" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:14px;text-decoration:underline;color:{{$Color_principal}}">
              {{$Data['name']}}
            </a>
          -
          @endforeach

        </strong>
      </p>
    </td>
  </tr>





  @endif

@stop
