//zad 1

let visitCounter = 1;

let interval = setInterval(function () {

    console.log("czesc po raz " + visitCounter++);
    if (visitCounter > 15) {
        clearInterval(interval);
    }
}, 3000);


//Zad 2
const brands = ["Lacoste", "Tommy", "Nike", "Ralph"];
let element = 0;

setTimeout(function(){
	console.log(brands.join(" "));
}, 2000);

let show = setInterval(function(){
	console.log(brands[element]);
  element++;
  if (element === brands.length){
  	clearInterval(show);
  }
}, 3000)
