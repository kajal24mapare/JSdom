import "./styles.css";

// document.getElementById("ts").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

// console.log(document.getElementById("ts"));
let para = document.getElementById("ts");
console.log(para);
let exp = document.getElementById("experiment");
console.log(exp);
console.log(exp.innerText);
console.log(exp.innerHTML);
console.log(exp.textContent);
exp.innerText = "Changed text in experiment";
exp.style.color = "red";
exp.style.backgroundColor = "blue";
exp.style.background = "pink";

console.log(document.getElementsByClassName("inputText"));
let inputs = document.getElementsByClassName("inputText");
console.log(inputs[0]);
for (let i = 0; i < inputs.length; i++) {
  inputs[i].style.border = "1px solid black";
}

console.log(document.getElementsByTagName("input"));
let inputTags = document.getElementsByTagName("input");
console.log(inputTags[0]);
inputTags[0].style.border = "1px dashed green";

let paraQuery = document.querySelector("#ts");
console.log(paraQuery); // only 1 element returned
// paraQuery.style.color = "yellow";
let inputQuery = document.querySelector(".inputText");
console.log(inputQuery); // only 1 element returned
inputQuery.style.backgroundColor = "yellow";

let submit = document.querySelector('input[type="submit"]');
console.log(submit);
let lastElement = document.querySelector("input:last-child");
console.log(lastElement);
let secondElement = document.querySelector("input:nth-child(2)");
console.log(secondElement);

let allInput = document.querySelectorAll(".inputText");
console.log(allInput);
let even = document.querySelectorAll(".inputText:nth-child(even)");
console.log(even);
even.forEach((node) => (node.style.border = "1px solid red"));

console.log(submit.parentElement);
let submitParent = submit.parentElement;
console.log(submitParent.children[2]);
console.log(submitParent.lastElementChild);
console.log(
  submitParent.parentElement.parentElement.parentElement.parentElement
);

let newPara = document.createElement("p");
newPara.className = "decorable";
newPara.classList = ["decorable", "active"];
console.log(newPara.classList);
newPara.id = "headerPara";
newPara.setAttribute("title", "Hovered title");
let newParaText = document.createTextNode("This is a demo example");
newPara.appendChild(newParaText);
// Now insert element before form
let body = document.querySelector("body");
let form = document.querySelector("#form");
body.insertBefore(newPara, form);
console.log(body.insertBefore(newPara, form));

// console.log(form.previousSibling);
console.log("Form sibling", form.previousElementSibling);
paraQuery.previousElementSibling.innerText = "Application";
// console.log(form.previousElementSibling.firstElementChild);

function btnClicked() {
  console.log("btnClicked");
  alert("Btn clicked");
}
document.getElementById("test").addEventListener("click", btnClicked);

document.getElementById("test2").addEventListener("click", function (e) {
  console.log(
    e.target.id,
    "is clicked having class",
    e.target.className,
    "Type: ",
    e.target.type,
    "Dimensions:",
    e.clientX,
    e.clientY,
    e.ctrlKey,
    e.shiftKey
  );
  // do not want reloading on submitting form
  e.preventDefault();
});
