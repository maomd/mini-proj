// GLOBAL VARIABLES
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
addToDoButton.style.visibility = "hidden";

let storedTodo = JSON.parse(localStorage.getItem('todoList'))
let unorderedList = document.querySelector('.todo-list-detail')
let todoArr = []

if(storedTodo) {
    todoArr = [...storedTodo]
} else {
    if(!storedTodo){
        console.log('No stored todos')
    }
}
const handleTodos = function () {
    let inputValue = inputField.value
    let todoObj = {
        todo: inputValue
    }
    if (!inputValue) {
        console.log('todo is empty')
    } else {
        todoArr.push(todoObj)
        inputValue = "";
        localStorage.setItem('todoList',JSON.stringify(todoArr))
        location.reload()
    }
}

if (storedTodo) {
    storedTodo.forEach(i => {
        let li = document.createElement('li')
        li.className = 'listName'
        li.textContent = i.todo
        unorderedList.append(li)
        li.addEventListener('click', function(){
        li.style.textDecoration = "line-through";
        })
        li.addEventListener('dblclick', function(){
            unorderedList.removeChild(li);    
        }) 
    });
}


const addTodo = inputField.addEventListener("keyup", function(e) {
    if(event.key === "Enter") {
        e.preventDefault();
        addToDoButton.click();
        handleTodos();
    }
});




   

 
 
     