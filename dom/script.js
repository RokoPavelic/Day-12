// const button = document.getElementById("button");
// const headline = document.getElementById("headline");
// const text = "new headline";
// const newHeadline = (id, string) => {
//   id.innerText = string;
// };
// button.addEventListener("click", () => newHeadline(headline, text));

const button = document.getElementById("button");
const input = document.getElementById("input");

const newButton = (button, input) => {
  button.innerText = `In cart: ${input.value}`;
  /* button.style.backgroundColor = "green"; */
  button.classList.add("newButton");
};

button.addEventListener("click", () => newButton(button, input));
