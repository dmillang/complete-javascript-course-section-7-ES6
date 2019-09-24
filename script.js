////////////////////////////////////
// Lecutre: let and const

// // ES5
// var name5 = 'Jane Smith';
// var age5 = 25;
// name5 = 'Jane Miller';
// console.log(name5);

// // ES6
// const name6 = 'Jane Smith';
// let age6 = 25;
// name6 = 'Jane Miller';
// console.log(name6); // Uncaught TypeError: Assignment to constant variable

// // ES5
// function driverLicence(passedTest) {

//     if (passedTest) {
//         var firstName = 'John';
//         var yearOfBirth = 1990;
//     }
//     console.log(firstName + ' born in ' + yearofBirth + ', is now officially allowed to drive a car.');
// }

// driverLicence(true);

// ES6
// function driverLicence(passedTest) {

//     console.log(firstName);
//     let firstName;
//     const yearOfBirth = 1990;

//     if (passedTest) {
//         firstName = 'John';
//     }

//     console.log(firstName + ' born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
// }

// driverLicence(true);


// var i = 23;

// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log(i);



////////////////////////////////////
// Lecutre: Blocks and IIFEs

// {
//     const a =1;
//     let b = 2;
//     var c = 3
// }

// // console.log(a + b);
// console.log(c);

// // ES5 IIFE
// (function() {
//     var c = 3
// })();

// console.log(c); // Error

////////////////////////////////////
// Lecutre: Strings

// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;

// function calcAge(year) {
//     return 2016 - year;
// }

// // ES5 String
// console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth) + ' years old.');

// // ES6 Template literal
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

// const n = `${firstName} ${lastName}`;

// // startsWith
// console.log(n.startsWith('J'));

// // endsWith
// console.log(n.endsWith('h'));

// // includes
// console.log(n.includes(' '));

// // repeat
// console.log(`${firstName} `.repeat(5));

////////////////////////////////////
// Lecutre: Arrow Functions

// const years = [1990, 1965, 1982, 1937];

// // ES5
// var ages5 = years.map(function(el) {
//     return 2016 - el;
// });

// console.log(ages5);

// // ES6
// let ages6 = years.map((el, i) => `Age element ${i + 1}: ${2019 - el}`);
// console.log(ages6);

// ages6 = years.map((el, index) => {
//     const now = new
//     Date().getFullYear();
//     const age = now - el;
//     return `Age element ${index + 1}: ${age}.`;
// });

// console.log(ages6)



////////////////////////////////////
// Lecutre: Arrow Functions: Lexical 'this' Keyword

// ES5
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         var self = this; // grant access

//         document.querySelector('.green').addEventListener('click', function() {
//             var str = 'This is box number ' + self.position + ' and it is ' + self.color;
//             alert(str); 
//         });
//     }
// }

// box5.clickMe();

// ES6
// const box6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str); 
//         });
//     }
// }

// box6.clickMe();


// const box66 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str); 
//         });
//     }
// }

// box66.clickMe();


// ES5
// function Person(name) {
//     this.name = name;
// }

// Person.prototype.myFriends5 = function(friends) {
//     var arr = friends.map(function(el) {
//         return this.name + ' is friends with ' + el;
//     }.bind(this));

//     console.log(arr);
// }

// var friends = ['Bob', 'Linda', 'Tina'];

// new Person('John').myFriends5(friends);


// ES6
// function Person(name) {
//     this.name = name;
// }

// Person.prototype.myFriends6 = (friends) => {
//     var arr = friends.map(
//         (el) => {
//             return `${this.name} is friends with ${el}`;
//         }
//     );
//     console.log(arr);
// }

// var friends = ['Bob', 'Linda', 'Tina'];

// const John = new Person('John').myFriends6(friends);



////////////////////////////////////
// Lecutre: Destructuring

// ES5
// var john = ['John', 26];
// var name = john[0];
// var age = john[1];

