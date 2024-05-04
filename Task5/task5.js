let elem = [{ dp: 'https://images.unsplash.com/photo-1544239841-139fd66988a4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', story: "https://images.unsplash.com/photo-1599665860824-2c05cba96b0f?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
{ dp: 'https://images.unsplash.com/photo-1598529262041-a9cce4be9fca?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', story: "https://images.unsplash.com/photo-1599189746445-718db5cb8fad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGFsfGVufDB8fDB8fHww" },
{ dp: 'https://images.unsplash.com/photo-1642751410330-7cdcc4d720e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGFsfGVufDB8fDB8fHww', story: "https://images.unsplash.com/photo-1665250523930-597bc5a406b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1vZGFsfGVufDB8fDB8fHww" },
{ dp: 'https://images.unsplash.com/photo-1693997169123-a47ff4157284?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vZGFsfGVufDB8fDB8fHww', story: "https://images.unsplash.com/photo-1693997296239-e6b152d70e29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vZGFsfGVufDB8fDB8fHww" },
  { dp: 'https://images.unsplash.com/photo-1598466932807-0751a2bb369a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGFsc3xlbnwwfHwwfHx8MA%3D%3D', story: "https://images.unsplash.com/photo-1631109942645-68f4c5b4565a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1vZGFsc3xlbnwwfHwwfHx8MA%3D%3D" }

]

var store = "";

elem.forEach(function (item, index) {
  store += `<div class="story">
              <img id='${index}' src="${item.dp}" alt="Story Image">
            </div>`;
});

document.querySelector("#storiyan").innerHTML = store;


storiyan.addEventListener("click",(dets)=>{

  const story = elem[dets.target.id].story;
  document.querySelector("#full-screen").style.display = "block";
  document.querySelector("#full-screen").style.backgroundImage = `url(${story})`
 
  setTimeout(() => {
    document.querySelector("#full-screen").style.display = "none";
  }, 3000);
})




