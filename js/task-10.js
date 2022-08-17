function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxContainer = document.querySelector("#boxes");

let totalSize = 20;

function createBoxes() {
  for (let i = 0; i < Number(input.value); i += 1) {
    let box = document.createElement("div");
    box.style.width = `${(totalSize += 10)}px`;
    box.style.height = `${(totalSize += 10)}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "3px";
    boxContainer.append(box);
  }
}

function destroyBoxes() {
  boxContainer.innerHTML = "";
  totalSize = 20;
}

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);
