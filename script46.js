// Assign an event to the element button1
var i = 0;
var event1 = document.getElementById("button1");
// Add a listener to event to watch for a click on the button
event1.addEventListener('click', myfirst, false);
var newarray = [];

// Create a function which gathers the value of forms input1 and input2 and adds them together
function myfirst() {
    var userinput1 = document.getElementById("input1").value;
    
    newarray.push(userinput1);
    
    document.getElementById("demo").innerHTML = "Contestents are:" + newarray;
    
    if (newarray.length > 1 && i == 0) {
            i++;
            var btn = document.createElement("BUTTON");
            var t = document.createTextNode("Draw!");       // Create a text node
            btn.appendChild(t);                                // Append the text to <button>
            document.body.appendChild(btn);
            btn.onclick = function(){
                var n = Math.floor(Math.random()*(newarray.length));
                document.getElementById("demo").innerHTML = "Winner is: " + newarray[n];
            }
    }
}