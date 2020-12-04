const key = '88b4a5259f7b4415354f59acf657c75c';


const requestCity = async (city) => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;
    const response = await fetch(baseURL + query);
    const data = await response.json();
	console.log(data)
    return data;
}
