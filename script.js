let prevScrollpos = window.scrollY;

window.onscroll = function() {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("#navbar").style.top = "0";
    document.querySelector("#navbar").style.backgroundColor="white";
  } else {
    document.querySelector("#navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
  if (prevScrollpos==0)
    document.querySelector("#navbar").style.backgroundColor="transparent";
};


function mouseOver(){
    document.querySelector("#navbar").style.backgroundColor="white";  
};
function mouseOut(){
  if (window.scrollY===0){
    document.querySelector("#navbar").style.backgroundColor="transparent";
  };
};