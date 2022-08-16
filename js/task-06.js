const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  if (Number(input.dataset.length) === input.value.length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
    return;
  }
  input.classList.remove("valid");
  input.classList.add("invalid");
});
