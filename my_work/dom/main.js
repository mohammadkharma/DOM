console.log('---------- Query Selectors ----------');
//____________________________________________________//







// querySelector('') select a specific tag inside html
// only the first tag of the kind is selected by using CSS selectors
let par = document.querySelector('p');
console.log(par); // <p>this is a paragraph 1</p>

let par1 = document.querySelector('.error');
console.log(par1); // <p class="error">this is p.error</p>

//-----------------------------//

// querySelectorAll('') selects all the chosen tags inside the html and console them as a NodeList
let allPar = document.querySelectorAll('p');
console.log(allPar); // NodeList(3) [p, p, p.error]

let allError = document.querySelectorAll('.error');
console.log(allError); // NodeList(2) [p.error, div.error]

let divError = document.querySelectorAll('div.error');
console.log(divError); // NodeList [div.error]

// Query Selectors consoles NdeList

// NodeList() console the nodes (elements) in a list
// NodeList() uses square brackets like an array but it is not an array
// some array method can be used on the NodeList
console.log(allPar[1]); // <p>this is another paragraph</p>

allPar.forEach(para => {
    console.log(para);
});







//____________________________________________________//
console.log('---------- Other Selectors ----------');
//____________________________________________________//







// getElementById('') selects an element based on it's id
let tittle = document.getElementById('tittle')
console.log(tittle); //  <h2 id="tittle">this is h2.tittle</h2>

//-----------------------------//

// getElementsByClassName('') selects elements based on their class names
// the dot '.' class selector is not used 
// Other Selectors consoles as HTMLCollection

let errors1 = document.getElementsByClassName('alert');
console.log(errors1); // HTMLCollection(2) [p.alert, div.alert]

// TIP: querySelectorAll('') and getElementsByClassName('') are almost similar but not identical  
// TIP: forEach methods doesn't work on HTMLCollection

//-----------------------------//

// getElementByTagName('') selects all the tags with the chosen name
// getElementByTagName('') consoles HTMLCollection
let byType = document.getElementsByTagName('p');
console.log(byType);
console.log(byType[0]); // <p>this is a paragraph</p>







//____________________________________________________//
console.log('---------- Changing Content ----------');
//____________________________________________________//







// 'innerText' property output the content of an element, but not the hidden ones
let newPar = document.querySelector('p');
console.log(newPar); // <p>this is a paragraph</p>
console.log(newPar.innerText); // this is a paragraph

// changing and adding:
newPar.innerText = 'this is a paragraph changes by JS!';
console.log(newPar.innerText); // this is a paragraph changes by JS!

// //-----------------------------//

// Adding content to all tags from one kind using forEach():
let newAllPar = document.querySelectorAll('p');
newAllPar.forEach(para => {
    para.innerText += ' and new text'
});

// //-----------------------------//

// innerHtml property changes the html content of a tag
let contentDiv = document.querySelector('.content');
console.log(contentDiv.innerHTML); // <p>this is a paragraph inside div.content</p>
contentDiv.innerHTML = '<h2>I AM THE H2</h2>';
console.log(contentDiv.innerHTML); // <h2>I AM THE H2</h2>

let people = ['Mario', 'John', 'Eliot'];
people.forEach(person => {
    contentDiv.innerHTML += `<p>${person}</p>`;
}); // Mario John Eliot







//____________________________________________________//
console.log('---------- Getting & Setting Attributes ----------');
//____________________________________________________//







// getAttribute() get the attribute of the chosen tag
let aLink = document.querySelector('a');
console.log(aLink.getAttribute('href')); // https://www.google.com/#cns=0

//-----------------------------//

// setAttribute() update the chosen attribute
// setAttribute() accept 2 arguments, what to change and what to change it to
aLink.setAttribute('href', 'https://translate.google.de/?hl=en');
console.log(aLink.getAttribute('href')); // https://translate.google.de/?hl=en
aLink.innerText = 'google translator link';

// setAttribute() replace the new attribute with new one
// or it place it as a new attribute if it wasn't existing
aLink.setAttribute('style', 'color: green');







//____________________________________________________//
console.log('---------- Changing CSS Styles ----------');
//____________________________________________________//







// style property changes a style or add a new one without overwriting
let styleH3 = document.querySelector('h3');
console.log(styleH3.style); // CSSStyleDeclaration {...}
console.log(styleH3.style.color); // blue

// changing styles:
styleH3.style.color = 'red';
console.log(styleH3.style.color); // red

// adding new style:
styleH3.style.margin = '50px';
console.log(styleH3.style.margin); // 50px


// double words styles are used as camel case:
styleH3.style.fontSize = '30px';
console.log(styleH3.style.fontSize); // 30px

// deleting a style by setting it to an empty string:
styleH3.style.fontSize = '';







//____________________________________________________//
console.log('---------- Adding & Removing classes ----------');
//____________________________________________________//







// 'classList' property get the classes of an element
let classOf = document.querySelector('pre');
console.log(classOf.classList); // DOMTokenList ["success", value: "success"]

// classList.add() adds a new class to the chosen element
classOf.classList.add('new-class');
console.log(classOf.classList);

// classList.remove() removes a class from the chosen element
classOf.classList.remove('new-class');
console.log(classOf.classList);

// toggle('') adds a class when it is applied first time
// toggle('') removes a class when it is applied for the second time on the same class
classOf.classList.toggle('new-class'); // (adds: new-class)
classOf.classList.toggle('new-class'); // (removes: new-class)

// 'textContent' output the content inside an element, even the hidden ones
let res = document.querySelectorAll('h4');
console.log(res);

