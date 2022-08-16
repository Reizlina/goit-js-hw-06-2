const btnDecr = document.querySelector("[data-action='decrement']");
const btnIncr = document.querySelector("[data-action='increment']");
const span = document.querySelector("#value");
console.log(span);

let counterValue = 0;

btnDecr.addEventListener("click", () => {
  span.textContent = `${(counterValue -= 1)}`;
});

btnIncr.addEventListener("click", () => {
  span.textContent = `${(counterValue += 1)}`;
});
