let button = document.querySelector("button")
let h1 = document.querySelector('h1')
let p = document.querySelector('p')
let image = document.querySelector("img")


function getMeme() {
  let url = "https://meme-api.com/gimme/wholesomememes"
  fetch(url)
    .then(res => res.json())
    .then((data) => {
      const { url, author, title } = data
      h1.innerText = title;
      p.innerText = `Meme By: ${author}`
      image.src = url;
      console.log(author, url, title)
    })
}
getMeme()

button, addEventListener("click", () => {
  getMeme()
})