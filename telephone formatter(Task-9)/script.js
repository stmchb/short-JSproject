const inputField = document.querySelector("input")

inputField.addEventListener("input", formatPhoneNumber)


function formatPhoneNumber() {
  var input = inputField.value.replace(/\D/g, ''); // Remove all non-numeric characters except for +()
  var formatted = '';

  // Formatting logic
  if (input.length == 0) {
    formatted = '';
  } else
    if (input.length < 4) {
      formatted = input; // No formatting needed for fewer than 4 digits
    } else if (input.length >= 4) {
      // Start formatting when there are at least 4 digits
      formatted = '+(' + input.substring(0, 3) + ') - ';
      if (input.length > 3) {
        formatted += input.substring(3); // Add remaining digits after the dash
      }
    }

  inputField.value = formatted; // Set the formatted value
}