// ES6
// const[name, age] = ['John', 26];
// console.log(name, age);

// const obj = {
//     firstName: 'John',
//     age: 26
// }

// const{firstName, age} = obj; // Deconstructing values outside obj
// console.log(age);

// // Using new names
// const{firstName: a, age: b} = obj; // Deconstructing values outside obj
// console.log(b);


// ES5
// function calcAgeRetirement(year) {
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }

// const [age2, retirement] = calcAgeRetirement(1990);

// console.log(age2);
// console.log(retirement);



//////////////////////////////////////////////
// Arrays

// ES5
// var boxes = document.querySelectorAll('.box');

// var boxesArr5 = Array.prototype.slice.call(boxes);
// console.log(boxesArr5);

// boxesArr5.forEach(function(element) {
//     element.style.backgroundColor = 'dodgerblue';
// });

// ES6
// const boxesArr6 = Array.from(boxes);
// Array.from(boxes).forEach(cur => {
//     cur.style.backgroundColor = 'dodgerblue';
// });


// ES5
// for (var i = 0; i < boxesArr5.length; i++) {

//     if (boxesArr5[i].className === 'box blue') {
//         continue
//     }

//     boxesArr5[i].textContent = 'I changed to blue!';

// }


// ES6
// for (const cur of boxesArr6) {
//     if (cur.className.includes('blue')) {
//         continue;
//     }
//     cur.textContent = "I changed blue";
// }


//ES5
// var ages = [12, 17, 8, 21, 14, 11];

// var ofAge = ages.map(function(i) {
//     return i >= 18;
// });

// console.log(ofAge);

// console.log(ofAge.indexOf(true));

// console.log(ages[ofAge.indexOf(true)]);

// //ES6
// console.log(ages.findIndex(i => i >= 18));

// console.log(ages.find(i => i >= 18));



//////////////////////////////////////////////
// The Spread Operator

// function addFourNumbers (a, b, c, d) {
//     return a + b + c + d;
// };

// sum1 = addFourNumbers(18, 30, 12, 21);
// console.log(sum1);

// //ES5
// var ages = [18, 30, 12, 21];

// var sum2 = addFourNumbers.apply(null, ages);
// console.log(sum2);

// //ES6
// const sum3 = addFourNumbers(...ages);
// console.log(sum3);


// const familySmith = ['John', 'Jane', 'Mark'];
// const familyMiller = ['Mary', 'Bob', 'Ann'];
// const bigFamily = [...familySmith, 'Lily', ...familyMiller];
// console.log(bigFamily);


// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');
// const all = [h,...boxes];
// console.log(all);


// Array.from(all).forEach(element => {
//     element.style.color = 'purple';
// });
// all.style.color = 'green';



//////////////////////////////////////////////
// Rest Parameters

/*
//ES5
// function isFullAge5() {
//     //console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments);

//     argsArr.forEach(function(cur) {
//         console.log((2019 - cur) >= 18);
//     });
// }

// isFullAge5(1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2016, 1987);



//ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log((2019 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965, 2018, 1987);
*/


// //ES5
// function isFullAge5(limit) {
//     console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments, 1);

//     argsArr.forEach(function(cur) {
//         console.log((2019 - cur) >= limit);
//     });
// }

// isFullAge5(16, 1990, 1999, 1965);
// // isFullAge5(1990, 1999, 1965, 2016, 1987);



// //ES6
// function isFullAge6(limit,...years) {
//     years.forEach(cur => console.log((2019 - cur) >= limit));
// }

// isFullAge6(21, 1990, 1999, 1965, 2018, 1987);



//////////////////////////////////////////////
// Default Parameters

//ES5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

//     lastName === undefined ? lastName = 'Smith' : lastName;
//     nationality === undefined ? nationality = 'american' : nationality;

//     this.firstName = firstName;
//     this.yearOfBirth = yearOfBirth;
//     this.lastName = lastName;
//     this.nationality = nationality;
// }

//ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);

var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');