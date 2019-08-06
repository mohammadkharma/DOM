import { getCity, getConditions, getNextDays } from './conditions.js'
import { getDate } from './date.js'
import { toggle } from './toggle.js'

import isNight from './images/isNight.jpg'
import isDay from './images/isDay.png'
// import icons from './media/icons'
import i7 from './icons/7.svg'
// import i2 from './media/icons/7.svg'
// import i3 from './media/icons/7.svg'
// import i4 from './media/icons/7.svg'
// import i5 from './media/icons/7.svg'
// import i6 from './media/icons/7.svg'
// import i7 from './media/icons/7.svg'
// import i8 from './media/icons/7.svg'
// import i9 from './media/icons/7.svg'
// import i10 from './media/icons/7.svg'
// import i11 from './media/icons/7.svg'
// import i12 from './media/icons/7.svg'
// import i13 from './media/icons/7.svg'
// import i14 from './media/icons/7.svg'
// import i15 from './media/icons/7.svg'
// import i16 from './media/icons/7.svg'
// import i17 from './media/icons/7.svg'
// import i18 from './media/icons/7.svg'
// import i19 from './media/icons/7.svg'
// import i20 from './media/icons/7.svg'
// import i21 from './media/icons/7.svg'
// import i22 from './media/icons/7.svg'
// import i23 from './media/icons/7.svg'
// import i24 from './media/icons/7.svg'
// import i25 from './media/icons/7.svg'
// import i26 from './media/icons/7.svg'
// import i27 from './media/icons/7.svg'
// import i28 from './media/icons/7.svg'
// import i29 from './media/icons/7.svg'
// import i30 from './media/icons/7.svg'
// import i31 from './media/icons/7.svg'
// import i32 from './media/icons/7.svg'
// import i33 from './media/icons/7.svg'
// import i34 from './media/icons/7.svg'
// import i35 from './media/icons/7.svg'
// import i36 from './media/icons/7.svg'
// import i37 from './media/icons/7.svg'
// import i38 from './media/icons/7.svg'
// import i39 from './media/icons/7.svg'
// import i40 from './media/icons/7.svg'
// import i41 from './media/icons/7.svg'
// import i42 from './media/icons/7.svg'
// import i43 from './media/icons/7.svg'
// import i44 from './media/icons/7.svg'

// const iconsArr = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10,
//   i11, i12, i13, i14, i15, i16, i17, i18, i19, i20,
//   i21, i22, i23, i24, i25, i26, i27, i28, i29, i30,
//   i31, i32, i33, i34, i35, i36, i37, i38, i39, i40,
//   i41, i42, i43, i44];
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

  icon.setAttribute('src', i7);
  icon.style.width = '4vw';

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
