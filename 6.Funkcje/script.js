//Zad 1

function foo() {
    console.log("Udało się");
}

foo();

//zad 2

function showNumber(num) {
    console.log(num);
}

showNumber(77)

//zad 3

const numbers = [1,2,3,4,5];
const showNumbers = function(){
	console.log(numbers);
}
showNumbers();

//zad 4

const showString = function(show){
	counter = 0;
  let write = setInterval(function(){
  	console.log(show);
    counter++;
    
    if (counter == 5){
    	clearInterval(write);
      console.log("Koniec")
    }
  }, 3000)
}

showString("String");
