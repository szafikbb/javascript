//zad 1

function Person(name, surname, age, country, city){
  this.name = name,
  this.surname = surname,
  this.age = age,
  this.country = country,
  this.city = city
}

person1 = new Person('Mateusz', 'Sznober', 21, 'Polska', 'Kraków');
person2 = new Person('Jan', 'Kowalski', 26, 'Polska', 'Katowice');

Person.prototype.info = function(){
  console.log(this.name, this.surname, this.age, this.country, this.city);
}

Person.prototype.addAge = function(){
  this.age++;
}

person1.info();
person2.info();
person1.addAge();
person2.addAge();
person1.info();
person2.info();

//zad 2

Person.prototype.dish = new Array ();
Person.prototype.showDishes = function (){
  console.log(this.dish);
}

Person.prototype.newDish = function (name){
  this.dish.push(name);
}

person2.newDish("Tomato soup");
person2.showDishes();


//zad 3

  function Calculator(num1, num2) {
         this.num1 = num1;
         this.num2 = num2;

         this.add = function () {
             return (this.num1 + this.num2);
         }
         this.substract = function () {
             return (this.num1 - this.num2);
         }
         this.multiply = function () {
             return (this.num1 * this.num2);
         }
         this.division = function () {
             if (!num2 === 0)
                 return (this.num1 / this.num2);
             else
                 return "Cannot divide by 0!";
         }
     }

     const calc1 = new Calculator(1, 4);
     const calc2 = new Calculator(2, 0)
     console.log(calc1.add());
     console.log(calc1.multiply());

     console.log(calc2.substract());
     console.log(calc2.division());
     
     //zad 4
     
     function Ladder(ladderHeight) {
    this.height = ladderHeight;
    this.currentStep = 0;

    this.goUp = function(ladderSteps) {
      for (let i = 0; i < ladderSteps; i++) {
        if (this.currentStep == this.height) {
          console.log("Nie mo¿esz wyjœc wy¿ej!")
          return;
        }
        this.currentStep++;
        console.log(`Twój aktualny poziom to ${this.currentStep} na ${this.height}`);
      }
    }

    this.goDown = function(ladderSteps) {
      for (let i = 0; i < ladderSteps; i++) {
        if (this.currentStep == 0) {
          console.log("Nie mo¿esz zejœæ ni¿ej!")
          return;
        }
        this.currentStep--; 
        console.log(`Twój aktualny poziom to ${this.currentStep} na ${this.height}`);
      }
    }
  }

  const ladder1 = new Ladder(8);
  ladder1.goUp(6);
  ladder1.goDown(2);
