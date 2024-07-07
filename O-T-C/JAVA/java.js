let section_2 = document .querySelector(".main-2");
let section_1 = document .querySelector(".main-1");
let section_3 = document .querySelector(".main-3");
let section_4 = document .querySelector(".main-4");

window.onscroll = function (){
    if(window.scrollY >= section_1.offsetTop ){
        document.querySelector(".header-2").classList.add("op");
        document.querySelector(".up").classList.add("op");
    }
    if(window.scrollY <= section_1.offsetTop ){
        document.querySelector(".header-2").classList.remove("op");
        document.querySelector(".up").classList.remove("op");
    }
}

function oop1(){
    document.getElementById("n-m1").classList.add("open");
    document.getElementById("n-m2").classList.remove("open");
    document.getElementById("n-m3").classList.remove("open");
    document.getElementById("n-m4").classList.remove("open");
}
function oop2(){
    document.getElementById("n-m1").classList.remove("open");
    document.getElementById("n-m2").classList.add("open");
    document.getElementById("n-m3").classList.remove("open");
    document.getElementById("n-m4").classList.remove("open");
}
function oop3(){
    document.getElementById("n-m1").classList.remove("open");
    document.getElementById("n-m2").classList.remove("open");
    document.getElementById("n-m3").classList.add("open");
    document.getElementById("n-m4").classList.remove("open");
}
function oop4(){
    document.getElementById("n-m1").classList.remove("open");
    document.getElementById("n-m2").classList.remove("open");
    document.getElementById("n-m3").classList.remove("open");
    document.getElementById("n-m4").classList.add("open");
}

function M_CLOSE(){
    document.getElementById("n-m1").classList.remove("open");
    document.getElementById("n-m2").classList.remove("open");
    document.getElementById("n-m3").classList.remove("open");
    document.getElementById("n-m4").classList.remove("open");
}