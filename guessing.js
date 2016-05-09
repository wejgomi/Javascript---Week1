// Assign an event to the element button1
var event1 = document.getElementById("submit");
// Add a listener to event to watch for a click on the button
event1.addEventListener('click', myfirst, false);
var i = Math.floor((Math.random() * 100) + 1);
var n = 0;
var results = [];

// Create a function which gathers the value of forms input1 and input2 and adds them together
function myfirst() {
    var userinput1 = parseInt(document.getElementById("input1").value);
    switch(true) {
        case (userinput1 == i):
            n++;
            results.push("That's it", ("The number is: " + i), ("Number of guesses: " + n));
            document.getElementById("results").innerHTML = results.join("<br />");
            document.getElementById("submit").onclick= location.reload();
            document.getElementById("submit").value="Restart";
            //var btn = document.createElement("BUTTON");
            //var t = document.createTextNode("Restart");       // Create a text node
            //btn.appendChild(t);                                // Append the text to <button>
            //document.body.appendChild(btn);
            //btn.onclick = function(){
            //    location.reload();
            //}
            break;
        case ((userinput1 - i) > -5 && (userinput1 - i) < 0):
            document.getElementById("results").innerHTML = "Too hot but go higher";
            n++;
            break;
        case ((userinput1 - i) < 5  && (userinput1 - i) > 0):
            document.getElementById("results").innerHTML = "Too hot but go smaller";
            n++;
            break;
        case ((userinput1 - i) > -10 && (userinput1 - i) < 0):
            document.getElementById("results").innerHTML = "Hot but go higher";
            n++;
            break;
        case ((userinput1 - i) < 10 && (userinput1 - i) > 0):
            document.getElementById("results").innerHTML = "Hot but go smaller";
            n++;
            break;
        case (userinput1 < i):
            document.getElementById("results").innerHTML = "Go higher !";
            n++;
            break;
        case (userinput1 > i):
            document.getElementById("results").innerHTML = "Go smaller !";
            n++;
            break;
        default:
            document.getElementById("results").innerHTML = "That's not a number!";
    }
}