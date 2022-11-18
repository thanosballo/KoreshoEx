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
    stickyFunction();
  };


function mouseOver(){
    document.querySelector("#navbar").style.backgroundColor="white";  
};
function mouseOut(){
  if (window.scrollY===0){
    document.querySelector("#navbar").style.backgroundColor="transparent";
  };
};

let heartBtn=document.querySelector("#hearticon");
let heartStatus=true;
  heartBtn.addEventListener("click",()=>{
  if (heartStatus){
  document.querySelector(".la-heart").classList.remove("lar");
  document.querySelector(".la-heart").classList.add("las");
  heartStatus=false;
  }
  else {
    document.querySelector(".la-heart").classList.remove("las");
    document.querySelector(".la-heart").classList.add("lar");
    heartStatus=true;
  }

})

let itemCard=document.querySelector(".item-info-card");
let sticky=itemCard.offsetTop;
console.log(sticky);
function stickyFunction() {
  if (((window.pageYOffset)+240)> sticky){
    itemCard.classList.add("sticky");
  } else {
    itemCard.classList.remove("sticky");
  }
}
/* window.addEventListener("scroll",()=>{
    console.log(33);
    if (window.pageYOffset > sticky) {
      itemCard.classList.add("sticky");
    } else {
      itemCard.classList.remove("sticky");
    }
}); */