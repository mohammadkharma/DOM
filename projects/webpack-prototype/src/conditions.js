const mainKey = "JSN7z5WidbqTpBjjAYhRRo2NQXyvlNGl";

const getCity = async cityName => {

    const mainURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${mainKey}&q=${cityName}`;

    const response = await fetch(mainURL+query);
    const data = await response.json();

    return data[0];
}

// --------------------------------------------------------------------- //

const getConditions = async (cityKey) => {

    const mainURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${cityKey}?details=true&apikey=${mainKey}`;

    const response = await fetch(mainURL+query);
    const data = await response.json();

    return data[0];
}

// --------------------------------------------------------------------- //

const getNextDays = async cityKey => {
    const mainURL = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
    const query = `${cityKey}?details=true&apikey=${mainKey}`;

    const response = await fetch(mainURL+query);
    const data = await response.json();

    return data;
}

// --------------------------------------------------------------------- //

export {getCity, getConditions, getNextDays};