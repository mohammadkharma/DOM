// 1 
let container = document.getElementById('container');
console.log(container);

// 2
let container1 = document.querySelector('#container');
console.log(container1);

// 3
let second = document.querySelectorAll('.second');
console.log(second);

// 4
let third = document.querySelector('ol .third');
console.log(third);

// 5
container.innerHTML += 'Hello';

// 6
let main = document.querySelector('.footer');
main.classList.add('main');
console.log(main.classList);

// 7
main.classList.remove('main');
console.log(main.classList);

// 8
let newLi = document.createElement('LI');

// 9
newLi.innerHTML = 'four';

// 10
let uList = document.querySelector('ul');
uList.append(newLi);

// 11
let oList = document.querySelectorAll('ol li');
oList.forEach(item => {
    item.style.background = 'green';
});

// 12
document.body.removeChild(main);
