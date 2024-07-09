
const input = document.querySelector("input")
const container = document.querySelector(".container")


input.addEventListener("input", () => {
  container.style.background = input.value
  container.style.borderRadius = input.value
})