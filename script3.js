// Assign an event to the element button1
var event1 = document.getElementById("button1");
// Add a listener to event to watch for a click on the button
event1.addEventListener('click', myfirst, false);

// Create a function which gathers the value of forms input1 and input2 and adds them together
function myfirst() {
    var userinput1 = document.getElementById("input1").value;
    var userinput2 = document.getElementById("input2").value;
    switch(true){
      case ((+userinput1 - +userinput2) > 0):
          document.getElementById("demo").innerHTML = +userinput1;
          break;
      case ((+userinput1 - +userinput2) < 0):
          document.getElementById("demo").innerHTML = +userinput2;
          break;
      default:
          document.getElementById("demo").innerHTML = "Two numbers are the same!"
    }
}