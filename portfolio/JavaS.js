
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
var btnAtmSlideshow = document.getElementById('atmSlike');

var brojac = 0;
var vrijeme = 2000;
var jeNije = 1;
const slikeArr = [];
slikeArr[0] = 'slike/_FB_IMG_1574523833599.png';
slikeArr[1] = 'slike/_FB_IMG_1575911926123-1.png';
slikeArr[2] = 'slike/_FB_IMG_1576796322601.png';
slikeArr[3] = 'slike/_FB_IMG_1576796345019.png';

//AUTOMATSKA PROMJENA SLIKE U NEKOM VREMENSKOM INTERVALU

function imageSlider(){

  if(jeNije === 0){
    btnAtmSlideshow.innerHTML = "automatski slideshow";

    btnAtmSlideshow.addEventListener("click", function(){
      jeNije = 1;
      arrRight.style = "display: none";
      arrLeft.style = "display: none";
    });

  } else{
      document.sliderSlike.src = slikeArr[brojac];
      btnAtmSlideshow.innerHTML = "Zaustavi slideshow";
    
      arrRight.style = "display: none";
      arrLeft.style = "display: none";
  
      if(brojac < slikeArr.length - 1){
        brojac++;
      } else {
        brojac = 0;
      }
      setTimeout("imageSlider()", vrijeme);

      btnAtmSlideshow.addEventListener("click", function(){
        jeNije = 0;
        arrRight.style = "display: flex";
        arrLeft.style = "display: flex";
      });
  }
  
}



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

});


//LIJEVA STRELICA

arrLeft.addEventListener('click', function(){

  if(index === 0){
    index = 3;
    document.sliderSlike.src = slikeArr[index];

      sliderSlike.classList.add('fadeIn');
    setTimeout(() => {
      sliderSlike.classList.remove('fadeIn');
    }, 1000);

  } else{
    index--;
    document.sliderSlike.src = slikeArr[index];

      sliderSlike.classList.add('fadeIn');
    setTimeout(() => {
      sliderSlike.classList.remove('fadeIn');
    }, 1000);
  }
  

});


//FORMA - CHECK

var inputIme = document.getElementById('inpIme');
var inputPrezime = document.getElementById('inpPrezime');
var inputIEmail = document.getElementById('inpEmail');
var inputPredmetPoruke = document.getElementById('inpPredmet');
var textareaPoruka = document.getElementById('textareaPoruka');

function CheckForm() {
  if(inputIme == null)
    inputIme.style = "border: 2px solid red";

  else if(inputPrezime == null)
    inputPrezime.style = "border: 2px solid red";

  else if(inputEmail == null)
    inputEmail.style = "border: 2px solid red";

  else if(inputPredmetPoruke == null)
    inputPredmetPoruke.style = "border: 2px solid red";

  else if(textareaPoruka == null)
    textareaPoruka.style = "border: 2px solid red";

    //ALERT
  alert("Unesi podatke u polja označena crvenom bojom!");
}


