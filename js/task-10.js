function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxContainer = document.querySelector("#boxes");

let totalSize = 30;

function createBoxes() {
  for (let i = 0; i < Number(input.value); i += 1) {
    let box = document.createElement("div");
    box.style.width = `${totalSize}px`;
    box.style.height = `${totalSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "3px";
    totalSize += 10;
    boxContainer.append(box);
  }
}

function destroyBoxes() {
  boxContainer.innerHTML = "";
  totalSize = 30;
}

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);
