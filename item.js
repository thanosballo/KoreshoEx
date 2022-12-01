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
function stickyFunction() {
      if (((window.scrollY)+240)> sticky){
        itemCard.classList.add("sticky");
      } else {
        itemCard.classList.remove("sticky");
      }
}