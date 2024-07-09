const plustBtn = document.querySelector(".plus-btn")
const minusBtn = document.querySelector(".minus-btn")
let changBy = document.querySelector(".changBy")
let reset = document.querySelector(".reset")

let inputval = document.querySelector(".inputField")

plustBtn.addEventListener("click", () => {
  const countValue = parseInt(changBy.innerText)
  const inputValue = parseInt(inputval.value)
  changBy.innerText = countValue + inputValue;
})

minusBtn.addEventListener("click", () => {
  const inputValue = parseInt(inputval.value)
  const countValue = parseInt(changBy.innerText)
  changBy.innerText = countValue - inputValue;
})

reset.addEventListener("click", () => {
  changBy.innerText = 0;
  inputval.value = 1;
})