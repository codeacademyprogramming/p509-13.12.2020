// ask(
// 	"Do you agree?",
// 	function () {
// 		alert("You agreed.");
// 	},
// 	function () {
// 		alert("You canceled the execution.");
// 	}
// );

let newMessage = `New - Hello, I'm JavaScript!`;

function showMessage() {
	let student = "Adil";
	// let message = "Hello, I'm JavaScript!"; // local variable
	// alert(message);
	// alert(newMessage);
}

alert(student);

showMessage(); // Hello, I'm JavaScript!

alert(message); // <-- Error! The variable is local to the function

let userName = "John";
let userName = "Bob";

function showMessage() {
	userName = "Bob"; // (1) changed the outer variable

	let message = "Hello, " + userName;
	alert(message);
}

// alert(userName); // John before the function call
// alert(userName); // John before the function call
// alert(userName); // John before the function call
// alert(userName); // John before the function call
// alert(userName); // John before the function call
// showMessage(); // Hello Bob
// alert(userName); // Bob, the value was modified by the function
// alert(userName); // Bob, the value was modified by the function
// alert(userName); // Bob, the value was modified by the function
// alert(userName); // Bob, the value was modified by the function
// alert(userName); // Bob, the value was modified by the function

// let userName = "John";

// function showMessage() {
// 	userName = "Ramil";

// 	let message = "Hello, " + userName; // Bob
// 	alert(message);
// }

// // // the function will create and use its own userName
// showMessage();

// alert(userName); // John, unchanged, the function did not access the outer variable

// let name = "ramil";
// let message = "Hello";

// function showMessage($, _, value, data, asdasd, dasddd) {
// 	alert(`${_} ${$}`);
// }

// showMessage(name, message); // Ann: Hello! (*)

// // showMessage();
// // showMessage("Ramil"); // Ann: Hello! (*)
// // showMessage("Kamran", "What's up?"); // Ann: What's up? (**)

// function showMessage(from, text = "no text given", age = 18) {
// 	alert(from + ": " + text + age);
// }

// showMessage("Ann", "Salam", 35); // Ann: no text given

// function anotherFunction() {

// 	return "Parametri gondermeyib"
// }

// function showMessage(from, text = anotherFunction()) {
// 	alert(`${from}: ${text}`)
// 	// anotherFunction() only executed if no text given
// 	// its result becomes the value of text
// }

// showMessage("Ramil", "salam");
// showMessage("Ramil");

// function sum(a, b) {
// 	return a + b;
// }

// alert(sum(1, 2)); // 3

function checkAge(age) {
	if (age >= 18) {
		return true;
	} else {
		return confirm("Do you have permission from your parents?");
	}
}

// let age = prompt("How old are you?", 18);

// if (checkAge(age)) {
// 	alert("Access granted");
// } else {
// 	alert("Access denied");
// }

// function showMovie(age) {
// 	if (!checkAge(age)) {
// 		return;
// 	}
// 	alert("Showing you the movie"); // (*)
// }

// showMovie()

// function doNothing() {}

// function doNothing() {
// 	return null;
// }

// alert(doNothing() === undefined); // true

// function showAge() {
// 	if (age >= 18) {
// 		return true;
// 	} else {
// 		return confirm("Do you have permission from your parents?");
// 	}
// }

// function showMessage() {
// 	alert();
// }

// function checkAndShowMessage(age, message) {
// 	checkAge(12);
// 	showMessage(message);
// }

// checkAndShowMessage(12, age);

// function thisReturnsSomeLargeExpression() {
// 	// return;
// 	// some + long + expression + or + whatever * f(a) + f(b);
// 	//
// 	// let test = "test";
// 	// prettier-ignore
// 	return (
// 		some + long + expression
// 		+ or +
// 		whatever * f(a) + f(b)
// 		);
// }

// function name(parameters, delimited, by, comma) {

// 	/* code */
//   }

// function checkAge(age) {
// 	if (age > 18) {
// 		return true;
// 	} else {
// 		return confirm("Did parents allow you?");
// 	}
// }

