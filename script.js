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
let subMenu=document.querySelector(".sub-menu");
let subDisplay=window.getComputedStyle(subMenu);
let shopBtn=document.querySelector("#shop-btn");
shopBtn.addEventListener("mouseover",()=>{
  if (subDisplay.display=="block"){
    document.querySelector("#navbar").style.backgroundColor="white"; 
  }
})
shopBtn.addEventListener("mouseout",()=>{
  if (window.scrollY===0){
    document.querySelector("#navbar").style.backgroundColor="transparent";}
})

