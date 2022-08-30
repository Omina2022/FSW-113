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
        // Create a div element that displays the bug information input by the user within the "listWrapper" DOM element. 
        // It should also contain buttons whose onClick events will call the deleteBug() and resolveBug() methods (see below). 
id++
    }

    deleteBug() {
        // Create code that will remove the appropriate bug from the DOM. 
        // You may need to Google how to remove an element from the DOM.
    }

    resolveBug() {
        // Create code that changes the appropriate bug report to a darker color
        
    }
}

function reportBug() {
    // Create code that instantiates the Bug class with the data input by the 
    // user in the index.html form. Then call the method to add the new bug report.
}
