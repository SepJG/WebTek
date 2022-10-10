/* Part 2 */
console.log('PART 2')
for (let i = 1; i <= 20; i++) {
    console.log(i);
}
/* Part 3 */
console.log('PART 3')
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for (let i = 1; i <= numbers.length; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("eplekake");
    }
    else if (i % 3 == 0) {
        console.log("eple");
    }
    else if (i % 5 == 0) {
        console.log("kake");
    }
    else {
        console.log(i);
    }
}
/* Part 4 */
const title = document.getElementById("title");
title.innerText = "Hello, JavaScript";
/* Part 5 */
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const magic = document.getElementById("magic");

button1.onclick = function changeDisplay () { 
    magic.style.display = "none";
}

button2.onclick = function changeVisibility () {
    magic.style.visibility = "hidden";
    magic.style.display = "block";
}

button3.onclick = function reset () {
    magic.style.visibility = "visible";
    magic.style.display = "block";
}

/* Part 6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];

const list = document.getElementById("tech");

for(let element of technologies){
    const newListItem = document.createElement("li");
    newListItem.innerText = element;

    list.appendChild(newListItem);

};