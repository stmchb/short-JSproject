const icon = document.querySelector('i')

icon.addEventListener("dblclick", ()=>{
  console.log("i am Cliked")
  icon.style.transform ="translate(-350%, -50%) scale(1)";
  icon.style.opacity = 0.8;
  setTimeout(()=>{
    icon.style.opacity = 0;
  },2000)
})