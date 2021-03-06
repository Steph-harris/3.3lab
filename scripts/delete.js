
var firstName;
var lastName;
var email;
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

//timer that randomly between 5-10 secs deletes rows
window.addEventListener("load", escape);
debugger;
function escape(){
  mainTab= document.getElementById("mainTab");
  var timerInterval=Math.floor((Math.random() * 5000) + 5000);
  setInterval (function (){
    if (mainTab.rows.length>1){
      alert("They're escaping! Better add more!")
      deleteButtons[0].parentNode.parentNode.remove();
      return;
    }
  }, timerInterval);
}

// clearInterval

// Add an event listener to the plus button
var addRows = document.getElementById("adding");
addRows.addEventListener("click", addRow);

// function that adds a row to the table
function addRow(){    
  var boxCheck = document.getElementsByTagName("input");
  var whichBox;
  for (i=0; i<boxCheck.length; i++){
    if(boxCheck[i].value===""){
      switch (i) {
        case 0: 
        whichBox = "first name";
        break;
        case 1:
        whichBox = "last name";
        break
        case 2:
        whichBox = "email address";
        break;
      }
      alert("Please fill out the " + whichBox + " box first");
      return;
    }
  } 
  firstName = document.getElementById("firstName").value;
  lastName = document.getElementById("lastName").value;
  email = document.getElementById("emailAddress").value;
  var row = mainTab.insertRow(mainTab.rows.length -1);
  var cell1 = row.insertCell (0);
  var cell2 = row.insertCell (1);
  var cell3 = row.insertCell (2);
  var cell4 = row.insertCell (3);
  var newDeleteButton = document.createElement("button");
  newDeleteButton.setAttribute("class", "btn btn-danger");
  newDeleteButton.appendChild(document.createTextNode("X"));
  cell1.innerHTML = firstName;
  cell2.innerHTML = lastName;
  cell3.innerHTML = email;
  cell4.appendChild(newDeleteButton);
  newDeleteButton.addEventListener("click", deleteRow);
}
