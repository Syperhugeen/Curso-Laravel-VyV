<!DOCTYPE html><html lang="es
"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="csrf-token" content="{{ csrf_token() }}"><title>{{$Data['title']}}</title><meta name="description" content="{{$Data['description']}}"><meta name="robots" content="index,follow"><link rel="shortcut icon" href="{{ asset('imagenes/favicon.ico') }}"><meta property="og:type" content="website"><meta property="og:title" content="{{$Data['title']}} "><meta property="og:description" content="{{$Data['description']}}"><meta property="og:image" content="{{$Data['og_img']}}"><meta property="og:image:secure_url" content="{{$Data['og_img']}}"><meta property="og:image:width" content="250"><meta property="og:image:height" content="250"><script>// Check that service workers are supported
      if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/service-worker.js');
        });
      }</script><script defer="defer" src="/js/home.15161a2c64f76ebfd9ad.js"></script><link href="/css/home.bcf625776c07be801d55.css" rel="stylesheet"></head><body><div id="root"></div><div id="modal-root"></div></body></html>