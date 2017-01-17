<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{$Empresa->name}} - @yield('title')</title>
    <meta name="Description" CONTENT="@yield('MetaContent')">

    <link rel="stylesheet" type="text/css" href="{{url()}}{{ elixir('css/app.css') }}">   
    <link rel="stylesheet" type="text/css" href=" {{ asset('Iconos/fonts/style.css')}}">
    <META name="robots" content="@yield('MetaRobot')">





    <script>
  $(function() {
    // This will select everything with the class smoothScroll
    // This should prevent problems with carousel, scrollspy, etc...
    $('.smoothScroll').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 800); // The number here represents the speed of the scroll in milliseconds
          return false;
        }
      }
    });
  });
  </script>





  </head>
  <body>
      <div class="global-wrapper">

           @include('layouts.user_layout.header.global')

           <div>
                @yield('content')  
           </div>




          <div class="container-fluid section-wrapper bg-footer">
            <div class="row">    
              <div class="col-md-10 col-md-push-1 col-lg-8 col-lg-push-2">

             @include('layouts.user_layout.footer.footer-general')

              </div>  
            </div>
          </div>

      </div>


    <!-- Scripts -->
    <script src="{{ asset('js/all.js')}}"></script>    
     <!-- activate WOW.js (ya está cargada al principio del html code) --> 
    <script> new WOW().init(); </script>

  </body>
</html>   