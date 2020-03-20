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

// var teamMikeAverage = (89 + 120 + 103) / 3;
// var teamJohnAverage = (116 + 94 + 123) / 3;
// var teamMaryAverage = (97 + 134 + 105) / 3;

// console.log(teamMikeAverage, teamJohnAverage, teamMaryAverage);

// if (teamMikeAverage > teamJohnAverage && teamMikeAverage > teamMaryAverage) {
//     console.log('Mike\'s team\'s average score is ' + teamMikeAverage + ' therefore his team has the highest average score.');
// } else if (teamJohnAverage > teamMikeAverage && teamJohnAverage > teamMaryAverage) {
//     console.log('John\'s team\'s average score is ' + teamJohnAverage + ' therefore his team has the highest average score.');
// } else if (teamMaryAverage > teamMikeAverage && teamMaryAverage > teamJohnAverage) {
//     console.log('Mary\'s team\'s average score is ' + teamMaryAverage + ' therefore her team has the highest average score.');
// } else {
//     console.log('It is a draw');
// };


/**********************
Functions
*/

// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// };

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);

// console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(firstName + ' is already retired.');
//     };
// };

// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, 'Mike');
// yearsUntilRetirement(1969, 'Jane');

/**********************
Function Statements and Expressions
*/

//**Function declaration
// function whatDoYouDo(job, firstName) {};

//**Function expression
// var whatDoYouDo = function(job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code.';
//         case 'driver':
//             return firstName + ' drives an Uber in Lisbon.';
//         case 'designer':
//             return firstName + ' designs beautiful websites.';
//         default:
//             return firstName + ' does something else.';
//     };
// };
// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Jane'));
// console.log(whatDoYouDo('retired', 'Mark'));

/**********************
Arrays
*/
//Initialize new array
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);
// console.log(names);
// console.log(names.length);

// //Mutate arrays
// names[names.length] = 'Mary';
// names[1] = 'Ben';
// console.log(names);

// //Different data types
// var john = ['John', 'Smith', 1990, 'teacher', false];
// john.push('blue');
// john.unshift('Mr');
// console.log(john);

// john.pop();
// john.shift();
// console.log(john);

// console.log(john.indexOf(23));

// var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';

// console.log(isDesigner);

/**********************
Coding challenge
*/

// John and his family went on a holiday and went to 3 different restaurants. 
// The bills were $124, $48 and $268.

// To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
// He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, 
// and 10% if the bill is more than $200.

// In the end, John would like to have 2 arrays:
// 1) Containing all three tips (one for each bill)
// 2) Containing all three final paid amounts (bill + tip).

// (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

// function tipCalculator(bill) {
//     var percentage;
//     if (bill < 50) {
//         percentage = 0.2;
//     } else if (bill >= 50 && bill < 200) {
//         percentage = 0.15;
//     } else {
//         percentage = 0.1;
//     };
//     return percentage * bill;
// };

// var bills = [124, 48, 268];
// var tips = [tipCalculator(bills[0]),
//             tipCalculator(bills[1]),
//             tipCalculator(bills[2])
//             ];
// var finalValues = [bills[0] + tips[0],
//                     bills[1] + tips[1],
//                     bills[2] + tips[2]
//                 ];

// console.log(tips);
// console.log(finalValues);

/**********************
Objects and properties
*/
// Object literal
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false
// };

// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);

// john.job = 'driver';
// john['isMarried'] = true;
// console.log(john.job, john.isMarried);

// //New object syntax
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);

