//zad 1

const elements = [...document.querySelectorAll('.more-divs')];
function showDivs(elements) {
  let tab = [];
  elements.forEach(element => {
      tab.push(element)
  })
  console.log(tab);
}
showDivs(elements);

//zad 2

 const task2Element = document.querySelector(".short-list");

 function task2(list){
     //punkt1
     console.log(list.innerHTML);
     //punkt2
     console.log(list.outerHTML);
     //punkt3
     console.log(list.className);
     //punkt4
     console.dir(list.classList);
     //punkt5
 	console.log(list.dataset);
 }

 task2(task2Element);
 
 //zad 3
 
 const datasetCheck = document.querySelector('#datasetCheck');
function operation(...parameters) {
    let sum = 0;
    let sub = 0;
    parameters.forEach(parameter => {
        sum += parseInt(parameter);
        sub -= parameter;
    })
    return console.log(sum, sub);
}
operation(datasetCheck.dataset.numberone, datasetCheck.dataset.numbertwo, datasetCheck.dataset.numberThree);

//zad 4

document.getElementById("spanText").textContent = "spanText";

//zad 5

document.getElementById("spanText").classList.add("spanTextClass");

//zad 6

 const listOfClasses = document.getElementById("classes").classList;
 const classesArray = [];
 let classesStr = "";

 function showClasses(el){
     el.forEach(cl => {
         classesArray.push(cl);
         console.log(`${cl}\n`);
         classesStr += `${cl}+`;
         document.getElementById("classes").removeAttribute("class");
     });
     console.log(classesStr);
     console.log("Usunięto wszystkie klasy!");    
 }
 showClasses(listOfClasses);
 
 //zad 7
 
 const longList = document.querySelectorAll("#longList li");
function liSearch([...liElement]){
    liElement.forEach(li => li.dataset.text = "text");
}
liSearch(longList);

//zad 8

 const lorem = "lorem";

 function task8(str){
     const strObj = {
         newClass: str,
     }
     setClass(strObj.newClass);
 }
 function setClass(cl){
     const klass = cl;
     document.getElementById("myDiv").classList.add(klass);
 }
 task8(lorem);
 
 //zad 10
 
 const longListElements = document.querySelectorAll("#longList li");
const arrayElements = [];
function returnElements(list){
    list.forEach(child => arrayElements.push(child.textContent));
    console.log(arrayElements);
}
returnElements(longListElements);

//zad 11

 const longList = document.querySelectorAll("#longList li");
 function task11(list){
     list.forEach(li => {
         li.dataset.text = li.textContent;
         li.textContent = Math.floor(Math.random()*10);
     })
 }
 task11(longList);
 
 
