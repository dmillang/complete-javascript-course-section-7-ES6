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

{
    const a =1;
    let b = 2;
    var c = 3
}

// console.log(a + b);
console.log(c);

// ES5 IIFE
(function() {
    var c = 3
})();

console.log(c); // Error