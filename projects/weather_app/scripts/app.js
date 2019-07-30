// The Weather App: (DOM manipulation and events handling)
// ====================================================== //


// Getting references:
// ___________________

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


// -------------------------------------------------------------------------------------------------------- //


// Creating an async callback function that holds the two functions (getCity & getWeather) and returns a promise.
// ______________________________________________________________________________________________________________

// This function(updateCity) is called in the 'submit evenListener' and applied on the input value (the city):
// The input value (the city) is passed as a parameter:

const updateCity = async (city) => {

    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key); // *1

    return { cityDetails, weather } // *2

}

// Function explained:
// -------------------

// *1
// Storing the getWeather func in a variable:

// *2
// Returning an object that contains the city details and the weather conditions: 
// Tip: {cityDetails, weather} is same as {cityDetails: cityDetails, weather: weather}.
// This is called Shorthanded Object Nation.
// Definition: When the key and the value of an object are the same, they can be written once.


// -------------------------------------------------------------------------------------------------------- //


// Creating a function that outputs the returned data from the updateCity func:
// ____________________________________________________________________________

const updateUI = data => {

    console.log(data);

    const { cityDetails, weather } = data; // *1

    details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
            <div class="my-3"> ${weather.WeatherText} </div>
            <div class="display-4 my-4">
              <span> ${weather.Temperature.Metric.Value} </span>
              <span>&deg;C</span>
            </div>
    `; // *2

    let timeImg = weather.ISDayTime ? '/images/day.svg' : '/images/night.svg';
    time.setAttribute('src', timeImg); // *3

    const weatherIcon = `/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', weatherIcon); // *4

    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    } // *5

}

// Function explained:
// -------------------

// *1
// Storing the 2 object data (city & weather) in variables:
// Tip: {cityDetails, weather}=data is same as:
// cityDetails=data.cityDetails / weather=data.weather
// This shorthand is called Destructuring in JS.

// *2
// Updating the 'details' section:
// .EnglishName is a property that holds the english name of the city.
// .WeatherText is a property that holds the weather status (cloudy for example).
// .Temperature.Metric.Value is a property that holds the temperature.

// *3
// Updating the day/night image:
// '.IsDayTime' is a property that has 2 values: true(if it's day time) and false(if its night time).

// *4
// Updating the icons:

// *5
// Removing the 'd-none' class from the 'card' div.
// It will be visible when calling this function and not on the reset.


// -------------------------------------------------------------------------------------------------------- //


// Adding a submit event to the input field:
// ________________________________________

cityForm.addEventListener('submit', e => {

    e.preventDefault(); // *1

    const city = cityForm.city.value.trim(); // *2
    cityForm.reset(); // *3

    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err)); // *4

});

// eventListener explained:
// ------------------------

// *1
// Preventing default action.

// *2
// Getting a reference to the input value (city).
// '.city' refers to the input with the name 'city'.

// *3
// reset() clear up the form field (reset it).

// *4
// Calling the updateCity func that holds the 2 functions (getCity & getWeather).
// Applying updateCity on the input value (city).
// Inserting the updateUI func to output the resolved results in the browser.


// -------------------------------------------------------------------------------------------------------- //
