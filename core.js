// let year = prompt("In which year was ECMAScript-2015 specification published?");

// if (1) {
// 	alert("You are right!");
// }

// if ("") {
// 	alert("COVID-19");
// 	alert("COVID-19");
// 	alert("COVID-19");
// 	alert("COVID-19");
// 	alert("COVID-19");
// 	alert("COVID-19");
// 	alert("COVID-19");
// 	alert("COVID-19");
// 	alert("COVID-19");
// 	let message = 'test'
// 	alert(message);
// }

// let cond = (year == 2015); // equality evaluates to false or false

// if (cond) {
// 	console.log('')
// }

// let year = prompt('In which year was the ECMAScript-2015 specification published?');

// if (year == 2015) {
//   alert( 'You guessed it right!' );
// } else {
//   alert( 'How can you be so wrong?' ); // any value except 2015
// }

// let year = prompt(
// 	"In which year was the ECMAScript-2015 specification published?",
// 	""
// );

// if (year < 2015) {
// 	alert("Too early...");
// } else if (year > 2015) {
// 	alert("Too late");
// } else if (year > 20125) {
// 	alert("Too late");
// } else if (year > 203215) {
// 	alert("Too late");
// } else if (year > 202315) {
// 	alert("Too late");
// } else if (year > 20235) {
// 	alert("Too late");
// }

// let accessAllowed;
// let age = prompt('How old are you?', '');
// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }
// alert(accessAllowed);

// let age = prompt('How old are you?', '');

// let accessAllowed = (age > 18) ? true : false;
// let accessAllowed = age > 18;

// alert(accessAllowed);

// let age = prompt("age?", 18);

// // prettier-ignore
// let message = (age < 3)   ? 'Hi, baby!' :
//   			  (age < 18)  ? 'Hello!' :
//   			  (age < 100) ? 'Greetings!' :
//   							'What an unusual age!';

// let message =
// 	age < 3
// 		? "Hi, baby!"
// 		: age < 18
// 		? "Hello!"
// 		: age < 100
// 		? "Greetings!"
// 		: "What an unusual age!";

// // prettier-ignore
// let message = age < 3 ? "Hi, baby!" : age < 18 ? "Hello!" : age < 100 ? "Greetings!" : "What an unusual age!";

// alert(message);

// Our eyes scan the code vertically. Code blocks which span several lines are easier to understand than a long, horizontal instruction set.
// let company = prompt("Which company created JavaScript?", "");

// company == "Netscape" ? alert("Right!") : alert("Wrong.");

// if (company == "Netscape") {
// 	alert("Right!");
// } else {
// 	alert("Wrong.");
// }

// let correctJSName = prompt("What is the “official” name of JavaScript?");

// if (correctJSName === "ECMAScript") {
// 	alert("Right!");
// } else {
// 	alert("Didn’t know? ECMAScript!");
// }

// let number = prompt("Add number");

// if (number >= 1) {
// 	alert("value is greater than zero");
// } else if (number <= -1) {
// 	alert("value is less than zero");
// } else if (number == 0) {
// 	alert("value equals zero");
// } else {
// 	alert("Something went wrong!");
// }

// const result =
// 	false || false || false || false || false || false || false || true;

// if (null || 0) {
// 	// works just like if( true || false )
// 	alert("truthy!");
// }

// alert(1 || 0); // 1 (1 is truthy)

// alert(null || 1); // 1 (1 is the first truthy value)
// alert(null || 0 || 1); // 1 (the first truthy value)

// alert(undefined || null || 0); // 0 (all falsy, returns the last value)

// let firstName = "";
// let lastName = "";
// let nickName = "";

// // alert( firstName || lastName || nickName || 0 || "Ramil" ||  "Anonymous"); // SuperCoder
// // alert( "salam" || lastName || nickName || 0 || "Ramil" ||  "Anonymous"); // SuperCoder
// alert(firstName || lastName || nickName || alert('test') || "Ramil" || "Anonymous"); // SuperCoder

// let hour = 12;
// let minute = 30;

// if (true || false) {
// 	alert("The time is 12:30");
// }

// if (true || false || true || false) {
// 	alert("The time is 12:30");
// }

// if (true && true && true && true && true) {
// 	alert("The time is 12:30");
// }

// let i = 3;

// while () {
// 	alert(i);
// 	i--;
// }

// do {
// 	// loop body
//   } while (condition);

// let i = 0;
// for (; i < 3; i * 10) {
// 	alert(i);
// }

// alert(i);

let a = 4;

switch (a) {
	case 2:
	case 3:
	case 4:
	case 5:
		alert("Too large");
		break;
	default:
		alert("I don't know such values");
}
