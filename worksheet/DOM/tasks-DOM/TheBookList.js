// DOM Tasks
// ========== //

// The Book List
const books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
    },
    {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
    }
];

let ul = document.createElement("UL");
document.body.appendChild(ul);

let a = document.createElement('A');
a.setAttribute('href', 'https://www.google.com');


let imgLink = document.createElement('IMG')
imgLink.setAttribute('src', 'happy.png');
imgLink.style.width = '20px';
imgLink.style.height = '20px';

a.appendChild(imgLink);


books.forEach(book => {

    // let a = document.createElement('A');
    let li = document.createElement("LI");
    li.innerText = `Book: ${book.title}, by: ${book.author}.`;

    if (book.alreadyRead) {
        li.style.color = 'green';
        ul.appendChild(li);
        li.appendChild(a);
    } else if (!book.alreadyRead) {
        li.style.textDecoration = 'line-through';
        ul.appendChild(li);
        li.appendChild(a);
    }
});

