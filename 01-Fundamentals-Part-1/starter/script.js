/*
let js = 'amazing';
console.log(40+22+333) // values

console.log ('Jonas'); // Value 
console.log(23); 
// Variable is a name of memory location. There are three types of variables in java: local, instance and static.

let firstName = "jibril";

let salah = "today";

let myFirstJob = 'Progammers';
let myCurrentJob = 'Teacher'
console.log(myCurrentJob);


let mohamed = 'salah' ;
console.log(mohamed)

let football1 = 'coders' ;
console.log(football1)

let myFirstTechJob = 'technolgy'; 
console.log(myFirstTechJob)



let myCountry = 'somalia';
let myContinent = 'africa';
let myCountryPopulation = '10million';

console.log(myCountry)
console.log(myContinent)
console.log(myCountryPopulation)



var life = 100;

life = life - 1000777
console.log(life)

var name = "Dev ED";

var checkout = false;

var box;  

let javascriptISFUN = true; 
console.log(javascriptISFUN);

const jibril = 23

console.log(typeof false);
console.log(typeof javascriptISFUN);
console.log(typeof 88);
console.log('jibril');


let javascriptISFUN = true;
console.log(javascriptISFUN);

console.log(typeof javascriptISFUN);

javascriptISFUN = 'True!';
console.log(typeof javascriptISFUN)


let month;
console.log(month);
console.log(typeof month)

month = 2000
console.log(month);


let age = 66;
age = 75;
console.log(age)

// const creates a variables that cannot be muated.
// when using const you need a value
const birthYear = 1999;


let job = 'programmer';
job = 'Coder!';
console.log(job)


// Basic operators
const now = 2022
const ageJibril = now - 1999;
const ageIbby = 2050 - 2005;
console.log(ageIbby, ageJibril);

console.log(ageIbby-ageJibril, ageIbby / 10, 2 ** 3);

const firstName = 'Mohamed';
const lastName = 'Salah';
console.log(firstName + ' ' + lastName);

let x = 10 + 7;
x += 10; // x = x + 10
console.log(x);

console.log(ageIbby > ageJibril);
console.log(ageJibril >= 18);

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

BMI1 = markWeight / markHeight ** 2
BMI2 = johnWeight / johnHeight ** 2

console.log(BMI1 / (johnHeight * johnHeight))
console.log(BMI2 / (markHeight * markHeight))
const markHigherBMI = BMI1 > BMI2
console.log(markHigherBMI)

BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter)


const firstName = "jibril";
const job = "teacher";
const birthYear = 1999;
const actualYear = 2022;

const jibril =
  "i'm " +
  firstName +
  " a " +
  (actualYear - birthYear) +
  " years old " +
  job +
  "! ";
console.log(jibril);

const jibrilNew = `i'm ${firstName} a ${
  actualYear - birthYear
} year old ${job}!!!`;
console.log(jibrilNew);

console.log(`im playing about......`);
// new line \\n
console.log(`string with a \n\
wait for me \n\ `);

// object {}
// boolean true, false
// string '', ""
// template ``

const writingMessage = `this a beautiful \n\and we are working hard to make it out of the hood`;

const stregnth = " togethter we great and lovely \n\
we know whats up";
console.log(stregnth);

let msg = ["This text", "can", "span multiple lines"].join("\n");

console.log(msg);
 



const time = 1600;

if( time <= 1500) {
  console.log('the timing that you begin driving is soon')
} else {
  const timeLeft = 1800 - time;
  console.log(`theres a few minuetes left. Wait another ${timeLeft} minuetes `)
}

const age = 22;


if(age <= 25) {
  console.log('Jibril can begin to drive')
} else {
  const isOldEnough = 25 < 29
  console.log( `Jibril is to young to drive ${isOldEnough}`)
}

const birthYear = 1991;


let cent
if (birthYear <= 2000) {
  cent = 20;
} else {
  cent = 21;
}
console.log(cent);


if (condition) {
  statement 
}
else (another)



let age = 18;
let state = 'CA';

if (state == 'CA') {
  if (age >= 18) {
    console.log('You can drive.');
  } else {
    const isOldEnough = age < 222
    console.log(`Then you are too young to drive `)
  }
}


var personName = 'BoB';
var pets = 2;
var funFact = 'i am from mars';

console.log(`My name is ${personName}, i have ${pets} and ${funFact} `)

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"


const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;


const BMIMark = markWeight / markHeight ** 2
const BMIJohn = johnWeight / (johnHeight * 2);
console.log(BMIJohn, BMIMark);


if (BMIMark > BMIJohn) {
  console.log(`Marks BMI (${BMIMark}is higher than Johns (${BMIJohn})`)
} else {
  console.log(`Johns BMI (${BMIJohn}) is higher than Marks (${BMIMark})`)
}


const inputYear = '1991';
console.log(Number(inputYear), inputYear );
console.log(inputYear + 18);


var myName = "Bou";

myName = 8;

const ourNmae = "freecodecamp";

const pi = 3.14;


a = 7;
console.log(a)



//intilialize these three variables

var a = 5;
var b = 10;
var c = "i am a string";

console.log(a, b, c)


*/

// Declare variables using var
var personName = 'Sakura';
var pets = 3;
var funFact = 'I like pineapple on my pizza.';

// Use + to combine data and variable names in a single console log
console.log('My name is ' + personName + '.');
console.log('I have ' + pets + ' pet(s).');
console.log('Fun fact: ' + funFact);

// When re-assigning variables, use variable name
personName = 'Mateo';
pets = 5;
funFact = 'I was a yo-yo champ in third grade.';

// Logs message with re-assigned values
console.log('My name is ' + personName + '.');
console.log('I have ' + pets + ' pet(s).');
console.log('Fun fact: ' + funFact);
