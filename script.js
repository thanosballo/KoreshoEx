let active=false;
let navBar=document.querySelector("#navbar");
let toggleBtn=document.querySelector(".toggle-btn");
let toggleNavLinks=document.querySelector(".nav-links");
toggleBtn.addEventListener("click",()=>{
  if (!navBar.classList.contains("white-bg"))
  {navBar.classList.add("white-bg");}
  else if (navBar.classList.contains("white-bg") && (window.scrollY===0)) 
  { navBar.classList.remove("white-bg");}
  
  toggleBtn.classList.toggle("open");
  toggleNavLinks.classList.toggle("open");
});

function mouseOver(){
    navBar.classList.add("white-bg");
    active=true;
};
function mouseOut(){
  if (window.scrollY===0){
    navBar.classList.remove("white-bg");
    active=false;
  };
};
window.onscroll = function() {
  if (window.scrollY > 0) {
    navBar.classList.add("white-bg");
    a=true;
  } else if ((window.scrollY===0) && (active===false)) {
    navBar.classList.remove("white-bg");
    active=false;
  } 
  };
