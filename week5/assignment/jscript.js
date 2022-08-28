// Declare any necessary variables.
 import Student from "./student.js"
let myStudent; 
// Add am evemt listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.

document.getElementById('print').addEventListener('click', () =>{
    newStudent();
    PrintCertificatet();

});

// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.
document.getElementById('reset').addEventListener('click', () =>{
   
    document.querySelector("#studentName").value =""
})
// Create a function that instantiates a new student object with the input from the HTML form.

function newStudent(){
    let studentName = document.querySelector("#studentName").value
    let className = document.querySelector("#className").value
    let studentScores = string2Array(document.querySelector("#studentScores").value)
    let possibleScores = string2Array(document.querySelector("#possibleScores").value)

    myStudent = new Student (studentName,className, studentScores, possibleScores )
}
// Create a function that fills in the student's name, class name, and calculated grade on the certificate .
function PrintCertificatet(){
    document.querySelector("#certStudentName").innerHTML=myStudent.studentName
    document.querySelector("#certClassName").innerHTML=myStudent.className

}
// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.

const string2Array =str => str.split (',').map(x => parseInt(x));