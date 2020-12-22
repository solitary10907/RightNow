
$(function(){
  $("button.hamburger").on("click", function(){
    $(this).toggleClass("is-active");
    $("nav.nav").slideToggle();
  });

});

$(function(){

  // 開啟 Modal 彈跳視窗
  $("div.member").on("click", function(){
    $("div.sign_in_back").addClass("-op");
    $("div.form_back").addClass("-op");
  });

  //關閉 Modal
  $("div.sign_in_back").on("click", function(){
    $("div.sign_in_back").addClass("-opacity-zero");
    $("div.form_back").addClass("-opacity-zero");

    //設定隔一秒後，移除相關 class
    setTimeout(function(){
      $("div.sign_in_back").removeClass("-op -opacity-zero");
      $("div.form_back").removeClass("-op -opacity-zero");
    }, 1000);
  });

  $("div.search").on("click", function(){
    $("searchchat").slideToggle();
  });

});

$(document).ready(function(){

  $("div.search").on("click", function(){
    $(".searchchat").slideToggle();
  });
  $("#close").on("click", function(){
    $(".searchchat").slideToggle();
  });
});

let sign_in_head = document.getElementsByClassName("sign_in")[0];
let registered_head = document.getElementsByClassName("registered")[0];
sign_in_head.addEventListener("click", function() {
  let a = document.getElementsByClassName("sign_in_click")[0];
  let b = document.getElementsByClassName("registered_click")[0];
  let c = document.getElementsByClassName("sign_in_body_click")[0];
  let d = document.getElementsByClassName("registered_body")[0];
  a.classList.remove("sign_in_click");
  a.classList.add("sign_in");
  b.classList.remove("registered_click");
  b.classList.add("registered");
  c.classList.remove("sign_in_body_click");
  c.classList.add("sign_in_body");
  d.classList.remove("registered_body");
  d.classList.add("registered_body_click");
});
registered_head.addEventListener("click", function() {
  let a = document.getElementsByClassName("sign_in")[0];
  let b = document.getElementsByClassName("registered")[0];
  let c = document.getElementsByClassName("sign_in_body")[0];
  let d = document.getElementsByClassName("registered_body_click")[0];
  a.classList.remove("sign_in");
  a.classList.add("sign_in_click");
  b.classList.remove("registered");
  b.classList.add("registered_click");
  c.classList.remove("sign_in_body");
  c.classList.add("sign_in_body_click");
  d.classList.remove("registered_body_click");
  d.classList.add("registered_body");
});
