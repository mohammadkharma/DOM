// progress bar
window.onscroll = function () { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.querySelector("#myBar").style.width = scrolled + "%";
}

// ----------------------------------------------------------------------- //

// type effect
var i = 0;
var txt = 'Mohammad Kharma';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// ----------------------------------------------------------------------- //

