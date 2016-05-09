// Assign an event to the element button1
var event1 = document.getElementById("button1");
// Add a listener to event to watch for a click on the button
event1.addEventListener('click', myfirst, false);

function myfirst(){
    var userinput1 = document.getElementById("input1").value;
    var userinput2 = document.getElementById("input2").value;
    var userinput3 = document.getElementById("input3").value;

    document.getElementById("demo").innerHTML = "New String: " + setCharAt(userinput1,userinput3,userinput2);
}
function setCharAt(str,index,chr) {
    var answer = confirm ("Overwrite from index?")
    if (answer)
        if(index > str.length-1) {
            return str;
        }
        else {
            return str.substr(0,index) + chr + str.substr(index+chr.length);
        }
    else
        if(index > str.length-1) {
            return str;
        }
        else {
            return str.substr(0,index) + chr + str.substr(index+1);
        }
}