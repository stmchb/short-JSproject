const showToastButton = document.querySelector(".showToast-btn")
const duration = document.querySelector("#duration")
const inputField = document.querySelector("input")
const allToastMsg = document.querySelector(".all-toast-msg")
const succesErrorWarningInfo = document.querySelector("#succes-error-warning-info")
const leftRight = document.querySelector('#left-right')
const topBottom = document.querySelector('#top-bottom')
const successErrorWarningInfo = document.querySelector('#succes-error-warning-info')
const container = document.querySelector(".container")



showToastButton.addEventListener('click', () => {
  const newToast = document.createElement('div')
  newToast.classList.add('toast')
  newToast.classList.add(succesErrorWarningInfo.value)
  newToast.innerText = `${inputField.value}`


  if (successErrorWarningInfo.value == 'Success') {
    newToast.innerText = `${inputField.value}`
  } else if (successErrorWarningInfo.value === "Error") {
    newToast.innerText = `${inputField.value}`
  } else if (successErrorWarningInfo.value === "Warning") {
    newToast.innerText = `${inputField.value}`
  } else {
    newToast.innerText = `${inputField.value}`
  }

  const closeIcon = document.createElement('span')
  closeIcon.innerText = ' ✕'
  newToast.append(closeIcon)

  function removeToast() {
    if (allToastMsg.classList.contains('right')) {
      newToast.classList.add('go-right')
    } else {
      newToast.classList.add('go-left')
    }
    setTimeout(() => {
      newToast.remove()
    }, 100)
  }

  closeIcon.addEventListener("click", () => {
    removeToast()
  })

  setTimeout(() => {
    removeToast()
  }, parseInt(duration.value) * 1000)

  allToastMsg.append(newToast)

  if (leftRight.value === 'right') {
    allToastMsg.classList.add('right')
  } else {
    allToastMsg.classList.remove('right')
  }

  if (topBottom.value === 'bottom') {
    allToastMsg.classList.add('bottom')
  } else {
    allToastMsg.classList.remove('bottom')
  }
})
