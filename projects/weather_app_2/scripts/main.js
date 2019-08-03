import {getCity, getConditions, getNextDays} from './conditions.js'
conditionsState();
import {dateState} from './date.js'
dateState();
import {toggleState} from './toggle.js'
toggleState();

console.log('------ main.js is ready ------');


const updateCity = async city => {

const cityDetails = await getCity(city);
const cityConditions = await getConditions(cityDetails.Key);
const nextDays = await getNextDays(cityDetails.Key);
return {cityDetails, cityConditions, nextDays};
}

updateCity('berlin');