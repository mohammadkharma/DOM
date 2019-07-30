// DOM Tasks
// ========= //

// About Me

// 1
document.body.style.fontFamily = "Arial, sans-serif";

// 2
let link1 = document.querySelectorAll('li')[0];
let link2 = document.querySelectorAll('li')[1];
let link3 = document.querySelectorAll('li')[2];

let span1 = document.querySelector('#nickname');
let span2 = document.querySelector('#favorites');
let span3 = document.querySelector('#hometown');

let nick = document.createTextNode('Lio');
let fav = document.createTextNode('Soccer');
let hom = document.createTextNode('NYC');

link1.replaceChild(nick, span1);
link2.replaceChild(fav, span2)
link3.replaceChild(hom, span3)

// 3 & 4
let links = document.querySelectorAll('li');
links.forEach(e => {
    e.classList.add('list-item');
    e.style.color = 'red';
});

// 5
let image = document.createElement('IMG');
image.setAttribute('src', 'happy.png');
document.body.append(image);