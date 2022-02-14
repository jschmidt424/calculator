let display = document.getElementById("display"); // save a reference to display dom element
let buttons = Array.from(document.getElementsByClassName("button")); // save a reference to all buttons in an array

buttons.map((button) => {
  // loop through all buttons
  button.addEventListener("click", (e) => {
    // add event listener to each button
    switch (
      e.target.innerText // switch on the inner text of the button
    ) {
      case "C": // if the inner text is C
        display.innerText = ""; // clear the display
        break; // break out of the switch
      case "=": // if the inner text is =
        try {
          // try to parse the display
          display.innerText = eval(display.innerText); // evaluate the display
        } catch {
          // if there is an error
          display.innerText = "Error"; // set the display to error
        }
        break; // break out of the switch
      case "←": // if the inner text is ←
        if (display.innerText) {
          // if the display is not empty
          display.innerText = display.innerText.slice(0, -1); // remove the last character from the display
        }
        break; // break out of the switch
      default:
        // if the inner text is not C, =, or ←
        display.innerText += e.target.innerText; // add the inner text of the button to the display
    }
  });
});
