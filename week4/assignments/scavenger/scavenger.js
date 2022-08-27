// Create an event listenter for the 'submit' button that calls the combineLists() function

document.getElementById('submit').addEventListener('click',combineLists)
// Modify the combineLists() function to create arrays from each scavenger hunt element in the scavenger.html document. 
// Then use the spread operator to combine these arrays into a single array. 
// Sort that array and display it in the 'AllItems' element on the scavenger.html document.

function combineLists() {
    let array0=[document.querySelector("li:first-child").textContent]
    // console.log(array0)
    let array1=[document.querySelector("li:first-child").textContent]
    let array2=[document.querySelector("li:first-child").textContent]
    let array3=[document.querySelector("li:first-child").textContent]
    let array4=[document.querySelector("li:first-child").textContent]
    let array5=[document.querySelector("li:first-child").textContent]
    let array6=[document.querySelector("li:first-child").textContent]
    let array7=[document.querySelector("li:first-child").textContent]
    let array8=[document.querySelector("li:first-child").textContent]
    let array9=[document.querySelector("li:first-child").textContent]
    // console.log(array0, array1)
    let arrayCombine =[...array0, ...array1, ...array2, ...array3, ...array4, ...array5, ...array6, ...array7, ...array8, ...array9];
    // document.write(arrayCombine);
    arrayCombine.sort = document.getElementById("AllItems").innerHTML=arrayCombine
    document.getElementById("AllItem").innerHTML=arrayCombine
}
// The following code is a bonus addition that facilitates data entry on the scavenger.html document.
// If you first click in one of the textareas, you can then click scavenger hunt items in the unordered
// list. The value of that will be added to the appropriate textarea along with any necessary commas.

// let objTargetText 
// const objUL = document.querySelector('#lstItems')

// objUL.onclick = function(event) {
//     var source = getEventTarget(event)

//     if (!objTargetText.innerHTML)
//         objTargetText.innerHTML = source.innerHTML
//     else
//         objTargetText.innerHTML += ',' + source.innerHTML
// }

// function getEventTarget(e) {
//     e = e || window.event
//     return e.target || e.srcElement
// }

// function setTarget(obj) {
//     objTargetText = obj
// }


