//GLOBAL VARIABLES
const square = document.querySelectorAll('.square');
let currentIndex = document.querySelector('.indexMovement');
let gameActive = true;
let currentPlayer = "🧟‍♂️";
let empty = "";
let boardState = [empty,empty,empty,
                  empty,empty,empty,
                  empty,empty,empty];
const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

// FUNCTION FOR THE WINNING MESSAGE
const winMessage = function() {
    return currentPlayer + " is the Winner!";
}

// FUNCTION FOR THE DRAW MESSAGE
const drawMessage = function() {
    return "Draw!";
}

// FUNCTION FOR THE PLAYER TURN MESSAGE
const currentPlayerTurn = function() {
    return "It's " + currentPlayer + "'s turn";
}

// ADD EVENT LISTENER TO EACH SQUARES
document.querySelectorAll('.square').forEach(function(square) {
    square.addEventListener('click', squareClick)
});

// MOVE STORAGE
let movements = []
document.querySelector('.board').addEventListener('click',function() {
    
    let elements = document.querySelectorAll('.square') 
    // elements.forEach(function(i){
    //     console.log(i.innerHTML);
    //     }) 
    let firstLayer = [];
    let secondLayer = [];
    let thirdLayer = [];

    firstLayer.push(elements[0].innerHTML);firstLayer.push(elements[1].innerHTML);firstLayer.push(elements[2].innerHTML);
    secondLayer.push(elements[3].innerHTML);secondLayer.push(elements[4].innerHTML);secondLayer.push(elements[5].innerHTML);
    thirdLayer.push(elements[6].innerHTML);thirdLayer.push(elements[7].innerHTML);thirdLayer.push(elements[8].innerHTML);

    let movement = [[...firstLayer],[...secondLayer],[...thirdLayer]]
    movements.push(movement)
    console.log(movements)

    //SET STATE VALUE OF INDEX HIDDEN ELEMENT
    currentIndex.style.color = 'black'
    currentIndex.value = movements.indexOf(movements[movements.length - 1])
    console.log(currentIndex.value) 
})

// PREVIOUS BUTTON 
let previousMove = document.querySelector('.previousMove')
    previousMove.addEventListener('click',function(){
        if (currentIndex.value > 0) {
            currentIndex.value = parseInt(currentIndex.value) - 1
            console.log(currentIndex.value)
        }
    })

// NEXT BUTTON
let nextMove = document.querySelector('.nextMove')
    nextMove.addEventListener('click',function(){
        let lastIndex = movements.indexOf(movements[movements.length - 1])
        if(currentIndex.value = parseInt(currentIndex.value) + 1)
        console.log(currentIndex.value)
    })

    


// FUNCTION FOR THE SQUARE CLICK
function squareClick(clickedSquareEvent) {
    const clickedSquare = clickedSquareEvent.target;
    const clickedSquareIndex = parseInt(clickedSquare.getAttribute('data-square-index'));
    if(boardState[clickedSquareIndex] !== "" || !gameActive) {
        return;
    }
    squarePlayed(clickedSquare, clickedSquareIndex);
    result();
}

// FUNCTION EVERY AFTER CLICKED SQUARE
function squarePlayed(clickedSquare, clickedSquareIndex) {
    boardState[clickedSquareIndex] = currentPlayer;
    clickedSquare.innerHTML = currentPlayer;
}

// FUNCTION FOR PLAYER SWITCH
const turnIndicator = document.querySelector('.turnIndicator');
turnIndicator.innerHTML = currentPlayerTurn();

function playerSwitch() {
    if (currentPlayer === "🧟‍♂️") {
        currentPlayer = "🌻";
    } else {
        currentPlayer = "🧟‍♂️";
    }
    turnIndicator.innerHTML = currentPlayerTurn();
}

// FUNCTION FOR DISPLAY RESULTS
function result() {
    let roundWon = false;
    for (let i=0; i<=7; i++) {
        const winCondition = winningConditions[i];
        let a = boardState[winCondition[0]];
        let b = boardState[winCondition[1]];
        let c = boardState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }
    if(roundWon) {
        turnIndicator.innerHTML = winMessage();
        gameActive = false;
        return;
    }
    let roundDraw = !boardState.includes("");
    if (roundDraw) {
        turnIndicator.innerHTML = drawMessage();
        gameActive = false;
        return;
    }
    playerSwitch();
}

// ADD EVENT LISTENER TO RESET BUTTON
document.querySelector('.reset').addEventListener('click', resetGame);

// FUNCTION FOR RESET GAME
function resetGame () {
    gameActive = true;
    currentPlayer = "🧟‍♂️";
    boardState = [empty,empty,empty,empty,empty,empty,empty,empty,empty];
    turnIndicator.innerHTML = currentPlayerTurn();
    square.forEach(function(square) {
        square.innerHTML = empty;
    });

    movements = []
}

document.querySelectorAll('.square').addEventListener('click')

