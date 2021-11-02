//  DOM variables
 let addToDoButton = document.getElementById('addToDo');
 let toDoContainer = document.getElementById('toDoContainer');
 let inputField = document.getElementById('inputField');
 
 function todolist(){
     var list = document.createElement('li');
     list.classList.add('list-styling');
     list.innerText = inputField.value;
     toDoContainer.appendChild(list);
     inputField.value = '';
     list.addEventListener('click', function(){
     list.style.textDecoration = "line-through";
     })
     list.addEventListener('dblclick', function(){
     toDoContainer.removeChild(list);
     })  
 }
 
 addToDoButton.addEventListener ('click', todolist)
 

 
 
     