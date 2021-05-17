
var btnPlay = document.getElementById("btnPlayVideo");
var sideArrow = document.getElementById("arr-right");
var s2t = document.getElementById("scroll2TopBtn");
let burgerMenu = document.getElementsByClassName("burger");
let sidebar = document.getElementsByClassName("sidebar");

function showSideMenu(){
    sidebar[0].style.display = "flex";
}
function hideSideMenu(){
    sidebar[0].style.display = "none";
}

burgerMenu[0].addEventListener("click", showSideMenu, false);



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    s2t.style.display = "block";
  } else {
    s2t.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topPosition() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
