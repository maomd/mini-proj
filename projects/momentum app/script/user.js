// DOM variables
const form = document.querySelector(".js-form"),
      input = form.querySelector("input");

const greeting = document.querySelector(".js-greetings");
const user = "currentUser",
      displayed = "showing";

function saveName(text) {
  localStorage.setItem(user, text);
}

function handleSubmit(event) {
  event.preventDefault();
 
  const currentValue = input.value;
  
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
 
  form.classList.add(displayed);
 
  form.addEventListener("submit", handleSubmit);
  
}

function paintGreeting(text) {
  form.classList.remove(displayed);
  greeting.classList.add(displayed);
  let today = new Date(),
      hour = today.getHours();

  if (hour < 12) {
    greeting.innerText = `Good Morning, ${text}!`; 
  } else if (hour < 18) {
    greeting.innerText = `Good Afternoon, ${text}!`; 
  } else {
    greeting.innerText = `Good Evening, ${text}!`; 
  }
}


function loadName() {
  const currentUser = localStorage.getItem(user);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}
init();
