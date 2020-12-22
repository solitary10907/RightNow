$(function(){
  // 點擊
  $("h2.right_btn").on("click", function(){
    // -open 的樣式切換
    $(this).closest("div.right_sidebar").toggleClass("-open");
  });

});

var playing1 = false;
var v1 = new TimelineMax();
var v2 = new TimelineMax();

v1.to(".mv01", 1, {
  rotation: 90,
}).to(".mv01", 1, {
  rotation: 180,
}).to(".mv01", 1, {
  rotation: 270,
}).to(".mv03", 3, {
  x: "-100%"
}).to(".mv05", 0.01, {
  className:"+=none"
})

v2.to(".mv02", 1, {
  rotation: -90,
}).to(".mv02", 1, {
  rotation: -180,
}).to(".mv02", 1, {
  rotation: -270,
}).to(".mv04", 3, {
  x: "100%"
}).to(".choice", 0.01, {
  className:"+=op"
})

v1.stop();
v2.stop();

var p = document.getElementById('playing1');
p.addEventListener("click", play1);
var p2 = document.getElementById('playing2');
p2.addEventListener("click", play1);
function play1(){
  if( !playing1 ){
    playing1 = true;
    v1.play();
    v2.play();
  }
}



var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
.add({
  targets: '.ml2 .letter',
  scale: [4,1],
  opacity: [0,1],
  translateZ: 0,
  easing: "easeOutExpo",
  duration: 950,
  delay: (el, i) => 70*i
}).add({
  targets: '.ml2',
  opacity: 0,
  duration: 1000,
  easing: "easeOutExpo",
  delay: 1000
});

var twist = document.getElementsByClassName('twist')[0];
twist.addEventListener("click", function(){

  v3.play();
  v4.play();
  v5.play();
  v6.play();
  v7.play();
  v8.play();

  let foodname = Math.floor((Math.random()*food.length));
  let text = document.getElementsByClassName("text")[0];

  let ball_opacity = document.getElementById("restar");
  ball_opacity.classList.remove("opacity");
  v3.restart();
  v4.restart();
  v5.restart();
  v6.restart();
  v7.restart();
  v8.restart();

  text.innerText = `${food[foodname]}`;
});


var v3 = new TimelineMax();
v3.staggerTo(".v01", 1, {
  rotation: 90,
}).staggerTo(".v01", 1, {
  rotation: 360,
}).staggerTo(".b6", 0.5, {
  y: "120%"
}).staggerTo(".b6", 2, {
  className:"+=front",
  scale: 2,
  y: "150%",
  rotation: 360,
}).staggerTo(".b6", 1, {
  x: "320%",
  y: "-200%",
  scale: 4
})

v3.stop();

var v4 = new TimelineMax();
v4.to(".b1", 0.3, {
  x: "-3%",
  y: "-1%"
}).to(".b1", 0.3, {
  x: "-3%",
}).to(".b1", 0.4, {
  x: "4%",
  y: "3%"
}).to(".b1", 1, {
  y: "10%",
})

v4.stop();

var v5 = new TimelineMax();
v5.to(".b2", 0.3, {
  x: "3%",
  rotation: 60,
}).to(".b2", 0.3, {
  x: "5%",
  y: "3%"
}).to(".b2", 0.4, {
  x: "7%",
  y: "5%"
}).to(".b2", 1, {
  y: "7%"
})

v5.stop();

var v6 = new TimelineMax();
v6.to(".b3", 0.5, {
  y: "7%"
}).to(".b3", 0.5, {
  x: "-10%",
  y: "15%"
})

v6.stop();

var v7 = new TimelineMax();
v7.to(".b4", 0.3, {
  y: "-10%",
  x: "10%"
}).to(".b4", 0.3, {
  y: "18%",
  x: "13%"
}).to(".b4", 0.4, {
  y: "18%",
  x: "17%"
}).to(".b4", 0.7, {
  y: "25%",
  x: "13%"
})

v7.stop();

var v8 = new TimelineMax();

v8.to(".b5", 0.3, {
  y: "3%",
}).to(".b5", 0.3, {
  y: "6%",
}).to(".b5", 0.4, {
  y: "15%",
}).to(".b5", 0.3, {
  x: "8%",
  y: "30%",
})


v8.stop();

var open = document.getElementById("restar");
var text_back = document.getElementsByClassName("text_back")[0];
open.addEventListener("click", function(){
  // alert();
  let ball_opacity = document.getElementById("restar");
  ball_opacity.classList.add("opacity");

  text_back.classList.add("-open");

});

text_back.addEventListener("click", function(){
  text_back.classList.remove("-open");
});


var condition = document.getElementsByClassName("nb1");
for(i = 0; i < condition.length; i++){
  condition[i].addEventListener("click", function(){
    if( !(this.classList.contains("change")) ){
      this.classList.add("change");
    }else{
      this.classList.remove("change");
    }

  });
}

var conplay = document.getElementById("conplay");
var coneat = document.getElementById("coneat");
var play_body = document.getElementById("play_body");
var eat_body = document.getElementById("eat_body");
conplay.addEventListener("click", function(){
  conplay.classList.add("on");
  coneat.classList.remove("on");
  play_body.classList.remove("close");
  eat_body.classList.add("close");
});
coneat.addEventListener("click", function(){
  conplay.classList.remove("on");
  coneat.classList.add("on");
  play_body.classList.add("close");
  eat_body.classList.remove("close");
});

var food = [
  "Subway",
  "Spice Cuisine香料餐盤",
  "12MINI經典即享鍋",
  "林記海南雞飯",
  "McDonald's",
  "KFC",
  "一本燒肉便當",
  "大哥水煎包",
  "君悅排骨",
  "吉生自助餐",
];
