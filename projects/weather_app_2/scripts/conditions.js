const mainKey = "rBUfGvODV6xxCcJ29sjn5bzCcGk98fWi";

const getCity = async cityName => {

    const mainURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${mainKey}&q=${cityName}`;

    const response = await fetch(mainURL+query);
    const data = await response.json();

    console.log('getCity()', data[0]);
    return data[0];
}

const getConditions = async (cityKey) => {


    const mainURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${cityKey}?apikey=${mainKey}`;

    const response = await fetch(mainURL+query);
    const data = await response.json();

    console.log('getConditions()', data[0]);
    return data[0];
}

const getNextDays = async cityKey => {
    const mainURL = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
    const query = `${cityKey}?apikey=${mainKey}&details=true`;

    const response = await fetch(mainURL+query);
    const data = await response.json();

    console.log('getNextDays()', data);
    return data;
}


export {getCity, getConditions, getNextDays};