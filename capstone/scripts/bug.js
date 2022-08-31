// Create a variable of the right kind and in the right place such that each new bug that is added can increment that number
let id = 0
class Bug {
    constructor(reportedBy, system, subSystem, bugDesc) {
        this.reportedByName = reportedBy
        this.system = system
        this.subSystem = subSystem
        this.bugDesc = bugDesc

        // This constructor should be set up to accept the four user-input values from index.html: 
        // reportedBy, system, subSystem, and bugDesc
    }

    addBug() {
        const list = document.getElementById("listWrapper")
        const bugInfo = document.createElement("div")
        bugInfo.id = id
        list.append(bugInfo)
        const p1 = document.createElement("p")
        const p2 = document.createElement("p")
        const p3 = document.createElement("p")
        const deleteButton = document.createElement("button")
        deleteButton.id = id
        const resolveButton = document.createElement("button")
        resolveButton.id = id
        bugInfo.append(p1, p2, p3, deleteButton, resolveButton)
        p1.textContent = `Reported by: $ Barry Water `
        p2.textContent = `System: $ Operations/ $ Package Builder `
        p3.textContent = ` The total for the cost of each package is displaying the total of the price, not the cost to the customer.`
        deleteButton.textContent = ``
        resolveButton.textContent = ``

deleteButton.addEventListener ("click", this.deleteBug)
//  deleteBug(deleteId)


resolveButton.addEventListener ("click", this.resolveBug)


        // Create a div element that displays the bug information input by the user within the "listWrapper" DOM element. 
        // It should also contain buttons whose onClick events will call the deleteBug() and resolveBug() methods (see below). 
id++
    }

    deleteBug(eventObject) {
        const deleteId = Number (eventObject.target.id)
console.log(this)

        const div = document.getElementById (deleteId)
        // Create code that will remove the appropriate bug from the DOM. 
        // You may need to Google how to remove an element from the DOM.
        div.remove()
    }

    resolveBug(eventObject) {
        const resolveId = Number (eventObject.target.id)
        // Create code that changes the appropriate bug report to a darker color
const div = document.getElementById (resolveId)
    div.style.background = "blue"
}
}
function reportBug() {
    console.log("Test")
    // Create code that instantiates the Bug class with the data input by the 
    // user in the index.html form. Then call the method to add the new bug report.
    objBug = new Bug(
        document.querySelector("#reportedBy").value,
        document.querySelector("#system").selectedOptions[0].text,
        document.querySelector("#subSystem").selectedOptions[0].text,
        document.querySelector("#bugDesc").value,
    )
    objBug.addBug()
}
