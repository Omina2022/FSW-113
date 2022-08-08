// Create an event listenter for the 'submit' button that calls the combineLists() function

// Modify the combineLists() function to create arrays from each scavenger hunt element in the scavenger.html document. 
// Then use the spread operator to combine these arrays into a single array. 
// Sort that array and display it in the 'AllItems' element on the scavenger.html document.

function combineLists() {
    let element0 =("Wired Mouse");
    let element1 =("Clacky Keyboard");
    let element2 =("Post-its");
    let element3 =("Gum Package");
    let element4 =("Paper Clip");
    let element5 =("Cell Phone Charger");
    let element6 =("Coffee Cup");
    let element7 =("USB Plug");
    let element8 =("Family Picture");
    let element9 =("ToDo List");

    let AllElements = [...element0, ...element1, ...element2, ...element3, ...element4, ...element5, ...element6, ...element7, ...element8, ...element9];
}

console.log("AllElements");

AllElements.sort();
document.getElementById(AllItems).innerHTML=AllElements

// The following code is a bonus addition that facilitates data entry on the scavenger.html document.
// If you first click in one of the textareas, you can then click scavenger hunt items in the unordered
// list. The value of that will be added to the appropriate textarea along with any necessary commas.

let objTargetText 
const objUL = document.querySelector('#lstItems')

objUL.onclick = function(event) {
    var source = getEventTarget(event)
    if (!objTargetText.innerHTML)
        objTargetText.innerHTML = source.innerHTML
    else
        objTargetText.innerHTML += ',' + source.innerHTML
}

function getEventTarget(e) {
    e = e || window.event
    return e.target || e.srcElement
}

function setTarget(obj) {
    objTargetText = obj
}

document.addEventListener('submit',combineLists)