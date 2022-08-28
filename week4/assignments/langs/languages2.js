const lang = 'JavaScript'


// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.

document.querySelector("#submit").addEventListener("click", () =>{
const nodesList = document.querySelectorAll ("input");

chkLang(nodesList)
})
function chkLang(langs) {
    let result = false
// console.log(langs[0])

for (let i = 0; i < langs.length; i++){



   if (langs[i].value.toLowerCase() == lang.toLowerCase()){
result = true 
break;
   }

   
}
    

    // use an array method to check whether the user included 'JavaScript' in their
    // list of languages

    let obj = document.querySelector('#TestResult')
    if (result) 
        obj.innerText = `Congratulations!\nYou know ${lang}.`
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`

    }
 
