import {getCity, getConditions, getNextDays} from './conditions.js'
import {getDate} from './date.js'
// import {toggleState} from './toggle.js'


// --------------------------------------------------------------------- //

const updateCity = async city => {

const cityDetails = await getCity(city);
const cityConditions = await getConditions(cityDetails.Key);
const nextDays = await getNextDays(cityDetails.Key);

return {cityDetails, cityConditions, nextDays};

}

// updateCity('berlin');
let p = document.querySelector('.text');
getDate(p);