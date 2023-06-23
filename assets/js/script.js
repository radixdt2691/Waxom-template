window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var nav = document.getElementById("navbar");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky","shadow");
        nav.classList.add("justify-start");
        
    } else {
        header.classList.remove("sticky","shadow");
        nav.classList.remove("justify-start");
    }
    }
    