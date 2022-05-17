// if (0) {
//   alert(`condition run 1`);
// } else {
//   alert(`condition run was false`);
// }

// const weather = "sunny";
// if (weather == "sunny") {
//   console.log("use sun cream");
// } else {
//   console.log("wait for the sun");
// }

// switch (weather) {
//   case "sunny":
//     console.log("use sun cream");
//     break;

//   case "windy":
//     console.log("wear coat");
//     break;

//   case "rainy":
//     console.log("use a umbrela");
//     break;

//   default:
//     console.log("dont go outside");
// }

// const angle1 = Number(prompt("First angle: "));
// const angle2 = Number(prompt("Second angle: "));
// const angle3 = Number(prompt("Third angle: "));
// const sum = angle1 + angle2 + angle3;
// if (sum === 180) {
//   console.log("A nice triangle!");
// } else {
//   console.log("Nope, the sum is " + sum);
// }

// const month = Number(prompt("Enter a month"));
// let days = 31;
// if (month === 2) {
//   days = 28;
// } else if (month === 4) {
//   days = 30;
// } else if (month === 6) {
//   days = 30;
// } else if (month === 8) {
//   days = 30;
// } else if (month === 10) {
//   days = 30;
// } else if (month === 12) {
//   days = 30;
// } else {
//   days = 31;
// }
// console.log(days);

// const login = prompt("enter login");
// const password = prompt("enter password");
// if (password === "sore-thumb-218") {
//   console.log("acces granted");
// } else {
//   console.log("acces denied");
// }

// const password = prompt("enter password");
// const password2 = prompt("enter password again");
// if (password === password2) {
//   console.log("acces granted");
// } else {
//   console.log("acces denied");
// }

// const password1 = prompt("enter password");
// if (password1.length >= 8) {
//   const password2 = prompt("enter password agin");
//   if (password1 == password2) {
//     console.log("acces granted");
//   } else {
//     console.log("your password not match");
//   }
// } else {
//   console.log("password must have 8 characters");
// }

// const ticketPrice = "12EUR";
// let age = prompt("What is your age?");
// if (age < 6) {
//   console.log("Your ticket is FREE");
// } else if (age > 6 && age <= 15) {
//   console.log("Your ticket is 35% off");
// } else if (age > 15 && age <= 26) {
//   console.log("Your ticket is 65% off");
// } else if (age > 27 && age <= 64) {
//   console.log("Your ticket is " + ticketPrice);
// } else {
//   console.log("Your ticket is 6EUR");
// }

// const temp1 = prompt("enter a temp at 4");
// const temp2 = prompt("enter a temp at 8");
// const temp3 = prompt("enter a temp at 12");
// let maxTemp = 0;
// if (temp1 > temp2) {
//   if (temp1 > temp3) {
//     maxTemp = temp1;
//   } else {
//     maxTemp = temp3;
//   }
// } else {
//   if (temp2 > temp3) {
//     maxTemp = temp2;
//   } else {
//     maxTemp = temp3;
//   }
// }
// console.log(maxTemp);

// const swimmer1 = prompt("Name of first swimmer");
// const swimmer2 = prompt("Name of second swimmer");
// const swimmer3 = prompt("Name of third swimmer");
// const randomTime = (min, max) => {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };
// const timeOne = randomTime(45, 60);
// const timeTwo = randomTime(45, 60);
// const timeThree = randomTime(45, 60);
