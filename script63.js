// Assign an event to the element button1
var event1 = document.getElementById("button1");
// Add a listener to event to watch for a click on the button
event1.addEventListener('click', myfirst, false);

function myfirst(){
    var userinput1 = document.getElementById("input1").value;
    var userinput2 = parseInt(document.getElementById("input2").value);

    var versions = [];
    versions.push(userinput1,userinput1.slice(userinput2,(userinput2+1)),userinput1.slice(userinput2,userinput1.length));
    document.getElementById("demo").innerHTML = versions.join("\n");
}