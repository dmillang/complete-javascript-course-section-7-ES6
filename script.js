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
// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
//     this.firstName = firstName;
//     this.yearOfBirth = yearOfBirth;
//     this.lastName = lastName;
//     this.nationality = nationality;
// }

// var john = new SmithPerson('John', 1990);

// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');



//////////////////////////////////////////////
// Maps

// const question = new Map();

// question.set('question', 'What is the official name of the latest major JavaScript version?');

// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);

// question.set(true, 'Correct answer :D');
// question.set(false, 'Wrong, please try again!');

// // console.log(question.get('question'));
// // console.log(question.size);

// if(question.has(4)) {
//     // question.delete(4);
//     // console.log('Answer 4 is here')
// }

// // question.clear();

// // question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

// for (let [key, value] of question.entries()) {
//     if (typeof(key) === 'number') {
//         console.log(`Answer: ${key}: ${value}`)
//     }
// }

// const ans = parseInt(prompt('Write the correct answer'));

// console.log(question.get(ans === question.get('correct')));



//////////////////////////////////////////////
// Classes

//ES5
// var Person5 = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function() {
//     var age = new Date().getFullYear - this.yearOfBirth;
//     console.log(age);
// }

// var john5 = new Person5('John', 1990, 'teacher');


// //ES6
// class Person6 {
//     constructor (name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     calculateAge() {
//         var age = new Date().getFullYear - this.yearOfBirth;
//         console.log(age);
//     }

//     static greeting() {
//         console.log('Hey there!');
//     }
// }

// const john6 = new Person6('John', 1990, 'teacher');

// Person6.greeting();



//////////////////////////////////////////////
// Classes with Subclasses

//ES5
// var Person5 = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
// }

// var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
//     Person5.call(this, name, yearOfBirth, job);
//     this.olympicGames = olympicGames;
//     this.medals = medals;
// }

// Athlete5.prototype = Object.create(Person5.prototype);

// Athlete5.prototype.wonMedal =  function() {
//     this.medals++;
//     console.log(this.medals);
// }

// var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

// johnAthlete5.calculateAge();
// johnAthlete5.wonMedal();


// // ES6
// class Person6 {
//     constructor (name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }

//     calculateAge() {
//         var age = new Date().getFullYear() - this.yearOfBirth;
//         console.log(age);
//     }

//     static greeting() {
//         console.log('Hey there!');
//     }
// }

// class Athlete6 extends Person6 {
//     constructor (name, yearOfBirth, job, olympicGames, medals) {
//         super(name, yearOfBirth, job);
//         this.olympicGames = olympicGames;
//         this.medals = medals;
//     }

//     wonMedal() {
//         this.medals++;
//         console.log(this.medals);
//     }
// }

// const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

// johnAthlete6.calculateAge();
// johnAthlete6.wonMedal();




/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of ALL the parks (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/


// 1

class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }

    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}

// 5

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`)
    }
}


const allParks  = [new Park('Green Park', 1987, 0.2, 215), new Park('National Park', 1894, 2.9, 3541), new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4), new Street('Evergreen Street', 2008, 2.7, 2), new Street('4th Street', 2015, 0.8), new Street('Sunset Bulevard', 1982, 2.5, 5)];


// Calculate age usable in parks and streets
function calc(arr) {

    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    return [sum, sum / arr.length];

}

// 3

function reportParks(p) {

    console.log('--------------PARKS REPORT--------------');

    // Density
    p.forEach(el => el.treeDensity());

    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

    // Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
}

// 4
function reportStreets(s) {
    console.log('--------------STREETS REPORT--------------');

    // Total and average length of the town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} have a total length of ${totalLength} km, with an average of ${avgLength} km.`)

    // 5
    // Classify sizes
    s.forEach(el => el.classifyStreet());
}


reportParks(allParks);
reportStreets(allStreets);