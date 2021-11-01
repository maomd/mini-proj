// DOM variables
const clockContainer = document.querySelector(".front-clock");
const clockTitle = clockContainer.querySelector(".clock-title");

// clock display
function getTime() {
  const date = new Date();
  const minutes = addZero(date.getMinutes());
  const hours = addZero(date.getHours());
  const seconds = addZero(date.getSeconds());
  clockTitle.innerText = `${hours}:` + `${minutes}:` + `${seconds}`;
}

function addZero(num) {
  if (num < 10){
    return '0' + num
  }
  else return num
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
