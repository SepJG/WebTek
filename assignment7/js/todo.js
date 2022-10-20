let title = document.getElementById("title");
let input = document.getElementById("input");
let div = document.getElementById("div");
let button = document.getElementById("button");
let result= document.getElementById("result");
let list = document.getElementById("myList");


function addTask(event) {
  const newList = document.createElement("li");
  newList.innerText = input.value;
  list.prepend(newList);
  event.preventDefault();
}

button.addEventListener("click", addTask);