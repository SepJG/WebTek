// event propagation

// window.addEventListener("click", function() {
//   console.log("window");
// }, true);

// window.addEventListener("click", function() {
//   console.log("document");
// }, true);

// document.querySelector(".div2").addEventListener("click", function() {
//   console.log("Div 2");
//   e.stopPropagation();
// }, {once:true});

// document.querySelector(".div1").addEventListener("click", function() {
//   console.log("Div 1");
// }, true);

// document.querySelector("button").addEventListener("click", function() {
//   console.log("buttton");
//   console.log(e.target.innerText = "clicked!");

// }, true);


document.querySelector("#matrix".addEventListener("click", function (e){
  console.log("matrix is clicked");
  let target = e.target;
  if(target.matches("li")){
    target.style.backgroundcolor = "lightgray";
  }
})