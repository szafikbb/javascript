//zad1

console.log(document.getElementById('buz').parentElement);
console.log(document.getElementById('baz').previousElementSibling);
console.log(document.getElementById('foo').children);
console.log(document.getElementById('foo').parentElement);
console.log(document.getElementById('foo').firstElementChild);
console.log(document.getElementById('foo').firstElementChild.nextElementSibling);

//zad2

const ex2 = document.getElementById("ex2");
function getText(ex2){
  ex2.addEventListener('click', function(){
    console.log(ex2.textContent);
})
}
getText(ex2);

//zad3

 const ex3 = document.querySelectorAll("#ex3 button");
 ex3.forEach(btn => {
     btn.addEventListener("click", function () {
         if (btn.nextElementSibling.style.display === "none") btn.nextElementSibling.style.display = 'inline';
         else btn.nextElementSibling.style.display = 'none';
         
 //zad 4
 
function changeColor(element){
  element.addEventListener("click", function(){
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    element.parentElement.style.backgroundColor = randomColor;
  })
}
buttons.forEach(button => {
  changeColor(button);
  
  //zad5
  
  //Zadanie 5
const colors = document.querySelectorAll("#ex5 div");
const elements = [...document.querySelectorAll('#ex5 li')];

colors.forEach (element => {
  element.addEventListener('mouseenter', function(colors) {
    let currentColor = colors.target.style.backgroundColor;
    //1
    //elements[0].style.backgroundColor = currentColor;

    //2
    //elements[elements.length -1].style.backgroundColor = currentColor;

    //4
    //elements.forEach(element => element.style.backgroundColor = currentColor);

    //5
    //document.querySelector("#ex5 ul").style.backgroundColor = currentColor;
  })
})

//zad6

const ex6 = document.getElementById("ex6");

const firstCombination = ex6.firstElementChild.firstElementChild.firstElementChild;

const secondCombination = ex6.firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;

const thirdCombination = ex6.parentElement.firstElementChild.parentElement.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.firstElementChild;
