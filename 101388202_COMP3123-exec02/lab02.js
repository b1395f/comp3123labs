//Full Stack Development Lab 2
//ES6 Practice Exercises

//Exercise 1:
console.log();
const greeter = (myArray, counter) => {
    let greetText = "Hello";

    for (let item of myArray) {
        console.log(`${greetText} ${item}`);
    }
};
console.log("Exercise 1 Output:\n");
greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

//Exercise 2: 
console.log();
const capitalize = (strInp) => {
    const [startChar, ...endChar] = strInp.toLowerCase();
    return [startChar.toUpperCase(), ...endChar].join('');
};
console.log("Exercise 2 Output:\n");
console.log(capitalize("fooBar"));
console.log(capitalize("nodeJs"));



//Exercise 3:
console.log();
const colours = ['red', 'green', 'blue'];
const capitalizedColours = colours.map((strInp) => capitalize(strInp));

console.log("Exercise 3 Output:\n");
console.log(capitalizedColours);

//Exercise 4:
console.log();
var values = [1, 60, 34, 30, 20, 5];
const filterLessThan20 = values.filter((valNum) => valNum < 20);

console.log("Exercise 4 Output:\n");
console.log(filterLessThan20);

//Exercise 5:
console.log();
var array = [1, 2, 3, 4];
const startInVal = 0;
const calculateSum = array.reduce((arrInVal, startInVal) => arrInVal + startInVal);
const calculateProduct = array.reduce((arrInVal, startInVal) => arrInVal * startInVal);

console.log("Exercise 5 Output:\n");
console.log(calculateSum);
console.log(calculateProduct);

//Exercise 6:
console.log();

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    };
    details = () => {
        return `Model: ${this.model} ${this.year}`;
    };

};

class Sedan extends Car {
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    };
    details(){
        super.details();
        return `Balance: ${this.balance}`;
    };
    info = () => {
        return `${this.model} has a balance of ${this.balance.toFixed(2)}`; 
    };
};

console.log("Exercise 6 Output:\n");
const car = new Car('Pontiac Firebird', 1976);
console.log(car.details());
const sedan = new Sedan('Volvo SD', 2018, 30000)
console.log(sedan.info());
console.log();
