const elem = document.querySelectorAll(".elem");

elem.forEach(item =>{
  item.addEventListener("mouseenter", (e)=>{
    item.childNodes[3].style.opacity= 1
  });
   
  item.addEventListener("mouseleave", ()=>{
    item.childNodes[3].style.opacity= 0
  });
  item.addEventListener("mousemove", (dets)=>{
    item.childNodes[3].style.left = dets.x+ "px";
  });
   
})















// elem1.addEventListener("mousemove", (dets)=>{
//   elem1Img.style.left = dets.x+ "px";
//   elem1Img.style.top = dets.y+ "px";
  
// })

// elem1.addEventListener("mouseenter",(dets)=>{
//   console.log("enter")
//   elem1Img.style.opacity = 1
// })

// elem1.addEventListener("mouseleave",(dets)=>{
//   console.log("leave")
//   elem1Img.style.opacity = 0
// })