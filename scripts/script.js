const form = document.getElementById("form");

let regEx = /\S+@\S+\.\S+/; //short regexp for email

const handleSubmit = (evt, form) => {
  evt.preventDefault();
  let data = new FormData(form);
  const user = Object.fromEntries(data.entries());

  for (const key in user) {
    if (Object.hasOwnProperty.call(user, key)) {
      const element = user[key];
      if (!element) {
        console.log("Campo vacio: " + key);
        const input = document.getElementById(key);
        input.classList.add("error");
        input.placeholder = "incompleto";
        console.log(input);
      }
    }
  }
  let validMail = regEx.test(user.email);
console.log('Valido Mail: ' + validMail);
};



form.addEventListener("submit", (e) => {
  handleSubmit(e, e.target);
  form.reset();
});
