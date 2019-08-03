import { getCity, getConditions, getNextDays } from './conditions.js'
import { getDate } from './date.js'
import { toggle } from './toggle.js'


// --------------------------------------------------------------------- //

const updateCity = async city => {

    const cityDetails = await getCity(city);
    const cityConditions = await getConditions(cityDetails.Key);
    const nextDays = await getNextDays(cityDetails.Key);

    return { cityDetails, cityConditions, nextDays };

}
// updateCity('berlin');

// --------------------------------------------------------------------- //

const updateUI = data => {
    
}

// --------------------------------------------------------------------- //


const date = document.querySelector('#text');
getDate(date);

// --------------------------------------------------------------------- //
const toggleText = document.querySelector('#toggleText');
const toggleBtn = document.querySelector('#toggleBtn');
toggleBtn.addEventListener('click', e => {
    e.preventDefault();
    toggle(toggleText);
});

// --------------------------------------------------------------------- //
