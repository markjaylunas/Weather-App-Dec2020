
const requestLoc = async () => {
	const locationAPI= `http://api.ipstack.com/49.149.136.163?access_key=3bfeaa9994ce414ef8f37bcedc18e36d`
    const response = await fetch(locationAPI);
    const data = await response.json();
	
	const locDOM = document.querySelector('.currLoc')
	locDOM.textContent= `${data.city}, ${data.country_code}`
}