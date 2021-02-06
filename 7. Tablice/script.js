//zad1

const numbers = [1, 2, 3, 4];
console.log(numbers);

//zad 2

const arr = ["ang", "eng", 15, 14, "str", 12];

//p1
console.log(arr[0]);
console.log(arr[1]);

//p2
console.log(arr[arr.length - 1]);

//p3
arr.forEach(a => console.log(a));

//p4
arr.forEach((a, i) => {
    if (i % 2 == 0) console.log(a);
})

//p5
arr.forEach(a => {
    if (typeof a === "string") console.log(a);
})

//p6
arr.forEach(a => {
    if (typeof a === "number") console.log(a);
})

//zad 4

function sumTabNumbers(numbers) {
  let sum = 0;
  numbers.forEach(number => {
    sum += number;
  })
  return console.log(sum);
}
sumTabNumbers(numbers);

//zad 5

function multiTabNumbers(numbers) {
  let sum = 0;
  numbers.forEach(number => {
    sum += number;
  })

  let avg = sum / numbers.length;
  numbers.forEach(number => {
    console.log((number * avg).toFixed(2));
  })
}

//zad 6

function evenAvg(arr) {
    const evenNums = arr.filter(n => n % 2 == 0);
    console.log((evenNums.reduce((acc, currentVal) => {
        return acc + currentVal;
    }, 0)) / evenNums.length);
}
evenAvg(numbers);

//zad 7

const nums = [2, 7, 5, 34, 1, 65];
function compareNumbers(a, b) {
    return a - b;
}
console.log(nums.sort(compareNumbers));

//zad 8

const firstNumbersArray = [2, 4, 6, 8, 10];
const secondNumbersArray = [1, 3, 5, 7, 9];
const thirdNumbersArray = [];

function sumIndex(firstNumbersArray, secondNumbersArray) {
  firstNumbersArray.forEach((number, i) => {
    thirdNumbersArray.push(number + secondNumbersArray[i]);
  })
  return thirdNumbersArray;
}
console.log(sumIndex(firstNumbersArray, secondNumbersArray));

//zad 9 

function returnNewArray(numbers, element) {
  let index = numbers.indexOf(element);
  numbers.splice(index, 2);
  let newArray = numbers;
  return (console.log(newArray));
}
returnNewArray(numbers, numbers[2]);

//zad 10

const numbers2 = [-2, 7, -5, -34, -1, 65];

function changeElement(arr) {
    return arr.map(n => n * -1);
}

console.log(changeElement(numbers2));
