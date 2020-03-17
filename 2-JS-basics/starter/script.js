// var firstName = 'Nele';
// var lastName = 'Taevere';
// var age = 28;
// var fullAge = true;
// var job;
// job = 'Teacher';

// console.log(firstName, lastName, age, fullAge, job);

/**********************
Type coercion
*/
// var firstName = 'John';
// var age = 28;
// var job, isMarried;

// job = 'teacher';
// isMarried = false;

// console.log('My name is ' + firstName + ' and I am ' + age + ' years old');
// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

/**********************
//Variable mutation
*/
// age = 'twenty eight';
// job = 'driver';

// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName);

/**********************
Basic Operators
*/
// var year, yearJohn, yearMark;
// now = 2018
// ageJohn = 28;
// ageMark = 33;

// **Math operators
// yearJohn = now - 28;
// yearMark = now - 33;

// console.log(yearJohn);
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 2);

// **Logical operators
// var johnOlder = ageJohn > ageMark;

// console.log(johnOlder);

// **Typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
// console.log(typeof x);

/**********************
Operator Precedence
*/
// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

//**Multiple operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

//**Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

//**Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

//**More operators
// x *= 2
// console.log(x);
// x += 10;
// console.log(x);
// x++;
// console.log(x);

//**Coding Challenge
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs
// 3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
// 4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

// var massMark = 88;
// var massJohn = 100;
// var heightMark = 1.65;
// var heightJohn = 1.90;
// var bmiMark = massMark / (heightMark * heightMark);
// var bmiJohn = massJohn / (heightJohn * heightJohn); 

// console.log(bmiMark, bmiJohn);

// var isBmiMarkHigher = bmiMark > bmiJohn;

// console.log('Is Mark\'s BMI higher than John\'s? ' + isBmiMarkHigher);

/**********************
If / else statement
*/

// var firstName = 'John';
// var civilStatus = 'married';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married.');
// } else {
//     console.log(firstName + ' is single.');
// };

// var isMarried = false;

// if (isMarried) {
//     console.log(firstName + ' is married.');
// } else {
//     console.log(firstName + ' is single.');
// };

// var massMark = 88;
// var massJohn = 100;
// var heightMark = 1.65;
// var heightJohn = 1.90;
// var bmiMark = massMark / (heightMark * heightMark);
// var bmiJohn = massJohn / (heightJohn * heightJohn); 

// if (bmiMark > bmiJohn) {
//     console.log('Mark\'s BMI is higher than John\'s.' );
// } else {
//     console.log('John\'s BMI is higher than Mark\'s.');
// };

/**********************
Boolean logic
*/
// var firstName = 'John';
// var age = 21;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man.');
// } else {
//     console.log(firstName + ' is a man.');
// }

/**********************
The Ternary Operator and Switch Statement
*/
// var firstName = 'John';
// var age = 17;
// **Ternary Operator
// age >= 18 ? console.log(firstName + ' drinks beer.')
// : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(firstName + ' drinks ' + drink);

// **Switch statement

// var job = 'instructor';

// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives Uber in Lisbon.');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites.');
//         break;
//     default:
//         console.log(firstName + ' does something else.');
// } 

// var firstName = 'John';
// var age = 35;

// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man.');
//         break;
//     default:
//         console.log(firstName + ' is a man.');
// };


/**********************
Truthy and Falsy values and equality operators
*/
// falsy values: undefined, null, 0, '', NaN
//Truthy values: NOT falsy values

// var height;
// height = 0;
// if (height || height === 0) {
//     console.log('Variable is defined');
// } else {
//     console.log('Variable has not been defined');
// };

// //Equality operators
// if (height =='23') {
//     console.log('The == operator does type coercion!');
// };


/**********************
Coding challenege
*/

// John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 
// 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

// 1. Calculate the average score for each team
// 2. Decide which teams wins in average (highest average score), and print the winner to the console. 
// Also include the average score in the output.
// 3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

// 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. 
// HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
// 5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

var teamMikeAverage = (89 + 120 + 103) / 3;
var teamJohnAverage = (116 + 94 + 123) / 3;
var teamMaryAverage = (97 + 134 + 105) / 3;

console.log(teamMikeAverage, teamJohnAverage, teamMaryAverage);

if (teamMikeAverage > teamJohnAverage && teamMikeAverage > teamMaryAverage) {
    console.log('Mike\'s team\'s average score is ' + teamMikeAverage + ' therefore his team has the highest average score.');
} else if (teamJohnAverage > teamMikeAverage && teamJohnAverage > teamMaryAverage) {
    console.log('John\'s team\'s average score is ' + teamJohnAverage + ' therefore his team has the highest average score.');
} else if (teamMaryAverage > teamMikeAverage && teamMaryAverage > teamJohnAverage) {
    console.log('Mary\'s team\'s average score is ' + teamMaryAverage + ' therefore her team has the highest average score.');
} else {
    console.log('It is a draw');
}


