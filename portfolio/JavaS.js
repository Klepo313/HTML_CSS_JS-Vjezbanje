
var btnPlay = document.getElementById("btnPlayVideo");
var sideArrow = document.getElementById("arr-right");
var s2t = document.getElementById("scroll2TopBtn");
let burgerMenu = document.getElementsByClassName("burger");
let sidebar = document.getElementsByClassName("sidebar");

var fscreen = document.getElementsByClassName("fscreen");
var ix = document.getElementById("ix");
var poglSliku = document.getElementById("pogledajSliku");

function showSideMenu(){
    sidebar[0].style.display = "flex";
}
function hideSideMenu(){
    sidebar[0].style.display = "none";
}

burgerMenu[0].addEventListener("click", showSideMenu, false);



//Scroll 2 Top

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    s2t.style.display = "block";
  } else {
    s2t.style.display = "none";
  }
}

function topPosition() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//FS Slika

function pogledajSliku(){
    document.getElementById("fscreen").style.display = "flex";
}

ix.addEventListener("click", function(){
  document.getElementById("fscreen").style.display = "none";
});
