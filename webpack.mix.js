let mix = require('laravel-mix');

mix.combine(
  [
    './resources/assets/js/Plug-jquery-1.11.3.min.js',
    './resources/assets/js/Plug-bootstrap-notify.min.js',
    './resources/assets/js/Plug-bootstrap.min.js',
    './resources/assets/js/Plug-chosen.jquery.js',
    './resources/assets/js/Plug-ImageSelect.jquery.js',
    './resources/assets/js/Plug-jquery.maxcharwarning.min.js',
    './resources/assets/js/Plug-barraprogreso.js',
    './resources/assets/js/Plug-rating-plugin.js',
    './resources/assets/js/Plug-bxSlider.js',
    './resources/assets/js/Plug-jquery.tooltip.min.js',
    './resources/assets/js/Plug-validator-Boostrap.js',
    './resources/assets/js/Plug-texarea-Te_v1.js',
    './resources/assets/js/Plug-bootstrap-fileinput v4.3.7.js',
    './resources/assets/js/inicio.js',
    './resources/assets/js/mis-funciones_personalizadas.js',
    './resources/assets/js/mis-funciones_personalizadas_para_GoogleAnalitics.js',
    './resources/assets/js/mis-muestra_barra_de_carga.js',
    './resources/assets/js/mis-selects.js',
    './resources/assets/js/mis-validaciones.js',
    './resources/assets/js/mis-errores_personalizados.js',
    './resources/assets/js/mis-scrollA.js',
    './resources/assets/js/Plug-VentanasModals.js',
    './resources/assets/js/mis-ventanas_modals.js',
    './resources/assets/js/Plug-EasyAutoComplete.js',
    './resources/assets/js/Plug-Scroll-Too.js',
    './resources/assets/js/mis-disparador_De_Form.js',
    './resources/assets/js/mis-sliders.js',
    './resources/assets/js/mis-tooltips.js',
    './resources/assets/js/mis-flechitas-autopocicionadas.js',
    './resources/assets/js/mis-botones_para_adjuntar.js',
    './resources/assets/js/mis-textareas.js',
    './resources/assets/js/mis-file_input.js',
    './resources/assets/js/Plug-smooth_scroll.js',
    './resources/assets/js/Plug-wow.js',
    './resources/assets/js/mis-funciones-alertas.js',
    './resources/assets/js/mis-funciones-personalizadas-ajax.js',
    './resources/assets/js/mis-ajax.js',
    './resources/assets/js/fin.js',
  ],
  'public/build/js/public.js'
);

mix
  .sass('./resources/assets/sass/mixer.scss', 'public/build/css/public.css')
  .options({
    processCssUrls: false,
  });
