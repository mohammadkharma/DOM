// Asynchronous JavaScript:
// =======================


// PS: For less confusion in the console, fire one function at a time and comment the others.

// Explaining Async JS:
// ____________________


// JS is a synchronous language, which means that it executes one statement at one, and one after the other from up to down.

// Asynchronous JS is to start a function now and finish it later and receive the signal or the result when it's finished.
// Some statements takes a few seconds to send us results back like requesting data from an API.
// Async functions is to assign a callback function to the statement(function) that send us the results when it's finished.
// Async functions allow the rest of the code to continue executing, without waiting the next statement to finish.

// Async func example:
// -------------------

console.log(1);
console.log(2);

// setTimeout func is an async func that takes a 2 par: (callback func, time to execute)

setTimeout(() => {
    console.log('callback func fired');
}, 2000);

console.log(3);
console.log(4);
// The outcome is: 1, 2, 3, 4, callback func fired

// setTimeout func fired after 2 sec.
// Since setTimeout is an async func it's executed after the other statements that takes less than 2 sec, which put at the end of this code.


// ============================================================================================================ //






// JSON (JavaScript Oriented Nation) format:
// _________________________________________

// JSON files looks like an Array with many Objects, but it is a String, since the data can be transformed only in text form.
// The JSON syntax is same as an Array of Objects: [ {}, {}, {}, ... ]
// The Objects keys and the string values should be inside double quotes: {"name": "Rocky", "job": "fighter", "age": 33} 
// JSON.parse() method convert the file into an Array of Objects, then the Array methods can be applied to it.
// The JSON file extension: file.json


// ============================================================================================================ //






// Requesting an API endpoint: (Network request)
// _____________________________________________


// There are two ways of requesting an API endpoint
// 1st way: The old way by building a complete function with a callback function.
// 2nd way: The new way by Modern JS using the simple method fetch()

// The data that is being requested can be local(in a local folder) or external(in another server/database).

// Local requests:
// ---------------
// Requesting a local file/s that is stored in the same folder of the project.
// Example: asynchronous_js/main.js

// External requests (http requests):
// ----------------------------------
// The http request is requesting to get the data from some other server/database and getting a URL response that holds the data.
// http example: http//www.google.com (we requested the data(URL) of google from the server where googles data is stored).

// API endpoints:
// --------------
// The API endpoint is the response(URL) that has been received to get the data from another server/database in a Jason format.
// The received endpoints can be ran in the browser or us the code in the data.


// ============================================================================================================ //






// Requesting an API endpoint using the old way:
// _____________________________________________


// Making an actual request (explained):
// -------------------------------------

// When an endpoint is requested, the process go through 4 states after the 0 state:

// State 0: Request has been created but not opened yet.
// State 1: open() method has been called.
// open() method accept 2 parameters: (type of request, the requested endpoint)
// Par 1: There are many types of requests, 'GET' is when requesting to get a data.
// Par 2: The requested endpoint to receive the data from. 
// State 2: send() method has been called. The headers and the status property are ready.
// State 3: Downloading response text that holds data. 
// State 4: The operation is complete.


// Adding evenListener:

// Adding an evenListener with a special parameter called 'readystatechange' to track the state.
// By tracking the state, it's possible to know if the operation is complete.
// At the 4th state, the access to the data is possible if the value of status property is 200(no errors).
// Incase there's errors, the response will be also received but with error status and empty responseText. 


// Explaining the properties:

// .readyState is a request property that defines the state of the request.
// .responseText is a response property that contains the actual Jason data.
// .status is a response property that refers to the errors.
// The value of the status property can be the number 200(no err) or some other number(err type).


// Making a request (in action):
// -----------------------------

// state 0
const someRequest = new XMLHttpRequest();

// state 1
someRequest.open('GET', 'http://jsonplaceholder.typicode.com/todos/');

// state 2
someRequest.send();

// adding evenListener
someRequest.addEventListener('readystatechange', () => {
    if (someRequest.readyState === 4 && someRequest.status === 200) {
        console.log(someRequest.responseText);
    } else if (someRequest.readyState === 4) {
        console.log('could not fetch the data');
    }
});


// Wrapping the request operation:
// -------------------------------

// The previous request operation can be wrapped in one function that accepts 2 parameter: (callback, resource)
// Par 1: Incase the resource(API endpoint) shouldn't be hard coded and can be many
// Par 2: a callback function to call it when receiving the data incase of success or errors.
// This callback func accepts 2 parameters: (err, data)

// Creating the wrapper function:
// ------------------------------

const getTodos = (resource, theCallback) => {

    const someRequest = new XMLHttpRequest();

    someRequest.addEventListener('readystatechange', () => {
        if (someRequest.readyState === 4 && someRequest.status === 200) {
            const data = JSON.parse(someRequest.responseText);
            theCallback(data);
        } else if (someRequest.readyState === 4) {
            theCallback('could not fetch the data');
        }
    });

    someRequest.open('GET', resource);
    someRequest.send();

}

// Creating the callback func when calling the main func: (using a local endpoint)

