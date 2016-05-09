// Assign an event to the element button1
var event1 = document.getElementById("button1");
// Add a listener to event to watch for a click on the button
event1.addEventListener('click', myfirst, false);

function myfirst(){
    var userinput1 = document.getElementById("input1").value;
    var userinput2 = document.getElementById("input2").value;
    var userinput3 = document.getElementById("input3").value;

    switch(true) {
        case(userinput1.indexOf(userinput2) > -1):
            document.getElementById("demo").innerHTML = "New String: " + userinput1.replace(userinput2,userinput3);
            break;
        case(!userinput1 || !userinput2 || !userinput3):
            document.getElementById("demo").innerHTML = "No String entered to Replace !";
            break;
        case(userinput1.indexOf(userinput2) === -1):
            document.getElementById("demo").innerHTML = "String not found !";
            break;
        default:
            document.getElementById("demo").innerHTML = "That's not a string !";
    }
}