
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

const arrRight = document.getElementById('desnaStrelica');
const arrLeft = document.getElementById('lijevaStrelica');
const galerija = document.getElementsByClassName('galerijaSlike');

var brojac = 0;
var vrijeme = 1000;
const slikeArr = [];
slikeArr[0] = 'slike/_FB_IMG_1574523833599.png';
slikeArr[1] = 'slike/_FB_IMG_1575911926123-1.png';
slikeArr[2] = 'slike/_FB_IMG_1576796322601.png';
slikeArr[3] = 'slike/_FB_IMG_1576796345019.png';

//PROMJENA SLIKE U NEKOM VREMENSKOM INTERVALU
function imageSlider(){

  document.sliderSlike.src = slikeArr[brojac];

  if(brojac < slikeArr.length - 1){
    brojac++;
  } else {
    brojac = 0;
  }

  setTimeout("imageSlider()", vrijeme);
}

window.onload = imageSlider --;


var index = brojac;

//DESNA STRELICA
arrRight.addEventListener('click', function(){

  if(index < slikeArr.length - 1){
    index++;
    document.sliderSlike.src = slikeArr[index];

      sliderSlike.classList.add('fadeIn');
    setTimeout(() => {
      sliderSlike.classList.remove('fadeIn');
    }, 1000);

  } else {
    index = 0;
    document.sliderSlike.src = slikeArr[index];

      sliderSlike.classList.add('fadeIn');
    setTimeout(() => {
      sliderSlike.classList.remove('fadeIn');
    }, 1000);
  }
  console.log(index);

});


//LIJEVA STRELICA

arrLeft.addEventListener('click', function(){

  if(index < slikeArr.length - 1){
    index--;
    document.sliderSlike.src = slikeArr[index];

      sliderSlike.classList.add('fadeIn');
    setTimeout(() => {
      sliderSlike.classList.remove('fadeIn');
    }, 1000);

  } 
  else if(index == 0){
    index++;
    document.sliderSlike.src = slikeArr[index];

      sliderSlike.classList.add('fadeIn');
    setTimeout(() => {
      sliderSlike.classList.remove('fadeIn');
    }, 1000);
  }
  

});

/*
const slikeSlidera = [
  {
    src: `slike/_FB_IMG_1574523833599.png`
  },
  {
    src: `slike/_FB_IMG_1575911926123.png`
  },
  {
    src: `slike/_FB_IMG_1576796322601.png`
  },
  {
    src: `slike/_FB_IMG_1576796345019.png`
  }
];
*/