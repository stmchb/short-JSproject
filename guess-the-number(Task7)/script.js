const randomNumber = Math.round(Math.random() * 100)
const inputField = document.querySelector('.inputField')

const submitBtn = document.querySelector('.submitBtn')
const startBtn = document.querySelector('.startBtn')

const choosenNumber = document.querySelector(".choosenNumber")
const guessesNumber = document.querySelector(".guessesNumber")

let allGuessess = []

submitBtn.addEventListener("click", (e) => {
  e.preventDefault()
  const userNumber = inputField.value
  // allGuessess = allGuessess + userNumber + ","
  allGuessess.push(userNumber)
  guessesNumber.innerText = `Your guesses: ${allGuessess}`
  if (randomNumber < userNumber) {
    choosenNumber.innerText = `Number is: Too High`
  } else if (randomNumber > userNumber) {
    choosenNumber.innerText = `Number is: Too Low`
  } else {
    choosenNumber.innerText = "Congrats!!You have Choosen the correct Number"
  }
  inputField.value = ''
})