let promise = new Promise(function (resolve, reject) {
    resolve(
        setTimeout(function () {
            console.log('Job is done');
        }, 1000)
    )
})

let promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('oops')), 2000)
});

let promise3 = new Promise(function (resolve, reject) {
    resolve(console.log('Job Done!'));

    reject(new Error('Job Not Done'));
});

// --------------------------------------------------------------------------------- //

// Consuming Code

// .then
let promise4 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('Job Done');
    }, 4000);
});

promise4.then(result => console.log(result)).catch(error => console.log(error));

// --------------------------------------------------------------------------------- //

// .finally
new Promise((resolve, reject) => {
    setTimeout(() => resolve('result'), 2000)
})
    .finally(() => console.log('Promise ready'))
    .then(() => console.log(result))
    .catch(() => console.log(error))

// --------------------------------------------------------------------------------- //

// async

async function myFunc() {
    let myVar = "Hello";
}

myFunc().then(console.log("async promise"));

// --------------------------------------------------------------------------------- //

// await

function resolveIn2Second() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved')
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: 'resolved'
}