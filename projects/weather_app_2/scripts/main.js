import {conditionsState} from './conditions.js'
conditionsState();
import {dateState} from './date.js'
dateState();
import {toggleState} from './toggle.js'
toggleState();

console.log('main.js is ready');
// ------------------------------------------------------- //

const mainKey = "rBUfGvODV6xxCcJ29sjn5bzCcGk98fWi";

const getCity = async cityName => {

    const mainURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${mainKey}&q=${cityName}`;

    const response = await fetch(mainURL+query);
    const data = await response.json();

    console.log('getCity', data[0]);
    return data[0];
}

getCity('berlin');

const getConditions = async (cityKey) => {


    const mainURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${cityKey}?apikey=${mainKey}`;

    const response = await fetch(mainURL+query);
    const data = await response.json();

    console.log('getConditions', data[0]);
    return data[0];
}

const getNextDays = async cityKey => {
    const mainURL = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';
    const query = `${cityKey}?apikey=${mainKey}&details=true`;

    const response = await fetch(mainURL+query);
    const data = await response.json();

    console.log('getNextDays', data.DailyForecasts);
    return data;
}


const updateCity = async city => {

const cityDetails = await getCity(city);
const cityConditions = await getConditions(cityDetails.Key);
const nextDays = await getNextDays(cityDetails.Key);
const detailsAndConditions = {cityDetails, cityConditions, };

}

updateCity('berlin');