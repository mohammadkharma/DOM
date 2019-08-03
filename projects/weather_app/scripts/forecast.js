// The Weather App: (Interacting with the APIs)
// =========================================== //


// Getting the basic key from the AccuWeather site:
// ________________________________________________

// Using AccuWeather website for the API, an app should be created  to get the basic API key that refers to the user/app.
// The basic API key should be linked with the other requests everytime.

// Storing the basic key in a variable:
// ------------------------------------

const appKey = 'uLcGCTGBk2tvfKmztREtgRCGXG1U17sG';



// ========================================================================= //



// Requesting data :
// _________________


// Two requests should be sent to receive the weather condition of a specific city. (city & weather conditions)

// Request 1: (getCity func)
// ----------

// Requesting an API for the city info, using Resource URL in 'AccuWeather/Location API/city search'.
// The received data has a property called 'Key' and has a numeric code that it refers to that city.
// (the city code will be used in request 2)

// Request one has two Query Parameters:
// Parameter 1: The basic API key that refers to the user/app.
// Parameter 2: The city (city name)



/* 1 */ const getCity = async (city) => {

    /* 2 */ const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    /* 3 */ const query = `?apikey=${appKey}&q=${city}`;

    /* 4 */ const response = await fetch(base + query);
    /* 5 */ const data = await response.json();

    console.log('THE DATA', data[0])
    return data[0];

}

// Function explained:
// -------------------

// /* 1 */: Creating an async function.

// /* 2 */: The end point for the first request.

// /* 3 */: The two query parameters of the first request end point: (apikey & city)
// The apikey is the first key requested when creating the app on AccuWeather that refers to the user/app.
// The city is taken as a parameter inside the function.
// A question mark '?' should be added before adding the queries, and an '&' should be added between them.
// Adding queries syntax: `?(1st query name)=(1st query value)&(2nd query name)=(2nd query value)`

// /* 4 */: Combing the base URL and queries, then fetching the results.

// /* 5 */: Applying json method on the data that has been received from the fetching.


// -------------------------------------------------------------------------------- //


// Request 2 : (getWeather func)
// -----------

// Requesting an API for the weather condition, using the Resource URL in the 'AccuWeather/Current conditions API'.
// Request two has two queries:
// query 1: The city code. (from the first request)
// query 2: The basic key that refers to the user/app.

const getWeather = async (cityCode) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${cityCode}?apikey=${appKey}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

}

// Function explained:
// -------------------

// Creating an async function that takes the first query (the city code from the first request) as a parameter. 
// Using same syntax(content) as the first function(getCity).



// ========================================================================= //

