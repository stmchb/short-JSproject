const inputVal = document.querySelector("input");

const lowercase = document.querySelector("#lower-case");
const uppercase = document.querySelector("#upper-case");
const camelcase = document.querySelector("#camel-case")
const pascalcase = document.querySelector("#pascal-case")
const snakecase = document.querySelector("#snake-case")
const kababcase = document.querySelector("#kabab-case")
const trimcase = document.querySelector("#trim-case")


lowercase.innerText = "lowercase preview"
uppercase.innerText = "UPPERCASE PREVIEW"
camelcase.innerText = "camelCase pReview"
pascalcase.innerText = "PascalCase Preview"
snakecase.innerText = " Snakecase preview"
kababcase.innerText = "Kabab-Case preview"
trimcase.innerText = "trimpreview"

function runScreen() {

  inputVal.addEventListener("input", (e) => {
    const inputValue = inputVal.value.trim();
    lowercase.innerText = inputValue ? inputValue.toLowerCase() : "lowercase preview";
    uppercase.innerText = inputValue ? inputValue.toUpperCase() : "UPPERCASE PREVIEW";
    camelcase.innerText = inputValue ? toCamelCase(inputVal.value) : "camelCase pReview"
    pascalcase.innerText = inputValue ? pascalCase(inputVal.value) : "PascalCase pReview"
    snakecase.innerText = inputValue ? snakeCase(inputVal.value) : "snake_Case Preview"
    kababcase.innerText = inputValue ? kababCase(inputVal.value) : " kabab-Case Preview"
    trimcase.innerText = inputValue ? trimCase(inputVal.value) : "trimcasepreview"
  });
}

runScreen()

function toCamelCase(str) {
  var words = str.split(' '); // Split the string into words
  return words.map((word, index) => {
    if (index === 0) {
      return word.toLowerCase(); // Lowercase for the first word
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize the first letter of each subsequent word
    }
  }).join(''); // Join all words without spaces
}

function pascalCase(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
}

function snakeCase(str) {
  return str.split(' ')
    .map(word => word.toLowerCase())
    .join("_");
}

function kababCase(str) {
  return str.split(' ')
    .map(word => word.toLowerCase())
    .join("-");
}

function trimCase(str) {
  return str.replaceAll(' ', '')
}


