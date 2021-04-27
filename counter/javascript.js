

console.log('Sve uredu');

var btnPovecaj = document.getElementById("btn-inc");
var btnSmanji = document.getElementById("btn-dec");
var btnResetiraj = document.getElementById("btn-res");


var brojac = 0;
document.getElementById("header2").innerHTML = brojac;

function povecaj() {

    brojac++;
    document.getElementById("header2").innerHTML = brojac;

}

function resetiraj() {

    brojac = 0;
    document.getElementById("header2").innerHTML = brojac;

}

function smanji() {

    if(brojac == 0){
        window.alert("Ne može ispod 0!")
    }
    else{
        brojac--;
        document.getElementById("header2").innerHTML = brojac;}
    
}


var btnText = document.getElementById("btnVise");

function prikaziVise(){

    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Prikaži više";
        moreText.style.display = "none";
      } else {
        dots.style.display = "none";
        btnText.innerHTML = "Prikaži manje";
        moreText.style.display = "inline";
      }

}

btnText.addEventListener("click", prikaziVise);

//connect 89.163.212.101:27035