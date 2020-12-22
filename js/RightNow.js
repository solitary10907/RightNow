$(document).ready(function() {
   $('#image-gallery').lightSlider({
       item:1,
       slideMargin: 0,
       speed:500,
       auto:true,
       loop:true,
       controls: false,
       pager: false,
       onSliderLoad: function() {
         $('#image-gallery').removeClass('cS-hidden');
       }
   });
});
