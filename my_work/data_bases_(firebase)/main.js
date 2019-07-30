const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');

// Interacting with the UI:
// ------------------------

// creating html snippet to output the data of each document to the browser:
// .toDate() converts the time from m.s. to a date form:

const addCar = (car, id) => {
    let time = car.sold.toDate();
    let html = `
    <li data-id="${id}" class="p-1">
    <div>${car.kind}</div>
    <div>sold at:<br>${time}</div>
    <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>
    `;
    list.innerHTML += html;
}


// deleting func that delete data from the UI:

const deleteCar = id => {
    let cars = document.querySelectorAll('li');
    cars.forEach(car => {
        if (car.getAttribute('data-id') === id) {
            car.remove();
        }
    });
}

// unsubscribe from database changes:

button.addEventListener('click', e => {
    e.preventDefault();
    unSub();
    console.log('unsubscribed from collection changes')
});


// ---------------------------------------------------------------------------------- //


// Interacting with data:
// ----------------------

// getting data:

// updating the UI using the real time listener .onSnapshot:
// adding or removing data from the UI according to the change type on real time:
// when a real time function is stored in a variable, calling the variable will stop .onSnapshot() from listening:

const unSub = db.collection('cars').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        let doc = change.doc;
        if (change.type === 'added') {
            addCar(doc.data(), doc.id);
        } else if (change.type === 'removed') {
            deleteCar(doc.id);
        }
    });
});


// adding data:

// firebase has its own format of date:
// To convert a normal date to a firebase date: firebase.firestore.Timestamp.fromDate(some date).

form.addEventListener('submit', e => {
    e.preventDefault();
    let now = new Date();
    let car = {
        kind: form.car.value,
        sold: firebase.firestore.Timestamp.fromDate(now)
    }
    db.collection('cars').add(car).then(() => {
        console.log('car sold');
    }).catch(error => {
        console.log(error);
    });
});


// deleting data:

list.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.tagName === 'BUTTON') {
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('cars').doc(id).delete().then(() => {
            console.log('data deleted');
        });
    }
});

