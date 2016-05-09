// Assign an event to the element button1
var event1 = document.getElementById("button1");
// Add a listener to event to watch for a click on the button
event1.addEventListener('click', myfirst, false);
var n = 0;

// Create a function which gathers the value of forms input1 and input2 and adds them together
function myfirst() {
    var userinput1 = document.getElementById("input1").value;
    
    var newarray = ["England", "France", "Italy", "Mexico", "Poland", "Russia", "China", "Greece", "Egypt", "India"];
    for (var i = 0; i < (newarray.length - 1); i++) {
        if (newarray[i] == userinput1) {
            document.getElementById("demo").innerHTML = "Element Found in position: " + i;
            n = 1;
        }
    }
    if (n != 1) {
        document.getElementById("demo").innerHTML = "Element not found inside the array";
    }
    n = 0;
}