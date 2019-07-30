import { quotes } from './myModule.js';

let para = document.querySelector('#para');
let btn = document.querySelector('#btn');

function callback(arr) {
    let item = arr[Math.floor(Math.random() * arr.length)];
    return item;
}

function display() {    
    
    btn.addEventListener('click', e => {
        e.preventDefault();

        para.innerHTML = callback(quotes);
    });

}

display();