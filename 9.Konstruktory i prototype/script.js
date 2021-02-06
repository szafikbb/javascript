//zad1

function Person(name, surname, age, country, city, language) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.country = country;
  this.city = city;
  this.language = language;
}

const kacper = new Person('Kacper', 'Scharfenberg', 21, 'Polska', 'Bielsko', 'polski');
const jakub = new Person('jakub', 'Sienkiewicz', 22, 'Polska', 'Radom', 'polski');
const adam = new Person('Adam', 'Nowak', 25, 'Polska', 'Warszawa', 'polski');
const Andrzej = new Person('Andrzej', 'Nowak', 30, 'Polska', 'Gdansk', 'polski');
const artur = new Person('artur', 'Rutecki', 40, 'Polska', 'Czechowice', 'polski');

Person.prototype.changeAge = function(newAge) {
  this.age = newAge;
}
Person.prototype.changeCity = function(newCity) {
  this.city = newCity;
}

console.log(`Kacper - ${Kacper.age} lat, Miasto: ${kacper.city}`);
console.log(`jakub - ${jakub.age} lat, Miasto: ${jakub.city}`);
console.log(`Adam - ${adam.age} lat, Miasto: ${adam.city}`);

kacper.changeAge(70);
jakub.changeAge(43);
adam.changeCity('Katowice');
adam.changeAge('30')
console.log(`Kacper - ${Kacper.age} lat, Miasto: ${Kacper.city}`);
console.log(`Jakub - ${jakub.age} lat, Miasto: ${jakub.city}`);
console.log(`Adam - ${adam.age} lat, Miasto: ${adam.city}`);

//zad 2

function Calculator() {
  this.operationHistory = [];

  this.sum = (a, b) => {
    this.operationHistory.push(a + " + " + b);
    return a + b;
  };

  this.sub = (a, b) => {
    this.operationHistory.push(a + " - " + b);
    return a - b;
  };

  this.div = (a, b) => {
    if (b === 0) {
      return "Nie wolno dzieliæ przez 0!";
    }
    this.operationHistory.push(a + " / " + b);
    return a / b;
  };

  this.mult = (a, b) => {
    this.operationHistory.push(a + " * " + b);
    return a * b;
  }
}

let calc1 = new Calculator();
let calc2 = new Calculator();

console.log(calc1.sum(2, 4));
console.log(calc2.div(2, 0));
console.log(calc1.operationHistory);

//zad 3

function Game() {
	this.changeNumber = function () {
		Game.prototype.interval = setInterval(() => {
			Game.prototype.number = Math.round(Math.random() * 10);
			console.log(Game.prototype.number);
		}, 1000);
	};
	this.checkNumber = function () {
		Game.prototype.check = setInterval(() => {
			if (Game.prototype.number > 5) {
				clearInterval(Game.prototype.interval);
				clearInterval(Game.prototype.check);
			}
		}, 1000);
	};
}
const game1 = new Game();
const game2 = new Game();
game1.changeNumber();
game2.checkNumber();
