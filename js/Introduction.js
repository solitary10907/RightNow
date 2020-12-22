$(document).ready(function() {
   $('#image-gallery').lightSlider({
     gallery:true,
     item:1,
     thumbItem:4,
     slideMargin: 0,
     speed:500,
     auto:true,
     loop:true,
     onSliderLoad: function() {
       $('#image-gallery').removeClass('cS-hidden');
     }
   });
   $('#image-gallery2').lightSlider({
       item:1,
       slideMargin: 0,
       speed:500,
       auto:true,
       loop:true,
       controls: false,
       pager: false,
       onSliderLoad: function() {
         $('#image-gallery2').removeClass('cS-hidden');
       }
   });
});

var input = document.getElementsByClassName('messagetext')[0];
input.addEventListener("keydown", function(e){
  if(e.which == 13 && input.value != ""){
    let input_text = input.value.trim();

    let message_text = `
      <div class="head2">
        <div class="headp3"></div>
        <div class="text">
          <p>黃家瑋<br>${input_text}</p>
          <a href="#0"><div class="likebtn2"></div></a>
          <a href="#0"><div class="leavebtn2"></div></a>
        </div>
      </div>
    `;

    let div_messagebody = document.getElementsByClassName('message_body')[0];
    div_messagebody.insertAdjacentHTML("beforeend",message_text);
    input.value = "";
  }
});

var heart = document.getElementsByClassName("hearticon")[0];
heart.addEventListener("click", function(){
  if( !(heart.classList.contains("hearticon2")) ){
    heart.classList.add("hearticon2");
  }else{
    heart.classList.remove("hearticon2");
  }
});
