var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;
var email = document.getElementById("emailAddress").value;
var mainTab = document.getElementById("mainTab");

// Get all of the delete buttons
var deleteButtons = document.getElementsByClassName("btn-danger")

// Loop over all of the delete buttons and add an event listener
for(i=0; i < deleteButtons.length; i++){
  deleteButtons[i].addEventListener("click", deleteRow);
}

// Function that deletes a row
function deleteRow(){
  this.parentElement.parentElement.remove();
}

// Add an event listener to the plus button

var addRows = document.getElementById("adding");
  addRows.addEventListener("click", addRow);
// function that adds a row to the table
debugger;
function addRow(){
  //deleteButtons[0].parentNode.parentElement.appendChild();
  deleteButtons.parentElement.appendChild(adding);
}

//timer that randomly between 5-10 secs deletes rows

// var timerInterval;
// setInterval (function (){
//   alert("They're escaping! Better add more!")
//   deleteButtons[0].parentNode.parentNode.remove();
//     clearInterval(setInterval);
// }, 5000);
