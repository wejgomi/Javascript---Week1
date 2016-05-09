// Assign an event to the element button1
var event1 = document.getElementById("button1");
// Add a listener to event to watch for a click on the button
event1.addEventListener('click', myfirst, false);

// Create a function which gathers the value of forms input1 and input2 and adds them together
function myfirst() {
    for (i = 1; i < 100; i++) {
        if (i === 11) {
            break;
        }
    document.write(i + "\n");
    }
}