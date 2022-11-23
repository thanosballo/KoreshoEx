window.onscroll = function() {
  if (window.scrollY > 100) {
    document.querySelector("#navbar").style.backgroundColor="white";
  } else {
    document.querySelector("#navbar").style.backgroundColor="transparent";
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