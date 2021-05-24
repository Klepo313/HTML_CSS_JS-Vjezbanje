
var btnPlay = document.getElementById("btnPlayVideo");
var sideArrow = document.getElementById("arr-right");
var s2t = document.getElementById("scroll2TopBtn");
let burgerMenu = document.getElementsByClassName("burger");
let sidebar = document.getElementsByClassName("sidebar");

var fscreen = document.getElementsByClassName("fscreen");
var ix = document.getElementById("ix");
var poglSliku = document.getElementById("pogledajSliku");
var btnPrikaziSlike = document.getElementById("btnPrikaziSlike");

function showSideMenu() {
    sidebar[0].style.display = "flex";
}

function hideSideMenu(){
    sidebar[0].style.display = "none";
}

burgerMenu[0].addEventListener("click", showSideMenu, false);



//Scroll 2 Top

window.onscroll = function() {scrollFunction()};

let scrollFunction;

scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    s2t.style.display = "block";
  } else {
    s2t.style.display = "none";
  }
};

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


//Sidemanu da se ne može scrollat gore dole

function makeSticky(){
  document.getElementsByTagName('body')[0].style = `overflow: hidden;`;
}
function unmakeSticky(){
  document.getElementsByTagName('body')[0].style = `overflow: visible;`;
}

//Prikaži slike

const prostorZaSlike = document.getElementById('slider-prikaz-slika');

btnPrikaziSlike.addEventListener('click', function(){

  btnPrikaziSlike.style = `display: none`;
  prostorZaSlike.style = `display: flex`;

});

let slikeArr = new Array();

slikeArr[0] = new Image();
slikeArr[0].src = 'slike/_FB_IMG_1574523833599.png';

slikeArr[1] = new Image();
slikeArr[1].src = 'slike/_FB_IMG_1575911926123.png';

slikeArr[2] = new Image();
slikeArr[2].src = 'slike/_FB_IMG_1576796322601.png';

slikeArr[3] = new Image();
slikeArr[3].src = 'slike/_FB_IMG_1576796345019.png';