function ageInDays(){
  //get the customer's age
  var age = prompt("Please enter your Birth Year");
  //check if the age is blank and null
  if (age === null && age === ""){
    age.focus();
  }
//get current Year
var date = new Date();
var thisYear = date.getFullYear();
//equation for number of days
var numDays = (age - thisYear) * 365;

let h2 = document.createElement('h2');
let textAnswer = document.createTextNode("Your age is " + numDays + "days old.");
h2.appendChild(textAnswer);
var showAnswer = document.getElementById('flex-box-result');
showAnswer.appendChild(h2);

}

function reset(){
  document.getElementById('ageInDays').reset();
}
