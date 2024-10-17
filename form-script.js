"use strict";

const form = document.forms.formElement;
const minNum = 5;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(formElement);
  const requiredFields = ["name", "email", "password", "confirm-pass"];
  let error = false;

  requiredFields.forEach((field) => {
    if (data.get(field).trim().length == 0) {
      error = true;
      form.querySelector(`input[name="${field}"] + .error`).innerHTML =
        `This field is required`;
    }
    if (data.get(field).trim().length < minNum) {
      error = true;
    }
  });
  if (error) return;

  if (data.get("password").trim() !== data.get("confirm-pass").trim()) {
    form
      .querySelectorAll('input[type="password"] + .error')
      .forEach((passInput) => {
        passInput.innerHTML = "Passwords do not match";
      });
    return;
  }

  form.querySelectorAll(".error").forEach((errorElement) => {
    errorElement.innerHTML = "";
  });

  data.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });

  alert("Form submitted");
});

for (const input of form) {
  if (input instanceof HTMLInputElement) {
    input.addEventListener("input", () => {
      if (input.value.trim().length < minNum) {
        input.parentElement.querySelector(".error").innerHTML =
          `${input.dataset.title} must be at least ${minNum} characters`;
      } else {
        input.parentElement.querySelector(".error").innerHTML = "";
      }
    });
  }
}
