// DOM variables
const form = document.querySelector(".user-form"),
      input = form.querySelector("input");

const greeting = document.querySelector(".user-greetings");
      currentValue = input.value;
      displayed = "displayed";

// Greet user depending on the time of the day
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

// save
function saveName(text) {
  localStorage.setItem(currentValue, text);
}

// submit 
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  greetUser(currentValue);
  saveName(currentValue);
}

// ask for name
function askForName() {
form.classList.add(displayed);
form.addEventListener("submit", handleSubmit);
}

// load saved name
function loadName() {
  const currentUser = localStorage.getItem(currentValue);
  if (currentUser === null) {
    askForName();
  } else {
    greetUser(currentUser);
  }
}

// init loadname
function init() {
  loadName();
}
init();

// reset
function reset () {
  localStorage.removeItem(currentValue)
  location.reload()
}
const resetbttn = document.querySelector(".reset")
resetbttn.addEventListener('click', reset);