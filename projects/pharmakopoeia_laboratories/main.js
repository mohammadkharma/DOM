// top nav responsive
function myFunction() {
    var x = document.querySelector("#myTopNav");
    if (x.className === "topNav") {
        x.className += " responsive";
    } else {
        x.className = "topNav";
    }
}

// side nav
let body = document.querySelector('body');
let accounts = document.querySelector('.icon-bar');
let nav = document.querySelector('#mySideNav');
body.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        nav.style.visibility = "visible";
        accounts.style.visibility = "visible";
    } else {
        nav.style.visibility = "hidden";
        accounts.style.visibility = "hidden";
    }
}

// --------------------------------------------------------------------- //

// intro overlay
function openNav() {
    document.querySelector(".overlay").style.width = "100%";
}

function closeNav() {
    document.querySelector(".overlay").style.width = "0%";
}

// --------------------------------------------------------------------- //

// bio overlay  
function openNav1() {
    document.querySelector(".overlay1").style.width = "100%";
}

function closeNav1() {
    document.querySelector(".overlay1").style.width = "0%";
}

// --------------------------------------------------------------------- //

// icc overlay  
function openNav2() {
    document.querySelector(".overlay2").style.width = "100%";
}

function closeNav2() {
    document.querySelector(".overlay2").style.width = "0%";
}