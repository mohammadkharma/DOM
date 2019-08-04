import { getCity, getConditions, getNextDays } from './conditions.js'
import { getDate } from './date.js'
import { toggle } from './toggle.js'

const cityName = document.querySelector('#cityName');
const weatherText = document.querySelector('#weatherText');
const toggleBtn = document.querySelector('#toggleBtn');
const wind = document.querySelector('#wind');
const humidity = document.querySelector('#humidity');
const content = document.querySelector('.content');
const icon = document.querySelector('.icon');
const date = document.querySelector('#date');
const form = document.querySelector('form');
const tempC = document.querySelector('#tempC');
const tempF = document.querySelector('#tempF');
const comingFive = document.querySelector('#comingFive');

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

const updateUI = data => {

    const { cityDetails, cityConditions, nextDays } = data;
    cityName.innerHTML = `${cityDetails.EnglishName}, ${cityDetails.Country.ID}`;
    weatherText.innerHTML = cityConditions.WeatherText;
    tempC.innerHTML = `${cityConditions.Temperature.Metric.Value} &deg;C`;
    tempF.innerHTML = `${cityConditions.Temperature.Imperial.Value} &deg;F`;
    wind.innerHTML = `Wind: ${cityConditions.Wind.Speed.Imperial.Value} m/h`;
    humidity.innerHTML = `Humidity: ${cityConditions.RelativeHumidity} %`;

    getDate(date, cityConditions);

    toggleBtn.addEventListener('click', e => {
        e.preventDefault();
        toggle(tempC, tempF, toggleBtn);
    });

    const timeSrc = cityConditions.IsDayTime ? 'media/images/isDay.png' : 'media/images/isNight.jpg';
    content.style.backgroundImage = `url(${timeSrc})`;

    const iconSrc = `media/icons/${cityConditions.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    nextDays.DailyForecasts.forEach(day => {
        let html = `
        <div style="margin-left: 15px;">
        <p>${new Date(day.Date).getDate()}/${new Date(day.Date).getMonth() + 1}</p>
        <p> ${day.Temperature.Maximum.Value} &deg;F</p>
        </div>
        `;
        comingFive.innerHTML += html;
    });

}

// --------------------------------------------------------------------- //

form.addEventListener('submit', e => {
    e.preventDefault();
    let city = form.city.value.trim()
    form.reset();

    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

    localStorage.setItem('city', city);
});

if (localStorage.getItem('city')) {
    updateCity(localStorage.getItem('city'))
      .then(data => updateUI(data))
      .catch(error => console.log(error));
  }

// --------------------------------------------------------------------- //
