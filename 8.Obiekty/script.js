//zad 1

const car = {
  type: "Sedan",
  brand: "Ford",
  model: "Mondeo",
  year: 2006,
  color: "grey",
}
console.log(car.type, car.brand, car.model, car.year, car.color);

//Zad2
car.changeBrand = function(newBrand){
  car.brand = newBrand;
}
car.changeBrand('Mercedes');
console.log(car.brand);

//zad 3


const numArr = {
    sum: 0,
    sumArr(arr) {
        return numArr.sum = arr.reduce((acc, currentVal) => acc += currentVal, 0);
    }
}

numArr.sumArr([5, 88, 1, 33, 7, 11]);
console.log(numArr.sum);

//zad 4

const secondCar = {
  name: "BMW",
  age: 12,
}
for (const key in secondCar){
  console.log(key, secondCar[key]);
}

//zad 5

let car = {
    name: "audi",
    age: 10,
    color: "silver",
    engine: {
        type: "diesel",
        capacity: 2.5,
    }
}

console.log(car.engine.type);
console.log(car.engine.capacity);

//zad 6 

car.type = "sedan";
car.engineSound = function () {
    return "Hello";
}

console.log(car.type);
console.log(car.engineSound());


