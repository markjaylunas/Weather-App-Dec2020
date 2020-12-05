const containerDOM = document.querySelector('.container');

const searchForm = document.querySelector('.get-location');
const cityValue = document.querySelector('.get-location input')

const currTemp = document.querySelector('.weather .temperature')
const currLoc = document.querySelector('.weather .location')
const currCon = document.querySelector('.weather .condition')
const currIcon = document.querySelector('.weather .fas')
const condSugg = document.querySelector('.conditionSugg')

const detailsTempHL = document.querySelector('.details #tempHL')
const detailsFeelsLike = document.querySelector('.details #feelsLike')
const detailsChance = document.querySelector('.details #chance')
const detailsWindSpeed = document.querySelector('.details #windSpeed')




const toCelcius = (kelvin) => {
    celcius = Math.round(kelvin - 273.15);
    return celcius;
}

const conditionSugg = {
	'clearsky' : 'A happy day to start a day. Weather say, go outside and have fun.',
	'fewclouds' : 'Be safe few clouds can suddenly change the weather. Dont forget your umbrella when you go outside!',
	'scatteredclouds' : 'None',
	'brokenclouds' : 'None',
	'showerrain' : 'None',
	'rain' : 'Bring your umbrella and raincoat.',
	'thunderstorm' : 'When thunder roars, go indoors.',
	'snow' : 'Wear your Beanie, and Sweaters. Don\'t go outside If unnecessary.',
	'mist' : 'Too cold outside, bring some winter suit!'
}

const postCurrWeather=(data)=>{
	//Current Weather
	currTemp.textContent = `${toCelcius(data.main.temp)}°C`
	currLoc.textContent = `${data.name}, ${data.sys.country}`
	currCon.textContent = `${data.weather[0].description}`
	currIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
	//condSugg.textContent = getConSugg(data.weather[0].icon)
	
	//Current Weather DetailsChance
	detailsTempHL.textContent = `↑${toCelcius(data.main.temp_max)}°   ↓${toCelcius(data.main.temp_min)}°`
	detailsFeelsLike.textContent = `${toCelcius(data.main.feels_like)}°`
	//detailsChance
	detailsWindSpeed.textContent = `${Math.floor(data.wind.speed*3.6)} km/h`
	
}



searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const citySearched = cityValue.value.trim();
    searchForm.reset();

    requestCity(citySearched)
        .then((data) => {
            postCurrWeather(data);
        })
        .catch((error) => { console.log(error) })
})
	
async function init(){
	await requestLoc()
	const pos = currLoc.textContent
	requestCity(pos)
        .then((data) => {
            postCurrWeather(data);
        })
        .catch((error) => { console.log(error) })
}

init()