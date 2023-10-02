//Exercise 1:
console.log("COMP 3123 – Full Stack Development – Lab 1");
console.log();
console.log("Exercise 1:");
var str1 = "the quick brown fox";

var arr = str1.split(" ");

for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
};

var str2 = arr.join(" ");
console.log(str2);

//Exercise 2: 
console.log();
console.log("Exercise 2:");

function max(arr) {
    arr = arr.sort(function (a, b) {
        return a - b
    });
    arr.reverse();
    var largeNum = arr[0];
    return largeNum;
};


console.log(max([1, 0, 1]));
console.log(max([0, -10, -20]));
console.log(max([1000, 510, 440]));


//Exercise 3
console.log();
console.log("Exercise 3:");

function right(string) {
    first3Elm = [...string];
    last3Elm = first3Elm.splice(Math.max(first3Elm.length - 3, 0));
    newStr = last3Elm.join("") + first3Elm.join("");
    return newStr;
};

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));


//Exercise 4
console.log();
console.log("Exercise 4:");

function angle_Type(angle) {
    if (angle >= 0 && angle < 90) {
        result = "Acute angle";
    } else if (angle == 90) {
        result = "Right angle";
    } else if (angle > 90 && angle < 180) {
        result = "Obtuse angle";
    } else if (angle == 180) {
        result = "Straight angle";
    } else {
        result = "Invalid.";
    }
    return result;
};

console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));


