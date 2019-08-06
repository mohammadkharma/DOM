import { getCity, getConditions, getNextDays } from './conditions.js'
import { getDate } from './date.js'
import { toggle } from './toggle.js'

import i1 from './icons/1.svg'
import i2 from './icons/2.svg'
import i3 from './icons/3.svg'
import i4 from './icons/4.svg'
import i5 from './icons/5.svg'
import i6 from './icons/6.svg'
import i7 from './icons/7.svg'
import i8 from './icons/8.svg'
import i11 from './icons/11.svg'
import i12 from './icons/12.svg'
import i13 from './icons/13.svg'
import i14 from './icons/14.svg'
import i15 from './icons/15.svg'
import i16 from './icons/16.svg'
import i17 from './icons/17.svg'
import i18 from './icons/18.svg'
import i19 from './icons/19.svg'
import i20 from './icons/20.svg'
import i21 from './icons/21.svg'
import i22 from './icons/22.svg'
import i23 from './icons/23.svg'
import i24 from './icons/24.svg'
import i25 from './icons/25.svg'
import i26 from './icons/26.svg'
import i27 from './icons/27.svg'
import i30 from './icons/30.svg'
import i31 from './icons/31.svg'
import i32 from './icons/32.svg'
import i33 from './icons/33.svg'
import i34 from './icons/34.svg'
import i35 from './icons/35.svg'
import i36 from './icons/36.svg'
import i37 from './icons/37.svg'
import i38 from './icons/38.svg'
import i39 from './icons/39.svg'
import i40 from './icons/40.svg'
import i41 from './icons/41.svg'
import i42 from './icons/42.svg'
import i43 from './icons/43.svg'
import i44 from './icons/44.svg'

import isNight from './images/isNight.jpg'
import isDay from './images/isDay.png'
import table from './images/table.jpeg'

const body =document.querySelector('body');
body.style.backgroundImage = `url(${table})`;
  
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
const day1min = document.querySelector('#day1min');
const day1max = document.querySelector('#day1max');
const day2min = document.querySelector('#day2min')
const day2max = document.querySelector('#day2max')
const day3min = document.querySelector('#day3min')
const day3max = document.querySelector('#day3max')
const day4min = document.querySelector('#day4min')
const day4max = document.querySelector('#day4max')
const day5min = document.querySelector('#day5min')
const day5max = document.querySelector('#day5max')
const date1 = document.querySelector('#date1');
const date2 = document.querySelector('#date2');
const date3 = document.querySelector('#date3');
const date4 = document.querySelector('#date4');
const date5 = document.querySelector('#date5');

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

  const timeSrc = cityConditions.IsDayTime ? isDay : isNight;
  content.style.backgroundImage = `url(${timeSrc})`;

icon.style.width = '3vw';

switch (cityConditions.WeatherIcon) {
  case 1:
    icon.setAttribute('src', i1);
    break;
    case 2:
    icon.setAttribute('src', i2);
    break;
    case 3:
    icon.setAttribute('src', i3);
    break;
    case 4:
    icon.setAttribute('src', i4);
    break;
    case 5:
    icon.setAttribute('src', i5);
    break;
    case 6:
    icon.setAttribute('src', i6);
    break;
    case 7:
    icon.setAttribute('src', i7);
    break;
    case 8, 9, 10:
    icon.setAttribute('src', i8);
    break;
    case 11:
    icon.setAttribute('src', i11);
    break;
    case 12:
    icon.setAttribute('src', i12);
    break;
    case 13:
    icon.setAttribute('src', i13);
    break;
    case 14:
    icon.setAttribute('src', i14);
    break;
    case 15:
    icon.setAttribute('src', i15);
    break;
    case 16:
    icon.setAttribute('src', i16);
    break;
    case 17:
    icon.setAttribute('src', i17);
    break;
    case 18:
    icon.setAttribute('src', i18);
    break;
    case 19:
    icon.setAttribute('src', i19);
    break;
    case 20:
    icon.setAttribute('src', i20);
    break;
    case 21:
    icon.setAttribute('src', i21);
    break;
    case 22:
    icon.setAttribute('src', i22);
    break;
    case 23:
    icon.setAttribute('src', i23);
    break;
    case 24:
    icon.setAttribute('src', i24);
    break;
    case 25:
    icon.setAttribute('src', i25);
    break;
    case 26:
    icon.setAttribute('src', i26);
    break;
    case 27,28, 29:
    icon.setAttribute('src', i27);
    break;
    case 30:
    icon.setAttribute('src', i30);
    break;
    case 31:
    icon.setAttribute('src', i31);
    break;
    case 32:
    icon.setAttribute('src', i32);
    break;
    case 33:
    icon.setAttribute('src', i33);
    break;
    case 34:
    icon.setAttribute('src', i34);
    break;
    case 35:
    icon.setAttribute('src', i35);
    break;
    case 36:
    icon.setAttribute('src', i36);
    break;
    case 37:
    icon.setAttribute('src', i37);
    break;
    case 38:
    icon.setAttribute('src', i38);
    break;
    case 39:
    icon.setAttribute('src', i39);
    break;
    case 40:
    icon.setAttribute('src', i40);
    break;
    case 41:
    icon.setAttribute('src', i41);
    break;
    case 42:
    icon.setAttribute('src', i42);
    break;
    case 43:
    icon.setAttribute('src', i43);
    break;
    case 44:
    icon.setAttribute('src', i44);
    break;
    
}

  date1.innerHTML = `${new Date(nextDays.DailyForecasts[0].Date).toDateString()}`;
  day1min.innerHTML = `${nextDays.DailyForecasts[0].Temperature.Minimum.Value} &deg;F`;
  day1max.innerHTML = `${nextDays.DailyForecasts[0].Temperature.Maximum.Value} &deg;F`;
  date2.innerHTML = `${new Date(nextDays.DailyForecasts[1].Date).toDateString()}`;
  day2min.innerHTML = `${nextDays.DailyForecasts[1].Temperature.Minimum.Value} &deg;F`;
  day2max.innerHTML = `${nextDays.DailyForecasts[1].Temperature.Maximum.Value} &deg;F`;
  date3.innerHTML = `${new Date(nextDays.DailyForecasts[2].Date).toDateString()}`;
  day3min.innerHTML = `${nextDays.DailyForecasts[2].Temperature.Minimum.Value} &deg;F`;
  day3max.innerHTML = `${nextDays.DailyForecasts[2].Temperature.Maximum.Value} &deg;F`;
  date4.innerHTML = `${new Date(nextDays.DailyForecasts[3].Date).toDateString()}`;
  day4min.innerHTML = `${nextDays.DailyForecasts[3].Temperature.Minimum.Value} &deg;F`;
  day4max.innerHTML = `${nextDays.DailyForecasts[3].Temperature.Maximum.Value} &deg;F`;
  date5.innerHTML = `${new Date(nextDays.DailyForecasts[4].Date).toDateString()}`;
  day5min.innerHTML = `${nextDays.DailyForecasts[4].Temperature.Minimum.Value} &deg;F`;
  day5max.innerHTML = `${nextDays.DailyForecasts[4].Temperature.Maximum.Value} &deg;F`;

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
