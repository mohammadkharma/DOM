// Using class constructor:
// ========================



// const cityForm = document.querySelector('form');
// const card = document.querySelector('.card');
// const details = document.querySelector('.details');
// const time = document.querySelector('img.time');
// const icon = document.querySelector('.icon img');

// class Forecast {

//     constructor() {
//         this, key = '1ZjAmnqeJAB2LPsmXDt4MlrMNX0yKLGv';
//         this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//         this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
//     }

//     async updateCity(city) {
//         const cityDetails = await this.getCity(city);
//         const weather = await this.getWeather(cityDetails.Key); // *1
//         return { cityDetails, weather }
//     }

//     async getCity(city) {
//         const query = `?apikey=${this.key}&q=${city}`;
//         const response = await fetch(this.cityURI + query);
//         const data = await response.json();
//         return data[0];
//     }

//     async getWeather(cityCode) {
//         const query = `${cityCode}?apikey=${this.key}`;
//         const response = await fetch(this.weatherURI + query);
//         const data = await response.json();
//         return data[0];
//     }

// }

// let forecast = new Forecast();



// const updateUI = data => {

//     console.log(data);

//     const { cityDetails, weather } = data; 

//     details.innerHTML = `
//     <h5 class="my-3">${cityDetails.EnglishName}</h5>
//             <div class="my-3"> ${weather.WeatherText} </div>
//             <div class="display-4 my-4">
//               <span> ${weather.Temperature.Metric.Value} </span>
//               <span>&deg;C</span>
//             </div>
//     `; 

//     let timeImg = weather.ISDayTime ? '/images/day.svg' : '/images/night.svg';
//     time.setAttribute('src', timeImg); 

//     const weatherIcon = `/icons/${weather.WeatherIcon}.svg`;
//     icon.setAttribute('src', weatherIcon); 

//     if (card.classList.contains('d-none')) {
//         card.classList.remove('d-none');
//     } 

// }


// cityForm.addEventListener('submit', e => {

//     e.preventDefault(); 

//     const city = cityForm.city.value.trim(); 
//     cityForm.reset(); 

//     forecast.updateCity(city)
//         .then(data => updateUI(data))
//         .catch(err => console.log(err)); 

// });
