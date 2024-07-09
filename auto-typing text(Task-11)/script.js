let skillArr = ['Developer', 'Coder', 'Designer', 'Gamer']

const span = document.querySelector("h1 span");

let wordIndex = 0
let characterIndex = 0
let reverseType = false
let skipUpdate = 0

const intervalId = setInterval(() => {

  if (skipUpdate) {
    skipUpdate--
    return
  }
  if (!reverseType) {
    skipUpdate = 1
    span.innerText = span.innerText + skillArr[wordIndex][characterIndex]
    characterIndex++
  }
  else {
    span.innerText = span.innerText.slice(0, span.innerText.length - 1)
    characterIndex--
  }

  if (characterIndex === skillArr[wordIndex].length) {
    skipUpdate = 6
    reverseType = true
  }

  if (span.innerText.length === 0 && reverseType) {
    reverseType = false
    // characterIndex = 0
    wordIndex++

  }

  if (wordIndex === skillArr.length) {
    wordIndex = 0
  }

}, 100);






// // let wrdIDX = 0
// // function autotyped() {
// //   skillArr.substring(0, 1)
// // span.innerText = skillArr.substring(0, 1)
// // }
// // setInterval(autotyped, 2000)

// // let arrIdx = 0;
// // let forIdx = 0;
// // let revIdx = 0;
// // let delay = false;

// // function autoType() {
// //   if (arrIdx < skillArr.length) {
// //     if (forIdx < skillArr[arrIdx].length) {
// //       span.innerText += skillArr[arrIdx].charAt(forIdx);
// //       forIdx++, revIdx++, delay = true;
// //     } else if (delay) {
// //       delay = false;
// //     } else if (revIdx >= 0) {
// //       span.innerText = skillArr[arrIdx].slice(0, revIdx);
// //       revIdx--;
// //     } else {
// //       arrIdx++, forIdx = 0, revIdx = 0;
// //     }
// //   } else {
// //     arrIdx = 0;
// //   }

// // }



