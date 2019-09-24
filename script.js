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
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str); 
        });
    }
}

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
function Person(name) {
    this.name = name;
}

Person.prototype.myFriends6 = (friends) => {
    var arr = friends.map(
        (el) => {
            return `${this.name} is friends with ${el}`;
        }
    );
    console.log(arr);
}

var friends = ['Bob', 'Linda', 'Tina'];

const John = new Person('John').myFriends6(friends);