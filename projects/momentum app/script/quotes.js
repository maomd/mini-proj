const quotesMain = document.querySelector(".quotes-container")
const quoteContainer = document.querySelector(".quotes-container2")
const quoteText = document.createElement("p")
quoteContainer.appendChild(quoteText)
const newQuote = document.querySelector(".new-quote")


  async function getQuote () {
  quoteContainer.style.display = 'block'
  const res = await fetch("https://type.fit/api/quotes")
  const quotes = await res.json()
  const num = Math.floor(Math.random()*quotes.length)
  const item = quotes[num]
  const quote = item.text
  quoteForm.style.visibility = 'hidden'
  quoteText.innerHTML = ` "${quote}" `
}

newQuote.addEventListener('click', getQuote)
getQuote()

const addQuote = document.querySelector(".add-quote")
const quoteForm = document.querySelector("#quote-form")
const quoteInput = document.querySelector("#quote-input")
const quoteText2 = document.createElement("p")
const quoteAdded = quoteText2.innerHTML

quoteForm.appendChild(quoteText2)

addQuote.addEventListener('click', addedQuote)

function addedQuote() {
  quoteForm.style.visibility = 'visible'
  quoteContainer.style.display = 'none'
  quoteInput.value = `"${quoteAdded}"`
}

quoteForm.addEventListener('submit', function(e){
  e.preventDefault()
  quoteText.innerHTML = quoteInput.value
  quoteForm.style.visibility = 'hidden'
  quoteContainer.style.display = 'block'
})