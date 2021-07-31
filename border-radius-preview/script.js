// jQuery $ Selector
let $ = (el) => document.querySelector(el);
// Select html elemnts
let box = $(".box");
let selectors = document.querySelectorAll("input[type=range]");
let style = $(".css-style .value");
let copyBtn = $("#copyBtn");
// Function to apply changes
function applyStyles(prop, value) {
  // change border radius depends on prop value
  box.style.setProperty("border-" + prop + "-radius", value + "%");
  // Display border radius values
  style.value = "border-radius: " + box.style["border-radius"] + ";";
}
// Loop in all selectors
selectors.forEach((selector) => {
  // get the data-position value
  let attribute = selector.getAttribute("data-position");
  // Listen to the oninput action
  selector.addEventListener("input", (_) => {
    // Apply changes
    applyStyles(attribute, selector.value);
  });
  // Apply Style whene page loaded
  applyStyles(attribute, selector.value);
});
// Listen to every click on copy button
copyBtn.addEventListener("click", (_) => {
  // Select css style input
  let styleCode = document.getElementById("cssStyle");
  //   Focus on the inut and select his value
  styleCode.focus();
  styleCode.select();
  styleCode.setSelectionRange(0, 99999);
  try {
    // Try to copy the style
    let copied = document.execCommand("copy");
    // if done
    if (copied) {
      // unfocus from the input
      copyBtn.focus();
      // change copy button text
      copyBtn.textContent = "Copied!";

      setTimeout((_) => {
        // then turn it back after 2s
        copyBtn.textContent = "copy";
      }, 2000);
    }
    // else log the error
  } catch (err) {
    console.log(err);
  }
});
