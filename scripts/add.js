var addRows = document.getElementById("adding");
  addRows.addEventListener("click", textCheck);

function textCheck (){
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
      break;
    }
  }
}