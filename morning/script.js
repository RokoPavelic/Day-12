const number = Number(prompt("Seat number?"));

const row = Math.floor(number / 10);
const letterOfRow = String.fromCharCode(65 + row);
const column = number % 10;

alert(letterOfRow + column);
