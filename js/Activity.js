var heart = document.getElementsByClassName("hearticon");
for(i = 0; i < heart.length; i++){
  heart[i].addEventListener("click", function(){
    if( !(this.classList.contains("hearticon2")) ){
      this.classList.add("hearticon2");
    }else{
      this.classList.remove("hearticon2");
    }
  });
}
