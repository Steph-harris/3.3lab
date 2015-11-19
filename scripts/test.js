var addRows = document.getElementById("adding");
  addRows.addEventListener("click", addRow);

// function that adds a row to the table
function addRow(){ 
  debugger;
  
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

//function that checks inputs for empty strings
