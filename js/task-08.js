const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill all fields");
    return;
  }
  const result = {
    email: email.value,
    password: password.value,
  };

  console.log(result);
  event.currentTarget.reset();
});
