// Assign an event to the element button1
var event1 = document.getElementById("button1");
// Add a listener to event to watch for a click on the button
event1.addEventListener('click', myfirst, false);

// Create a function which gathers the value of forms input1 and input2 and adds them together
function myfirst() {
    var userinput1 = parseInt(document.getElementById("input1").value);
    var userinput2 = parseInt(document.getElementById("input2").value);
    var userinput3 = parseInt(document.getElementById("input3").value);
    //switch(true) {
    //    case (userinput1 < 26):
    //        document.getElementById("demo").innerHTML = "Participant must be over the age of 26!"
    //        break;
    //    case (userinput2 < 50 || userinput2 > 90):
    //        document.getElementById("demo").innerHTML = "Participant does not meet the weight criteria !"
    //        break;
    //    case (userinput3 < 150 || userinput3 > 190):
    //        document.getElementById("demo").innerHTML = "Participant does not meet the height criteria !"
    //        break;
    //}
    if (userinput1 < 26) {document.getElementById("demo").innerHTML = "Participant must be over the age of 26!"}
    if (userinput2 < 50 || userinput2 > 90) {document.getElementById("demo2").innerHTML = "Participant does not meet the weight criteria !"}
    if (userinput3 < 150 || userinput3 > 190) {document.getElementById("demo3").innerHTML = "Participant does not meet the height criteria !"}
    else if ((userinput3 > 150 && userinput3 < 190) && (userinput1 > 26) && (userinput2 > 50 && userinput2 < 90)){document.getElementById("demo").innerHTML = "All seems fine !"} 
}