// import the convertTemp.js and getDaylight.js scripts with their default export
import convertTemp from "./convertTemp.js";
 import getDayight from "./getDayight.js"

// declare any variables needed
var goBttn =document.querySelector('#goBttn');


// create an event listener for the click of the goBttn that calls a function to fetch the weather data
// create a function that calls the function that queries the api 
// and then creates promises that will call a function to write the weather data to the HTML page        

document.getElementById("goBttn").addEventListener('click', async function(){
    let data = await getWeatherData();
    console.log(data)
    postWeatherData (data)
})
    async function getWeatherData(){
      let cityname = document.getElementById("city").value  
let data = await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=89b67869ab2a147083a528fa73134194`)
    .then (response => response.json())
    .then (data => {
    console.log(data)
        return data
})

.catch (err => alert ("Wrong name"))
return data
}



// use an asynchronous call to fetches the current weather for the specified city, awaits it, 
// and returns the resulting data

// create a function that writes the temperature (using local units), humidity, and conditions
// this function should also change the background color of the weather app to blue during the daylight
// hours at the specified city


function postWeatherData(data){
let temperature =document.getElementById("tempData")
let temp = convertTemp(data.sys.country, data.main.temp)
temperature.textContent=temp
let humidity = document.getElementById("humidData")
humidity.textContent=data.main.humidity 
let conditions = document.getElementById("conditionsData")
conditions.textContent=data.weather[0].description 


let wrapper =document.getElementsByClassName("weatherWrapper")[0]
wrapper.style.backgroundColor =  getDayight (data.sys.sunrise, data.sys.sunset, data.dt)
}


