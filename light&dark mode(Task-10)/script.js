const fullDarkMode = document.querySelector("#dark-mode")
const containerDarkMode = document.querySelector(".container-dark-mode")
const container = document.querySelector(".container")


fullDarkMode.addEventListener("change", (e) => {
  if (fullDarkMode.checked) {
    document.body.classList.add("dark")
  } else {
    document.body.classList.remove("dark")
  }
})



containerDarkMode.addEventListener("change", () => {
  if (containerDarkMode.checked) {
    container.style.backgroundColor = "rgb(27, 25, 25)";
    container.style.color = "whitesmoke";
  } else {
    container.style.backgroundColor = "whitesmoke";
    container.style.color = "rgb(27, 25, 25)";
  }
});


