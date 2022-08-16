const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", (event) => {
  let inputSize = event.currentTarget.value + "px";
  text.style.fontSize = inputSize;
});
