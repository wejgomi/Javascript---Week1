// Assign an event to the element button1
var event1 = document.getElementById("button1");
// Add a listener to event to watch for a click on the button
event1.addEventListener('click', myfirst, false);

function myfirst(){
    var userinput1 = document.getElementById("input1").value;
    var userinput2 = document.getElementById("input2").value;
    var allchars = [];

    for(var i = 0; i < userinput1.length; i++) {
        allchars.push(userinput1.charAt(i));
    }
    document.getElementById("demo").innerHTML = allchars.join("\n");
}