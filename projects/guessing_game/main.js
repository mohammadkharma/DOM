// getting references
let input = document.getElementsByName('userInput');
let submit = document.getElementById('but');
let playAgain = document.getElementById('playAgain');
let form = document.querySelector('form');
let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let div = document.querySelector('.container');


// creating a counter for the attempts
let clickCount = 0;


// returning a random number:
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let random = arr[Math.floor(Math.random() * arr.length)];


// regular expression function
function myRegEx() {

    let value = input[0].value;
    let text;

    if (isNaN(value) || value < 1 || value > 10) {
        text = "Input not valid.<br> The input should be a <b><i>number</i></b> between <b><i>1</i></b> and <b><i>10</i></b>";
        clickCount -= 1;
    } else {
        text = '';
    }

    document.getElementById("regEx").innerHTML = text;
}


// the main function
but.addEventListener('click', e => {
    e.preventDefault();

    let value = input[0].value;
    clickCount += 1;
    myRegEx();

    if (value == random) {

        h1.innerHTML = 'SUCCESS!!!';
        h2.innerHTML = `The number is indeed ${random}.
        You got the number correctly after ${clickCount} attempts`
        form.style.display = 'none';
        playAgain.style.display = 'block';
        div.style.color = 'green';

    } else {

        h1.innerHTML = 'WRONG!!!';
        h2.innerHTML = `Try Again! You have ${3 - clickCount} attempts left.`
        div.style.color = 'rgb(255, 97, 6)';

        if (clickCount == 3) {

            h1.innerHTML = 'Sorry, human';
            h2.innerHTML = `You couldn't guess the number in less the 3 times. The number was indeed ${random}.`
            form.style.display = 'none';
            playAgain.style.display = 'block';
            div.style.color = 'red';
            clickCount = 0;

        }
    }

    form.reset();
});


// Play Again button
playAgain.addEventListener('click', e => {
    e.preventDefault();
    location.reload();
});



