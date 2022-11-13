let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("#navbar").style.top = "0";
    document.querySelector("#navbar").style.backgroundColor="white";
  } else {
    document.querySelector("#navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
  if (prevScrollpos==0)
    document.querySelector("#navbar").style.backgroundColor="transparent";
}
