// Assign an event to the element button1
var event1 = document.getElementById("button1");
// Add a listener to event to watch for a click on the button
event1.addEventListener('click', myfirst, false);
var fixed = 15;
var userinput2;

// Create a function which gathers the value of forms input1 and input2 and adds them together
function myfirst() {
    var userinput1 = parseInt(document.getElementById("input1").value);
    userinput2 = parseInt(document.getElementById("input2").value);
    document.getElementById("demo").innerHTML = userinput1;
    document.getElementById("demo2").innerHTML = userinput2;
}