res.forEach(para => {
    if (para.textContent.includes('text1')) {
        para.classList.add('text1');
    } else if (para.textContent.includes('text2')) {
        para.classList.add('text2');
    };
});







//____________________________________________________//
console.log('---------- Parents, Children & Siblings ----------');
//____________________________________________________//








// 'children' property selects all the children of an element
// 'children' property consoles HTMLCollection
let childrenSelect = document.querySelector('article');
console.log(childrenSelect.children); // HTMLCollection(6) [p, h3, p, p, p, p]

// Array.from() converts the object from HTMLCollection to an array
// Array.from() is nondestructive method, it doesn't change the original value:
console.log(Array.from(childrenSelect.children)); // 6) [p, h3, p, p, p, p]
console.log(childrenSelect.children); // HTMLCollection(6) [p, h3, p, p, p, p]

// 'parentElement' property selects the parent node of the element
let parentSelect = document.querySelector('h5');
console.log(parentSelect.parentElement); // <article>...</article>
console.log(parentSelect.parentElement.parentElement); // <body>...</body>

// 'nextElementSibling' property selects the next element directly after the chosen one
console.log(parentSelect.nextElementSibling); // <p>this is a paragraph inside an article after h5</p>

// 'previousElementSibling' property selects the element directly before the chosen one
console.log(parentSelect.previousElementSibling); // <p>this is a paragraph inside an article before h5</p>







//____________________________________________________//
console.log('---------- Events ----------');
//____________________________________________________//







// TIP: Bubbling: the eventListeners keep rolling one by one
// the method stopPropagation is used to avoid bubbling and break out

//-----------------------------//

// TIP: Delegation: applying the eventListener to the parent element
// Delegation passes the code to the children elements, even the neww added ones

//-----------------------------//

// Event Basics:

// Events are an interaction to the user action on the web page
// examples: mouse events, keyboard events
// every Event has many properties

// there are 3 steps to work with events:
// step 1: get the element where the event should happen:

// step 2: add an EvenListener to the element:
// addEventListener() method actively listen to certain events on the element and accept 2 arguments
// argument 1: which kind event to listen (like: 'click') 
// argument 2: callback function that fires when the first argument is applied on the element

// step 3: (argument 2) write a callback function to fire when the even should happen:
// the first argument of the callback function refers to the kind of the even that has been applied

let button1 = document.querySelector('button.button1');
button1.addEventListener('click', e => {
    console.log('you clicked me'); // you clicked me
    console.log(e); // MouseEvent {...}
});

//-----------------------------//

// using forEach() method and target property
let items2 = document.querySelectorAll('ul.list2 li');
items2.forEach(item => {
    item.addEventListener('click', eventObject => {
        console.log('you clicked me'); // you clicked me
        console.log(eventObject); // MouseEvent {...}
        console.log(item); // <li>...</li>

        // **
        console.log(eventObject.target); // <li>...</li>

        // adding a style to the elements:
        eventObject.target.style.textDecoration = 'line-through';
    })
});

// ** 'target' is s properties that target the items of the element
// it is same like 'console.log(item);' but it also works without cycling through something

//-----------------------------//

// applying a style on all the elements by clicking on the button:
let list2 = document.querySelectorAll('ul.list2 li');
let button2 = document.querySelector('button.button2');
button2.addEventListener('click', () => {
    list2.forEach(item => {
        item.style.textDecoration = 'line-through';
    })
});

//-----------------------------//

// removing an element:

// example 1: removing the items by clicking on them:
let items3 = document.querySelectorAll('ul.list3 li');
items3.forEach(item => {
    item.addEventListener('click', eventObject => {
        eventObject.target.remove();
    })
});

// example 2: removing all the ul by clicking on the button:
let list3 = document.querySelector('ul.list3')
let button3 = document.querySelector('button.button3');
button3.addEventListener('click', () => {
    list3.remove();
    button3.remove();
});

//-----------------------------//

// adding an element:
let list4 = document.querySelector('ul.list4');
let button4 = document.querySelector('button.button4');
button4.addEventListener('click', () => {
    // using innerHTML property:
    // list4.innerHTML += '<li>something new</li>';

    // using textContent:
    let newLi = document.querySelector('li');
    newLi.textContent = 'something very new';

    // append() add the new element bottom:
    // list4.append(li);

    // prepend() add the new element from top:
    list4.prepend(newLi);
});

//-----------------------------//

// More Dom Events:

// 'copy' evenListener: (right_click property)
let copy = document.querySelector('.copy');
copy.addEventListener( 'copy', () => {
    console.log('OI! my content is copy-right!');
});

// 'mousemove evenListener: (where the mouse is pointing)
let box = document.querySelector('.box');
box.addEventListener('mousemove', e => {
    // console.log(e); // MouseEvent {...} (changes every time the mouse move)
    
    // 'offsetX': horizontal axes degree
    // 'offset': vertical axes degree 
    // console.log(e.offsetX, e.offsetY);

    box.textContent = `x-pos: ${e.offsetX} / y-pos: ${e.offsetY}`;
})

// 'wheel' eventListener: (for the scroll behavior)
// the scroll is related to the whole page (DOM)
// document.addEventListener('wheel', e => {
//     // 'pageX': horizontal axes degree for DOM
//     // 'pageY': vertical axes degree for DOM
//     console.log(e.pageX, e.pageY);
// });







//____________________________________________________//
console.log('---------- Building a Popup ----------');
//____________________________________________________//







let buttonPopup = document.querySelector('button.popup-button')
let popup = document.querySelector('.popup-wrapper');
let close = document.querySelector('.popup-close');

buttonPopup.addEventListener('click', () => {
    popup.style.display = 'block';
});

close.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', () => {
    popup.style.display = 'none';
})