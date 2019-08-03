import {conditionsState} from './conditions.js'
conditionsState();
import {dateState} from './date.js'
dateState();
import {toggleState} from './toggle.js'
toggleState();

console.log('main.js is ready');
// ------------------------------------------------------- //

const mainKey = "L6TYjZMGAbuxAAvUPFXzRoPiZZKq7ZEt";

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


const updateCity = async city => {

const cityDetails = await getCity(city);
const cityWeatherConditions = await getConditions(cityDetails.Key);

const merged = {cityDetails, cityWeatherConditions};
console.log(merged);

}

updateCity('berlin');