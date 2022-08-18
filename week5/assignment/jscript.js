// Declare any necessary variables.
// Add am evemt listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.

document.getElementById('print').addEventListener('click', newStudent);
function newStudent(){
    document.getElementsByName('student-wrapper').innerHTML= PrintCertificatet();
}
// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.
document.getElementsById('reset').addEventListener('click', newStudent)
// Create a function that instantiates a new student object with the input from the HTML form.
function myFunction (){
let x = document.getElementsByName('cell');
let text="instantiates";
let i;
for (i=0; i<x.length; i++){
    text +=x.elements[i].value
}
document.getElementById('print').innerHTML=text;
}
// Create a function that fills in the student's name, class name, and calculated grade on the certificate .
let newStudent =myFunction('studentName', 'className', 'studentScores', 'possibleScores')
document.getElementById('print').innerHTML= x;
return 
// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.