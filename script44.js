// Assign an event to the element button1
var event1 = document.getElementById("button1");
// Add a listener to event to watch for a click on the button
event1.addEventListener('click', myfirst, false);

// Create a function which gathers the value of forms input1 and input2 and adds them together
function myfirst() {
    var userinput1 = parseInt(document.getElementById("input1").value);
    var userinput2 = parseInt(document.getElementById("input2").value);
    var userinput3 = parseInt(document.getElementById("input3").value);
    
    var newarray = [];
    for (var i = 0; i < 10; i++) {
        var n = Math.floor((Math.random() * 100) + 1);
        newarray.push(n);
        document.write(n + "\n");
    }
}