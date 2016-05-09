// Assign an event to the element button1
var event1 = document.getElementById("button1");
// Add a listener to event to watch for a click on the button
event1.addEventListener('click', myfirst, false);

function myfirst(){
    var userinput1 = parseFloat(document.getElementById("input1").value);
    var versions = [];

    versions.push(Math.round(userinput1),Math.ceil(userinput1),Math.floor(userinput1));
    document.getElementById("demo").innerHTML = versions.join("\n");
}