// function checkAge(age) {
// 	return age > 18 ? true : confirm("Did parents allow you?");
// }

// function checkAge(age) {
// 	return age > 18 || confirm("Did parents allow you?");
// }

// function sayHi() {
// 	// (1) create
// 	alert("Hello");
// 	return "Funksiya Chagrildi"
// }

// // // let func = sayHi; // (2) copy
// // let func = sayHi; // (2) copy

// // func(); // Hello     // (3) run the copy (it works)!
// // sayHi(); // Hello    //     this still works too (why wouldn't it)

// console.log(sayHi, "sayHi");
// console.log(sayHi(), "sayHi()");

// function checkAge(age) {
// 	return age > 18 || confirm("Did parents allow you?");
// }

// let sayHi = function () {
// 	// ...
// };

// let salam = "Text";

// function showOk() {
// 	alert("You agreed.");
// }

// function showCancel() {
// 	alert("You canceled the execution.");
// }

// usage: functions showOk, showCancel are passed as arguments to ask
// ask("Do you agree?", showOk, showCancel);

// let ask = function (question, yes, no) {
// 	if (confirm(question)) {
// 		yes();
// 	} else {
// 		no();
// 	}
// };

// ask()

// let age = prompt("What is your age?", 18);

// const welcome = function () {
// 	alert("Hello!");
// };

// function welcome() {
// 	alert("Hello!");
// }

// // conditionally declare a function
// if (age < 18) {
// 	welcome();
// } else {
// 	welcome();
// }

// // ...use it later
// welcome(); // Error: welcome is not defined

// let age = prompt("What is your age?", 18);
// // prettier-ignore
// let welcome = (age < 18) ? function() { alert("Hello!"); } : function() { alert("Greetings!"); };

// welcome(); // ok no

// let func = function (arg1, arg2, ...argN) {
// 	return expression;
// };

// let func = (arg1, arg2, ...argN) => expression;

// let sum = function (a, b) {
// 	return a + b;
// };

// let sum = (a, b) => a + b;

// alert(sum(1, 2)); // 3

// let double = (n) => n * 2;
// // roughly the same as: let double = function(n) { return n * 2 }

// alert(double(13)); // 6

// let age = prompt("What is your age?", 18);

// let welcome = age < 18 ? () => alert("Hello") : () => alert("Greetings!");
// let welcome =
// 	age < 18
// 		? function () {
// 				return alert("Hello");
// 		  }
// 		: function () {
// 				return alert("Greetings!");
// 		  };

// welcome();

// let sum = (a, b) => a + b;

// let sum = (a, b) => {
// 	let result = a + b;
// 	result += 10;
// 	return result; // if we use curly braces, then we need an explicit "return"
// };

// function ask(question, yes, no) {
// 	if (confirm(question)) yes();
// 	else no();
// }

// if (condition) {
// 	// do this
// 	// ...and that
// 	// ...and that
// }

// ask(
// 	"Do you agree?",
// 	function () {
// 		alert("You agreed.");
// 	},
// 	function () {
// 		alert("You canceled the execution.");
// 	}
// );

// const ask = (question, yes, no) => (confirm(question) ? yes() : no());

// ask(
// 	"Do you agree?",
// 	() => alert("You agreed."),
// 	() => alert("You canceled the execution.")
// );

// const user = {
// 	name: "Ramil",
// 	age: 23,
// 	age: [],
// 	sizes: {
// 		height: 177,
// 		age: {
// 			ingter: {

// 			}
// 		}
// 	},
// 	teaching: () => alert("Teaching"),

// 	learning: function () {
// 		alert("learning");
// 	},
// };

const user = {
	name: "Ramil",
	age: 23,
};

console.log();

// const user = {};

// user.name = "Ramil";
// user.age = 23;

let user = {
	name: "John",
	age: 30,
	"likes birds": true, // multiword property name must be quoted
};

// user.likes birds
