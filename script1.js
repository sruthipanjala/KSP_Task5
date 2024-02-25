// operators
let a = 5;
let b = 10;
console.log(a);
console.log(b);

let number1 = 15;
console.log(number1 + a);
console.log(b + 15);


//Arthematic
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a % b);
console.log(a / b);

let x = 5;
x++;
let z = x;
console.log(z);

let x1 = 5;
x1--;
let z1 = x1;
console.log(z1);

//assignment
let num1 = 10;
console.log(num1);

let x2 = 20;
x2 += 5;
console.log(x2);

x2 -= 18;
console.log(x2);

x2 *= 15;
console.log(x2);

x2 /= 6;
console.log(x2);

x2 %= 8;
console.log(x2);

x2 **= 12;
console.log(x2);

x2 >>= 5;
console.log(x2);

x2 <<= 10;
console.log(x2);

let text = "Hello";
text += " World";
console.log(text);



//comparision
let number2 = 10;
let number3 = 10;
console.log(number2 == number3);

console.log(number2 === number3);

let num2 = 10;
let numb3 = "10";
console.log(num2 === numb3);

console.log(num2 != numb3);

let num4 = 10;
let num5 = 20;
console.log(num2 > num4);
console.log(num4 < num5);
console.log(num2 >= num4);
console.log(num4 <= num5);

//logical

let m = 5;
let n = 15;
console.log(m == 6 || n == 20);
console.log(!(m == 6 || n == 20));
console.log(m == 5 || n == 15);

console.log(m == 8 && n == 15);
console.log(!(m == 8 && n == 15));
console.log(m == 5 && n == 15);

//javascript functions

function add(a, b) {
    console.log(a + b);
}

function sub(a, b) {
    console.log(a - b);
}

function multi(a, b) {
    console.log(a * b);
}
add(4, 7);
sub(14, 67);
multi(23, 86);

function eat() {
    console.log("food");
}

function run() {
    console.log("execrise");
}

function study() {
    console.log("habit");
}

function swim() {
    console.log("water");
}
eat();
run();
study();
swim();

// if else
let s = 10;
if (s == 10) {
    console.log("true");
} else {
    console.log("false");
}

let t = 10;
if (t == 100) {
    console.log("true");
} else {
    console.log("false");
}

let temperature = 25;
if (temperature >= 30) {
    console.log("It's a hot day!");
} else if (temperature >= 20 && temperature < 30) {
    console.log("It's a nice day.");
} else {
    console.log("It's a bit cold today.");
}

let number = -7;
if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

//for loop
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for (let i = 10; i <= 15; i++) {
    console.log(i);
}

let str6 = "Hello";
for (let i = 0; i < str6.length; i++) {
    console.log(str6[i]);
}

//while loop
let i = 100;
while (i <= 105) {
    console.log(i);
    i++;
}

let ip = 10;
let sum = 0;
while (ip <= 15) {
    sum += ip;
    ip++;
}
console.log("The sum of numbers from 10 to 15 is:", sum);

//Strings
let str1 = "Hello";
console.log(str1.charAt(0)); // Output: "H"
console.log(str1.toUpperCase()); // Output: "HELLO"
console.log(str1.toLowerCase()); // Output: "hello"
console.log(str1.charAt(1)); // Output: "e"


let str3 = "Hello";
let str2 = " World";
console.log(str3.concat(str2)); // Output: "Hello World"

let str = "Hello World";
console.log(str.indexOf("o")); // Output: 4
console.log(str.slice(0, 5)); // Output: "Hello"
console.log(str.substring(6, 11)); // Output: "World"
console.log(str.replace("World", "Universe")); // Output: "Hello Universe

let str5 = "apple,banana,orange";
console.log(str5.split(",")); // Output: ["apple", "banana", "orange"]

let tp = "   Hello   ";
console.log(tp.trim()); // Output: "Hello"
