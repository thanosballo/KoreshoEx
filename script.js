let navBar=document.querySelector("#navbar");
let toggleBtn=document.querySelector(".toggle-btn");
let toggleNavLinks=document.querySelector(".nav-links");
toggleBtn.addEventListener("click",()=>{
  toggleBtn.classList.toggle("open");
  toggleNavLinks.classList.toggle("open");
  if (toggleNavLinks.classList.contains("open"))
  {navBar.classList.add("white-bg");}
  else if (!toggleNavLinks.classList.contains("open") && (window.scrollY===0)) 
  { navBar.classList.remove("white-bg");}
});

function mouseOver(){
    navBar.classList.add("white-bg");
};
function mouseOut(){
  if (window.scrollY===0 && !toggleNavLinks.classList.contains("open")){
    navBar.classList.remove("white-bg");
  };
};
window.onscroll = function() {
  if (window.scrollY > 0) {
    navBar.classList.add("white-bg");
  } else if (!toggleNavLinks.classList.contains("open") && (window.scrollY===0)) {
    navBar.classList.remove("white-bg");
  } 
  };

let mobMenu=document.querySelector(".mob-menu-link");
let subMobMenu=document.querySelector("#shop-sub-menu");

/* mobMenu.addEventListener("click",()=>{
  if (subMobMenu.classList.contains("displ-block")){
    subMobMenu.classList.remove("displ-block");
  } else {
    subMobMenu.classList.add("displ-block");
  };
});
 */