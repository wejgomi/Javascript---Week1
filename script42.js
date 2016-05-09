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
    newarray.push(userinput1, userinput2, userinput3);
    var newarrayshifted = newarray.shift(); 
    document.getElementById("demo").innerHTML = "New Array shifted: " + newarray;
    document.getElementById("demo2").innerHTML = "Shifted Element: " + newarrayshifted;
    
    var newarrayunshifted = newarray.unshift(userinput1);
    document.getElementById("demo3").innerHTML = "New Array unshifted: " + newarray;
    document.getElementById("demo4").innerHTML = "Unshifted element: " + userinput1;
    
    var popped = newarray.pop();
    document.getElementById("demo5").innerHTML = "New Array popped: " + newarray;
    document.getElementById("demo6").innerHTML = "Popped element: " + popped;
}