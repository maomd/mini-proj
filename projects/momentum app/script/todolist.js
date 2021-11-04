//  DOM variables
let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');
let list = document.createElement('li');
 
function todolist(){
    
        list.classList.add('list-styling');
        list.innerText = inputField.value;
        toDoContainer.appendChild(list);
        list.addEventListener('click', function(){
        list.style.textDecoration = "line-through";
        })
        list.addEventListener('dblclick', function(){
        toDoContainer.removeChild(list);
        }) 
        saveTodos();    
        loadTodos ();  
 }

 function saveTodos () {
     let newTodo = inputField.value;
        if (localStorage.getItem('todos') == null) {
            localStorage.setItem('todos', '[]');
        }
     let oldTodo = JSON.parse(localStorage.getItem('todos'));
        oldTodo.push(newTodo);
        localStorage.setItem('todos',JSON.stringify(oldTodo));
        inputField.value = '';
 }

 function loadTodos () {
     if (localStorage.getItem('todos') != null) {
         document.querySelector('li').innerText = JSON.parse(localStorage.getItem('todos'));
     }
 }


 addToDoButton.addEventListener ('click', todolist)
 

 
 
     