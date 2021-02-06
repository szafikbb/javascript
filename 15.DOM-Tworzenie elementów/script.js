//zad 1

const addDiv = document.createElement('div');
addDiv.textContent = "To jest nowy element";
document.body.appendChild(addDiv);

//zad 2

const favFruits = ['watermelon', 'apple', 'orange', 'banana', 'mandarin', 'strawberry'];
 function makeList(list){
     const ol = document.createElement("ol");
      root.appendChild(ol);
     list.forEach(el =>{
         const li = document.createElement("li");
         li.textContent = el;
         ol.appendChild(li);
     })
     return ol;  
 }
 root.appendChild(makeList(favFruits));
 
 //zad 3
 
 const button = document.createElement('button');
button.textContent = 'Usuñ co drugi element';
button.addEventListener('click', function(){
	const listElements = document.querySelectorAll('li');
	for(let i=0; i < listElements.length; i++){
		if (i%2 !== 0){
			listElements[i].remove();
		}
	}
})
document.body.appendChild(button);

//zad 4

 const btn = document.createElement("button");
 btn.textContent = "usun";
 root.appendChild(btn);
 btn.addEventListener("click", () => btn.remove());
 
 //zad 5
 
 let randomNumber = Math.floor(Math.random()*10+1);
for(let number=1; number<= randomNumber; number++){
	const newDiv = document.createElement('div');
	newDiv.textContent = `To jest div numer ${number}`;
	document.body.appendChild(newDiv);
}

//zad 6

const elementsObject = {
	div1: 'to jest div',
    span1: 'to jest span',
    div2: {
        div3: 'to jest div',
    },
    span2: 'to jest span'
}

function createHtml(elementsObject){
	const div1 = document.createElement('div');
    div1.textContent = elementsObject.div1;
    document.body.appendChild(div1);

    const span1 = document.createElement('span');
    span1.textContent = elementsObject.span1;
    document.body.appendChild(span1);

    const div2 = document.createElement('div');
    div2.textContent = elementsObject.div2.div3;
    document.body.appendChild(div2);

    const span2 = document.createElement('span');
    span2.textContent = elementsObject.span2;
    document.body.appendChild(span2);

}
createHtml(elementsObject);

//zad11
 const lorem = "lorem ipsum14 dolor amet";

 function validateString(str){
   let sum = 0;
   let divCounter = 1;
   const strSplit = str.split("");
   strSplit.forEach(c => {
     if(!isNaN(parseInt(c))){
       c = parseInt(c);
       sum += c;
       divCounter *= c;
     }
     
   });
   console.log(`Suma liczb:  ${sum}`);
   console.log(`Iloczyn liczb: ${divCounter}`);
   createDivs(divCounter);
 
 }

 function createDivs(x){
   for(let i=1; i<=x; i++){
     const div =  document.createElement('div');
     div.textContent = `${i} ${lorem}`;
     root.appendChild(div);
   }
 }

 validateString(lorem);


//zad 12

// Zadanie 12
  const textString = "Ala ma kota a kot ma Ale".toLowerCase();
  const ala = "Ala".toLowerCase();
  const ola = "Ola".toLowerCase();
  const notFound = `S³owo ${ala} nie wystepuje w tekscie`;

  function checkText(str) {

    const strObj = {
      txt: str,
      checkStr: function() {
        if (this.txt.includes(ala)) console.log(replaceString(ala, ola, strObj.txt));
        else {
          const div = document.createElement('div');
          div.textContent = notFound;
          root.appendChild(div);
        }
      }
    }
    strObj.checkStr();
  }

  function replaceString(oldS, newS, text) {
    for (var i = 0; i < text.length; i++) {
      if (text.substring(i, i + oldS.length) == oldS)
        text = text.substring(0, i) + newS + text.substring(i + oldS.length, text.length);
    }
    return text;
  }

  checkText(textString);
  
  //zad 13
  
  function stringsLength(elements) {
    const result = [];

    elements.forEach((element) => {
      result.push(element.replace(/[^A-Z|a-z]/g, '').split('').length);
    })

    return result;
  }

  const lengthStrings = stringsLength(['jakis', 'string']);

  console.log(lengthStrings);

  function getSumFromArray(array) {
    return array.reduce((a, b) => (a + b));
  }

  const sumLengthStrings = getSumFromArray(lengthStrings);
  console.log("Suma: " + sumLengthStrings);

  function getAvgFromArray(sum, array) {
    return sum / array.length;
  }

  const avgLengthStrings = getAvgFromArray(sumLengthStrings, lengthStrings);
  console.log("Œrednia: " + avgLengthStrings);

  // Zad 14
  function createObject() {
    return {
      name: '',
      surname: '',
      age: '',
    };
  }

  let person = createObject();

  function setValues(name, surname, age) {
    person.name = name;
    person.surname = surname;
    person.age = age;

    person.nameLength = name.length;
    person.surnameLength = surname.length;
    person.ageLength = age.length;

    if (person.nameLength > 5 || person.surnameLength > 5 || person.age > 5) {
      const defaultObjectBtn = document.createElement('button');
      defaultObjectBtn.innerText = 'Przywróc obiekt';
      document.body.append(defaultObjectBtn, document.getElementById('root'));

      defaultObjectBtn.addEventListener('click', () => {
        person = createObject();

        console.log(person);
      })
    }

    console.log(person);
  }

  setValues('Kacper', 'Scharfenberg', 21);



 
 
 
 
 
 
