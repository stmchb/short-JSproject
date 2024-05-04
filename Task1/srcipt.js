let addFriend = document.querySelector('#add');

let remove = document.querySelector("#remove")

let stranger = document.querySelector("#stranger")

let count = 0

addFriend.addEventListener("click", ()=>{

if (count == 0){
  stranger.innerHTML = "Friends"
  stranger.style.color = "green"
  addFriend.innerHTML = "Remove Friend"
  count = 1
  console.log(count)
}else{
  stranger.innerHTML = "Stranger"
  stranger.style.color = "red"
  addFriend.innerHTML = "Add Friend"
  count = 0
  console.log(count)
}
})
