// declare any necessary variables


let queryType = ""
let itemID = ""


// define a function called 'fetchData()' that passes the values from 
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'

function fetchData(){
    const inpput1 = document.getElementById("queryType")
    queryType = inpput1.value 

    const inpput2 = document.getElementById("itemID")
    itemID = inpput2.value
}

function getFromSWAPI() {
    // assign values to any necessary variables
    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
    .then(function (response) {
        return response.json()
    })
    .then(function(data){
        updateInfo(data)
    })
    .catch(function(err) {
        console.warn(err)
    })
}

function updateInfo(data){

const dataLabel1=document.getElementById("dataLabel1")
const dataValue1=document.getElementById("dataValue1")
console.log("dataLabel1","dataValue1" )
const dataLabel2=document.getElementById("dataLabel2")
const dataValue2=document.getElementById("dataValue2")
console.log("dataLabel2","dataValue2")
}

if (queryType=="People"){
    dataLabel1.textContent = "Name"
    dataValue1.textContent=data.name

    dataLabel2.textContent= "birth_year"
    dataValue2.textContent= data.birth_year
    }

else if (queryType=="Planets"){
    dataLabel1.textContent = "diameter"
    dataValue1.textContent=data.diameter

    dataLabel2.textContent= "population"
    dataValue2.textContent= data.population
}

else if (queryType=="Starships"){
    dataLabel1.textContent = "model"
    dataValue1.textContent=data.model

    dataLabel2.textContent= "passengers"
    dataValue2.textContent= data.passengers
}

// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
//labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.