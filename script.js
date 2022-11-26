window.onscroll = function() {
  if (window.scrollY > 100) {
    document.querySelector("#navbar").style.backgroundColor="white";
  /*   document.querySelector("#navbar").style.position="fixed"; */
  } else {
    document.querySelector("#navbar").style.backgroundColor="transparent";
    /* document.querySelector("#navbar").style.position="relative"; */
  }
  };
function mouseOver(){
    document.querySelector("#navbar").style.backgroundColor="white";  
};
function mouseOut(){
  if (window.scrollY===0){
    document.querySelector("#navbar").style.backgroundColor="transparent";
  };
};