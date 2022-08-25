// import the convertTemp.js and getDaylight.js scripts with their default export
export let weather =()=>{
    let degree1 = "Temperature";
    let degree2 = "Daylight";

    return degree1 +  "change depend of the city and time zone" + degree2 + ".";
}

export default weather;

// declare any variables needed
var goBttn =document.querySelector('#goBttn');
var temp = document.querySelector('.temp');
var time = document.querySelector('.time');

document.getElementById("goBttn").addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}')
    .then (response => response.json())
    .then (data => {
    
    var tempValue = data [temp];
    var timeValue = data[time];


    temp.innerHTML=tempValue;
    time.innerHTML=timeValue;
    
})

.catch (err => alert ("Wrong name"))

})
// create an event listener for the click of the goBttn that calls a function to fetch the weather data
// create a function that calls the function that queries the api 
// and then creates promises that will call a function to write the weather data to the HTML page        

// use an asynchronous call to fetches the current weather for the specified city, awaits it, 
// and returns the resulting data

// create a function that writes the temperature (using local units), humidity, and conditions
// this function should also change the background color of the weather app to blue during the daylight
// hours at the specified city