getTodos('micheal.json', (err, data) => {
    console.log('The callback func is fired');
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});


// ============================================================================================================ //






// Promise:
// ________


// Promise is method that takes 2 built in automatically parameters that are a JS keywords: (resolve, reject)
// Par 1: resolve refers to the success state.
// Par 2: reject refers to the error state.

// The parameters are called in Promise as methods.
// Calling the parameters means incase of resolve(do something), and incase of reject(do something).

// Calling the function and attaching 2 methods to it: ( .then() & .catch() )
// Method 1: .then() method refers to the resolve() method.
// Method 2: .catch() method refers to the reject() method.

// Tip: When chaining methods, it's more readable to start the next method on a new line.


// Creating a simple function using Promise:
// -----------------------------------------

const getSomething = () => {
    return new Promise((resolve, reject) => {
        resolve('resolved');
        reject('rejected');
    });
}

getSomething()
    .then(data => console.log(data))
    .catch(err => console.log(err));


// Creating a request function that return a Promise and takes only one parameter: (resource)
// ------------------------------------------------------------------------------------------

const getTodos2 = resource => {

    return new Promise((resolve, reject) => {

        const someRequest = new XMLHttpRequest();

        someRequest.addEventListener('readystatechange', () => {
            if (someRequest.readyState === 4 && someRequest.status === 200) {
                const data = JSON.parse(someRequest.responseText);
                resolve(data);
            } else if (someRequest.readyState === 4) {
                reject('could not fetch the data');
            }
        });

        someRequest.open('GET', resource);
        someRequest.send();

    });
}

getTodos2('micheal.json')
    .then(data => console.log('Promise resolved', data))
    .catch(err => console.log('Promise rejected', err));


// Creating another function and call it for 3 different resources: (nesting Promise functions)
// ---------------------------------------------------------------------------------------------

// The nested Promise functions returns a Promise, therefore it should be followed by a then() method.
// The catch() method is called once to all the functions.

const getTodos3 = resource => {

    return new Promise((resolve, reject) => {

        const someRequest = new XMLHttpRequest();

        someRequest.addEventListener('readystatechange', () => {
            if (someRequest.readyState === 4 && someRequest.status === 200) {
                const data = JSON.parse(someRequest.responseText);
                resolve(data);
            } else if (someRequest.readyState === 4) {
                reject('could not fetch the data');
            }
        });

        someRequest.open('GET', resource);
        someRequest.send();

    });
}

getTodos3('micheal.json').then(data => {
    console.log('Promise of Micheal is resolved', data);
    return getTodos3('martin.json');
}).then(data => {
    console.log('Promise of Martin is resolved', data);
    return getTodos3('mira.json');
}).then(data => {
    console.log('Promise of Mira is resolved', data);
}).catch(err => console.log('Promise rejected', err));


// ============================================================================================================ //






// Requesting an API endpoint using the new way:
// _____________________________________________


// fetch() method:
// ---------------

// Modern JS created fetch() method that includes all the request operation.
// fetch() method return a Promise, therefore it should resolve or reject.
// fetch() method takes the resource(the requested endpoint) as a parameter.
// fetch() method returns an object called Response.
// The Response object contain details about the endpoint but it doesn't have the JSON data.
// The Response object has a prototype(method) called json which fetch the data.
// To return the data, the response.json() method is used.
// response.json() returns a Promise, therefore it should be followed by then() method.


// Creating a fetch() method:
// --------------------------

fetch('micheal.json').then(response => {
    console.log('micheal resolved', response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log('rejected', err);
});


// ============================================================================================================ //






// 'async' & 'await' & 'throw' keywords:
// _____________________________________


// 'async' keyword:
// ----------------

// 'async' keyword is used in the function deceleration that makes the function Asynchronous.
// A function that contains a fetch statement, it returns a Promise, therefore then() & catch() should be used. 

// Example: Creating an async func and calling it
// const someFunc = async () => {...}
// someFunc().them(...).catch(...);


// 'await' keyword:
// ----------------

// 'await' keyword is used by storing the fetch() method in a variable.
// 'await' keyword let the variable of the fetch() method to wait until it resolves, then it assigns it as its value.
// 'await' keyword is added before writing the fetch() method.

// Example: another way of using fetch without the then() method
// let response = await fetch('micheal.json');
// let data = await response.json();


// 'throw' keyword:
// ----------------

// 'throw' keyword throws an Error() object.
// The Error() object has a property called 'message' used with catch() method, it's declared in the Error('message) object

// Example:
// throw new Error('cannot fetch the data');


// Creating a async func that contains 'await' keyword:
// ----------------------------------------------------

// 'if' statement is used after declaring the response to reject if the status is not success (200).

const getTodosAsync = async () => {

    const response = await fetch('michel.json');
    if(response.status !== 200) {
        throw new Error('cannot fetch the data');
    }
    const data = await response.json();

    return data;

}

getTodosAsync()
.then(data => console.log('async func resolved', data))
.catch(err => console.log('rejected', err.message));


// ============================================================================================================ //
