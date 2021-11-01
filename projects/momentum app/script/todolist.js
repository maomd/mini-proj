//  DOM variables
 let addToDoButton = document.getElementById('addToDo');
 let toDoContainer = document.getElementById('toDoContainer');
 let inputField = document.getElementById('inputField');
 
 function todolist(){
     var list = document.createElement('li');
     list.classList.add('list-styling');
     list.innerText = inputField.value;
     list.style.listStyle = "none";
     toDoContainer.appendChild(list);
     inputField.value = '';
     list.style.padding = "0.5rem"
     list.style.fontSize = "2rem"
     list.addEventListener('click', function(){
     list.style.textDecoration = "line-through";
     })
     list.addEventListener('dblclick', function(){
     toDoContainer.removeChild(list);
     })  
 }
 
 addToDoButton.addEventListener ('click', todolist)
 

 
 
     