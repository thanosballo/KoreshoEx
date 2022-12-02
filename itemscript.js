let gridContainer=document.querySelector(".grid-container");
let twoButton=document.querySelector(".grid-button-2");
let fourButton=document.querySelector(".grid-button-4");
let graphBoxTwo=document.querySelectorAll(".graph-box-two");
let graphBoxFour=document.querySelectorAll(".graph-box-four");
twoButton.addEventListener("click",()=>{
  gridContainer.classList.add("grid-two");  
  graphBoxTwo.forEach((graphBoxTwo) => {
    graphBoxTwo.classList.add("black-bg");
  });
  graphBoxFour.forEach((graphBoxFour)=>{
    graphBoxFour.classList.remove("black-bg");
  })
});
fourButton.addEventListener("click",()=>{
  gridContainer.classList.remove("grid-two");  
  graphBoxFour.forEach((graphBoxFour) => {
    graphBoxFour.classList.add("black-bg");
  });
  graphBoxTwo.forEach((graphBoxTwo)=>{
    graphBoxTwo.classList.remove("black-bg");
  });
});
