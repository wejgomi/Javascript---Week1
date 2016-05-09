// Assign an event to the element button1
var event1 = document.getElementById("button1");
// Add a listener to event to watch for a click on the button
event1.addEventListener('click', myfirst, false);

function myfirst(){
    var userinput = [];
    userinput1 = document.getElementById("input1").value;
    var userinput2 = document.getElementById("input2").value;

    var versions = [];
    versions.push(userinput1,userinput1.indexOf(userinput2));
    if(userinput1.indexOf(userinput2) > -1){
        document.getElementById("demo").innerHTML = "String found !" + " Original string and the index inside the sentence: " + versions.join("\n");
    }
    else {
        document.getElementById("demo").innerHTML = "String not found !"
    }
}