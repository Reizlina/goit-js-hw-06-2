function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");
const span = document.querySelector(".color");

btn.addEventListener("click", () => {
  let color = getRandomHexColor();
  console.log(color);
  bodyColor.style.backgroundColor = `${color}`;
  span.textContent = color;
});
