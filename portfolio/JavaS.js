
var btnPlay = document.getElementById("btnPlayVideo");
function sirinaVisina(){
    alert("Širina: " + window.screen.availWidth + "px\n" + "Visina: " + window.screen.availHeight + "px");
}

btnPlay.addEventListener("click", sirinaVisina);