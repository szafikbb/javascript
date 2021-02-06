//zad 1

let num1 = 10;
let num2 = 20;

if (num1 > num2) {
    console.log("liczba1 jest większa");
} else {
    console.log("liczba2 jest wieksza");
}

//zad 2

let num1 = 1;
let num2 = 2;
let num3 = 3;

if (num1 > num2) {
    if (num1 > num3) {
        console.log("Liczba num1 jest największa");
    } else {
        console.log("Liczba num3 jest największa");
    }
} else if (num2 > num3) {
    console.log("Liczba num2 jest największa");
} else {
    console.log("Liczba num3 jest największa");
}

//zad 3

for (let i = 0; i < 10; i++){
	console.log("Lubiê JavaScript");
}

//zad 4

let result = 0;

for (let i = 1; i <= 10; i++) {
    result += i;
}

//zad 5

var n = 5;
for (let i = 0; i <= n; i++){
	if(i % 2 == 0){
  console.log(i+ " - parzysta");
  } else {
  		console.log(i+ " - nieparzysta");
  }
}

//zad 6


for (let i = 0; i <= 10; i++){
	for (let j = 0; j <= 10; j++){
  	console.log("i= " + i + ", j= " + j);
  }
}

//zad 7

console.log(0);
for (i = 1; i < 100; i++) {
    if (i % 15 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}
