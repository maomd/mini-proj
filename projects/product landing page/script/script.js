const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

const button = document.getElementById ('submit') 

function message () {
  console.log('this button has been clicked');
}

button.addEventListener('click', message) {
  alert(message);
}