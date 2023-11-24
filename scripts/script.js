const form = document.getElementById("form");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const warningFirstName = document.getElementById("fnameP");
const warningLastName = document.getElementById("lnameP");
const warningEmail = document.getElementById("emailP");
const warningPassword = document.getElementById("passwordP");


let regEx = /\S+@\S+\.\S+/; //short regexp for email
let user;
let formCompleted = false;

const handleSubmit = (evt, form) => {
  evt.preventDefault();
  let data = new FormData(form);
  user = Object.fromEntries(data.entries());
  validateForm(user);
  if (formCompleted) {
    form.reset();
    formCompleted = false;
    alert('form submitted correctly')
  }
};

let warningIcon = ''

function validateForm(user) {
  if (!user.fname) {
    firstName.classList.add("error");
    firstName.classList.add("warningIcon");
    warningFirstName.classList.remove("hide");
  } else {
    firstName.classList.remove("error");
    firstName.classList.remove("warningIcon");
    warningFirstName.classList.add("hide");
  }
  if (!user.lname) {
    lastName.classList.add("error");
    lastName.classList.add("warningIcon");
    warningLastName.classList.remove("hide");
  } else {
    lastName.classList.remove("error");
    lastName.classList.remove("warningIcon");
    warningLastName.classList.add("hide");
  }
  if (!user.email || !regEx.test(user.email)) {
    email.classList.add("error");
    email.classList.add("warningIcon");
    warningEmail.classList.remove("hide");
  } else {
    email.classList.remove("error");
    email.classList.remove("warningIcon");
    warningEmail.classList.add("hide");
  }
  if (!user.password) {
    password.classList.add("error");
    password.classList.add("warningIcon");
    warningPassword.classList.remove("hide");
  } else {
    password.classList.remove("error");
    password.classList.remove("warningIcon");
    warningPassword.classList.add("hide");
  }
  if (user.fname && user.lname && user.email && user.password && regEx.test(user.email) ) {
    formCompleted = true;
  }
}

form.addEventListener("submit", (e) => {
  handleSubmit(e, e.target);
});
