// jQuery $ Selector
let $ = (el) => document.querySelector(el);
// listen to prassed keys

window.onkeyup = (e) => {
  // Run Convert function when [ENTER] key prassed
  if (e.keyCode == 13) convert();
};
// Listen to [press event] on binary field 
$("#binary").addEventListener("keypress", function (e) {
  // check if entred value non-binary
  if (e.key != 0 && e.key != 1) {
    // Then prevent write the value
    e.preventDefault();
  }
});
// Convertion function
function convert() {
  // Get the values from field
  let binVal = $("#binary").value;
  let decVal = $("#decimal").value;

  // Check if [Decimal field] not emepty and [Binary field] is empty
  if (decVal != "" && binVal == "") {
    // Then convert Decimal number to binary
    $("#binary").value = Number(decVal).toString(2);
  }
  // Check of [Binary field] not emepty
  if (binVal != "") {
    // Then convert binary value to decimal
    $("#decimal").value = parseInt(binVal, 2);
  }
}
