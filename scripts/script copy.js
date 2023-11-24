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
        const input = document.getElementById(key);
        const info = document.getElementById(key+'P');
        info.classList.remove('hide');
        input.classList.add("error");
        input.placeholder = "incompleto";
      
      }
    }
  }
  let validMail = regEx.test(user.email);
console.log('Valido Mail: ' + validMail);
};

form.addEventListener("submit", (e) => {
  handleSubmit(e, e.target);
  //form.reset();
});
