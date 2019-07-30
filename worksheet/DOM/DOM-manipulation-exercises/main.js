// 1. Calculation
// Create a program to calculate multiplication and division of two numbers (input from user).
// Use the DoM so that users can input two numbers and click "multiply" and "divide" buttons.
// Users should also be able to view the result in the browser. 

const input1 = document.querySelector('.firstNum');
const input2 = document.querySelector('.secondNum');
const button1 = document.querySelector('.multiply');
const button2 = document.querySelector('.divide');
let result = document.querySelector('.result');

button1.addEventListener('click', e => {
    e.preventDefault();
    const sum = input1.value * input2.value;
    result.innerHTML = `Results: ${sum}`;
});

button2.addEventListener('click', e => {
    e.preventDefault();
    const sum = input1.value / input2.value;
    result.innerHTML = `Results: ${sum}`;
});

// ============================================================================================= //

// 2. Check-boxes
// Create three options of check-boxes (three colors/fruit etc options) using the DoM.
// Then use a switch statement to give an alert depending on which option the user selects. 
// Example: You clicked "strawberry!" Yum!

const apple = document.querySelector('.apple');
const banana = document.querySelector('.banana');
const orange = document.querySelector('.orange');

apple.addEventListener('click', e => {
    alert(`Apple is yummy!`)
});

banana.addEventListener('click', e => {
    alert(`Banana is yummy!`)
});

orange.addEventListener('click', e => {
    alert(`Orange is yummy!`)
});


// ============================================================================================= //


// 3. Volume
// Create a program to calculate the volume of a sphere.
// The user input should include "radius" and a "calculate" button.
// The user should also see the result of the sphere volume. 

const input3 = document.querySelector('.radius');
const calcButton = document.querySelector('.calculate');
const result1 = document.querySelector('.result1')

calcButton.addEventListener('click', e => {
    e.preventDefault();

    const sum = 4 * Math.PI * (input3.value * input3.value);
    result1.innerHTML = `The volume is: ${sum}`;
});


// ============================================================================================= //


// 4. Height & Width
//  Create a program to get the width and height of the window (any time the window is resized).
// Show the result on the browser. 

function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "Width: " + x + ", Height: " + y;
    document.getElementById("size").innerHTML = coords;
  }

// ============================================================================================= //


// Bonus:
// Create a program to highlight the bold words of the following paragraph when the user mouses over the link.

// [When the user mouses over THIS link, the bold words of the following paragraph will be highlighted]

// These **exercises** are all **aimed** at making you **familiar** with the **document object model** manipulation using **JavaScript**!

//First create a list of all bold items 
let bold_Items;
window.onload = getBold_items();
 
// Collect all <strong> tags
function getBold_items() 
{
  bold_Items = document.getElementsByTagName('strong'); 
}
// iterate all bold tags and change color  
function highlight() 
{
   for (let i=0; i<bold_Items.length; i++)
   {                                                    
    bold_Items[i].style.color = "green";
    }
}

// On mouse out highlighted words become black
function return_normal()
{
  for (let i=0; i<bold_Items.length; i++) 
  {
       bold_Items[i].style.color = "black";
  }
}


// ============================================================================================= //
