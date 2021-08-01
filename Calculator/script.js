// Start Building Logic behind the calculator

// jQuery $ selector
let $ = (el) => document.querySelector(el);
// Select elements
let expressionScreen = $(".expression");
let resualtScreen = $(".resualt");
let typingMethod = $('.typing-method');
// Main variables
let expression = "";
let calculated = false;
// Display the resualt using eval() function
function display() {
  return (expressionScreen.value = expression);
}
// Clear the full sreen
function clearScreen() {
  expression = "";
  resualtScreen.value = "";
  display();
}
// Remove the last entred digit or operator
function clearE() {
  // check if there is a result already calculated
  if (calculated) {
    // then ignore clearScreen next time
    calculated = false;
  }
  // Get teh expression expect the last digit or symbol
  expression = expression.substr(0, expression.length - 1);
  // Display the new expression
  display();
}
// Calc the resualt
function equal() {
  // Prepare screen for clearing
  calculated = true;
  //   Display the resualt in the resualtScreen
  return (resualtScreen.value = eval(expression));
}
// Put new digit or symbol to the expression
function put(val) {
  // Check if is letter than 8 digits
  if (expression.length < 8) {
    //   Check if is there a calculation already done
    if (calculated) {
      // thene clear the screen
      clearScreen();
      //   and return the Calculated variable to his origin
      calculated = false;
    }
    // Add the value to expression variable
    expression += val;
    // Display the expression
    display();
  }
}
// Listen to keyboard click
window.addEventListener("keydown", (e) => {
  // Check if key is a number or operator
  if (
    !isNaN(e.key) ||
    e.key == "+" ||
    e.key == "-" ||
    e.key == "*" ||
    e.key == "/" ||
    e.key == "%"
  ) {
    //   Then send it to put function
    put(e.key);
    typingMethod.textContent = "Typing using the keyboard."
  }
  //   If key is Enter
  if (e.key === "Enter") {
    //   Trigger the equal function
    equal();
  }
  // if Tab key prassed
  if(e.key === "Tab"){
    // Then typing usinf Screen Reader
    typingMethod.textContent = "Typing using the Tab key (Screen Reader)."
  }
  // If Backspace prassed clear the screen
  if(e.key === "Backspace"){
    clearE()
  }
});
