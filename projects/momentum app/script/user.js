const form = document.querySelector(".user-form"),
      input = form.querySelector("input");

const greeting = document.querySelector(".user-greetings");
      currentValue = input.value;
      displayed = "displayed";

function greetUser(text) {
    form.classList.remove(displayed);
    greeting.classList.add(displayed);
    let today = new Date(),
            hour = today.getHours();
      
    if (hour < 12) {
          greeting.innerText = `Hi ${text}, Good Morning!`; 
        } else if (hour < 18) {
          greeting.innerText = `Hi ${text}, Good Afternoon!`; 
        } else {
          greeting.innerText = `Hi ${text}, Good Evening!`; 
        }
      }

function saveName(text) {
  localStorage.setItem(currentValue, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  greetUser(currentValue);
  saveName(currentValue);
}

function askForName() {
form.classList.add(displayed);
form.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(currentValue);
  if (currentUser === null) {
    askForName();
  } else {
    greetUser(currentUser);
  }
}

function init() {
  loadName();
}
init();