/**********************
Objects and methods
*/

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1992,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function() {
//         this.age = 2018 - this.birthYear;
//     }
// };

// john.calcAge();
// console.log(john);


/**********************
Coding challenge
*/

// Let's remember the first coding challenge where Mark and John compared their BMIs. 
// Let's now implement the same functionality with objects and methods.
// 1. For each of them, create an object with properties for their full name, mass, and height
// 2. Then, add a method to each object to calculate the BMI. Save the BMI to the object 
// and also return it from the method.
// 3. In the end, log to the console who has the highest BMI, 
// together with the full name and the respective BMI. Don't forget they might have the same BMI.

// Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

// var mark = {
//     fullName: 'Mark Miller',
//     mass: 80,
//     height: 1.8,
//     calcBMI: function() {
//         this.BMI = this.mass / (this.height * this.height); 
//         return this.BMI;
//     }
// };

// var john = {
//     fullName: 'John Smith',
//     mass: 60,
//     height: 1.7,
//     calcBMI: function() {
//         this.BMI = this.mass / (this.height * this.height); 
//         return this.BMI;
//     }
// };

// if (mark.calcBMI() > john.calcBMI()) {
//     console.log(mark.fullName + '\'s BMI of ' + mark.BMI + ' is higher than ' + john.fullName + '\'s.');
// } else if (john.BMI > mark.BMI) {
//     console.log(john.fullName + '\'s BMI of ' + john.BMI + ' is higher than ' + mark.fullName + '\'s.');
// } else {
//     console.log(mark.fullName + '\'s BMI is the same as ' + john.fullName + '\'s.')
// };

/**********************
Loops & iterations
*/

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// var john = ['John', 'Smith', 1990, 'teacher', false];
// for (var i = 0; i < john.length; i++) {
//     console.log(john[i]);
// };

// var i = 0;
// while(i < john.length) {
//     console.log(john[i]);
//     i++;
// };

//continue and break statements

// var john = ['John', 'Smith', 1990, 'teacher', false];
// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// };

// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') break;
//     console.log(john[i]);
// };

// //Looping backwards
// // for (var i = john.length - 1; i >= 0; i--) {
// //     console.log(john[i]);
// // };

// /**********************
// Coding challenge
// */

// // Remember the tip calculator challenge? Let's create a more advanced 
// // version using everything we learned!

// // This time, John and his family went to 5 different restaurants. 
// // The bills were $124, $48, $268, $180 and $42.
// // John likes to tip 20% of the bill when the bill is less than $50, 
// // 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

// // Implement a tip calculator using objects and loops:
// // 1. Create an object with an array for the bill values
// // 2. Add a method to calculate the tip
// // 3. This method should include a loop to iterate over all the paid bills 
// // and do the tip calculations
// // 4. As an output, create 1) a new array containing all tips, and 2) 
// // an array containing final paid amounts (bill + tip). HINT: 
// // Start with two empty arrays [] as properties and then fill them up in the loop.


// // EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. 
// // The bills were $77, $375, $110, and $45.
// // Mark likes to tip 20% of the bill when the bill is less than $100, 
// // 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 
// // (different than John).

// // 5. Implement the same functionality as before, this time using Mark's tipping rules
// // 6. Create a function (not a method) to calculate the average of a given array of tips. 
// // HINT: Loop over the array, and in each iteration store the current sum in a variable 
// // (starting from 0). After you have the sum of the array, divide it by the number of elements in it 
// // (that's how you calculate the average)
// // 7. Calculate the average tip for each family
// // 8. Log to the console which family paid the highest tips on average

// var john = {
//     fullName: 'John Smith',
//     bills: [124, 48, 268, 180, 42],
//     calcTips: function() {
//         var tips = [];
//         var totalBills = [];
//         for (var i = 0; i < this.bills.length; i++) {
//             var percentage;
//             if (this.bills[i] < 50) {
//                 percentage = .2;
//             } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
//                 percentage = .15;
//             } else {
//                 percentage = .1;
//             }
//             var tip = this.bills[i] * percentage;
//             tips.push(tip);
//             totalBills.push(this.bills[i] + tip);
//         }
//         return {
//             tips, totalBills
//         }
//     }
// }
// console.log(john.calcTips());

// var mark = {
//     fullName: 'Mark Miller',
//     bills: [77, 375, 110, 45],
//     calcTips: function() {
//         var tips = [];
//         var totalBills = [];
//         for (var i = 0; i < this.bills.length; i++) {
//             var percentage;
//             if (this.bills[i] < 100) {
//                 percentage = .2;
//             } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
//                 percentage = .1;
//             } else {
//                 percentage = .25;
//             }
//             var tip = this.bills[i] * percentage;
//             tips.push(tip);
//             totalBills.push(this.bills[i] + tip);
//         }
//         return {
//             tips, totalBills
//         }
//     }
// }
// console.log(mark.calcTips());

// function calcAverage(tips) {
//     var tipSum = 0;
//     for (var i = 0; i < tips.length; i++) {
//         tipSum = tipSum + tips[i];
//     }
//     return tipSum / tips.length;
// }

// var markTips = mark.calcTips().tips
// var markAverageTips = calcAverage(markTips);
// var johnTips = john.calcTips().tips
// var johnAverageTips = calcAverage(johnTips);

// if (markAverageTips > johnAverageTips) {
//     console.log(mark.fullName + '\'s average tips paid was higher than ' + john.fullName + '\'s');
// } else if(johnAverageTips > markAverageTips) {
//     console.log(john.fullName + '\'s average tips paid was higher than ' + mark.fullName + '\'s');
// } else {
//     console.log(mark.fullName + '\'s and ' + john.fullName + '\'s average tips amount was the same.');
// }




// // This time, John and his family went to 5 different restaurants. 
// // The bills were $124, $48, $268, $180 and $42.
// // John likes to tip 20% of the bill when the bill is less than $50, 
// // 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

// // Implement a tip calculator using objects and loops:
// // 1. Create an object with an array for the bill values
// // 2. Add a method to calculate the tip
// // 3. This method should include a loop to iterate over all the paid bills 
// // and do the tip calculations
// // 4. As an output, create 1) a new array containing all tips, and 2) 
// // an array containing final paid amounts (bill + tip). HINT: 
// // Start with two empty arrays [] as properties and then fill them up in the loop.


// // EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. 
// // The bills were $77, $375, $110, and $45.
// // Mark likes to tip 20% of the bill when the bill is less than $100, 
// // 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 
// // (different than John).

// // 5. Implement the same functionality as before, this time using Mark's tipping rules
// // 6. Create a function (not a method) to calculate the average of a given array of tips. 
// // HINT: Loop over the array, and in each iteration store the current sum in a variable 
// // (starting from 0). After you have the sum of the array, divide it by the number of elements in it 
// // (that's how you calculate the average)
// // 7. Calculate the average tip for each family
// // 8. Log to the console which family paid the highest tips on average

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTip: function() {
        this.tips = [];
        this.totalBills = [];
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            this.tips[i] = bill * percentage; 
            this.totalBills[i] = bill + bill * percentage;
        }
    }
}
john.calcTip();

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 375, 110, 45],
    calcTip: function() {
        this.tips = [];
        this.totalBills = [];
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            this.tips[i] = bill * percentage; 
            this.totalBills[i] = bill + bill * percentage;
        }
    }
}
mark.calcTip();

function calcAverage(tips) {
    var sum = 0;
    for (var i =0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

console.log(john, mark);

if(john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}
