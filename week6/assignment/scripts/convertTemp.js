// This script should return the results of a function that converts the temperature provided by the api (Kelvin).


// Depending on the location of the city, the function should return degrees in either fahrenheit or centigrade.

export default function convertTemp(country, temp){
    if (country ==="US"){
let temp1 = 1.8*(temp-273)+32 

return `${temp1} °F`
    } else {
let temp2 = temp-273.15
return `${temp2} °C`
    }
}


