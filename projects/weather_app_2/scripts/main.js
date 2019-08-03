import { getCity, getConditions, getNextDays } from './conditions.js'
import { getDate } from './date.js'
import { toggle } from './toggle.js'


// --------------------------------------------------------------------- //

const updateCity = async city => {

    const cityDetails = await getCity(city);
    const cityConditions = await getConditions(cityDetails.Key);
    const nextDays = await getNextDays(cityDetails.Key);
    console.log('cityDetails', cityDetails);
    console.log('cityConditions', cityConditions);
    console.log('nextDays', nextDays);
    return { cityDetails, cityConditions, nextDays };

}

// --------------------------------------------------------------------- //
const cityName = document.querySelector('#cityName');
const weatherText = document.querySelector('#weatherText');
const temp = document.querySelector('#temp');
const day1 = document.querySelector('#day1');
const day2 = document.querySelector('#day2');
const day3 = document.querySelector('#day3');
const day4 = document.querySelector('#day4');
const day5 = document.querySelector('#day5');
const updateUI = data => {
    const { cityDetails, cityConditions, nextDays } = data;
    cityName.innerHTML = cityDetails.EnglishName;
    weatherText.innerHTML = cityConditions.WeatherText;
    temp.innerHTML = cityConditions.Temperature.Metric.Value;

    day1.innerHTML = nextDays.DailyForecasts[0].Temperature.Maximum.Value;
    day2.innerHTML = nextDays.DailyForecasts[1].Temperature.Maximum.Value;
    day3.innerHTML = nextDays.DailyForecasts[2].Temperature.Maximum.Value;
    day4.innerHTML = nextDays.DailyForecasts[3].Temperature.Maximum.Value;
    day5.innerHTML = nextDays.DailyForecasts[4].Temperature.Maximum.Value;

}
updateCity('berlin').then(data => updateUI(data)).catch(err => console.log(err));


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
