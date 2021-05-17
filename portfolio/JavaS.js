
var btnPlay = document.getElementById("btnPlayVideo");

var sideArrow = document.getElementById("arr-right");
let burgerMenu = document.getElementsByClassName("burger");
let sidebar = document.getElementsByClassName("sidebar");

function showSideMenu(){
    sidebar[0].style.display = "flex";
}
function hideSideMenu(){
    sidebar[0].style.display = "none";
}

burgerMenu[0].addEventListener("click", showSideMenu, false);

function onHoverDarken(){
    document.getElementsById("slikaOmeni").setAttribute("style","-webkit-filter: brightness(30%)")
}
