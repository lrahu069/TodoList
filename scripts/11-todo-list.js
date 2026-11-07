let todoList = [];

//Input Events
let input = document.querySelectorAll('.js-add-input');
for(let i=0; i<input.length; i++){
  input[i].addEventListener('keydown',(e)=>{
    if(e.key === 'Enter'){
      addTask();
    }
  });
}
document.querySelector('.js-add-button').addEventListener('click',()=>addTask());

displayTasks();

function displayTasks(){
  let todoHtml = '';
  for(let i=0; i<todoList.length; i++){
    todoHtml = todoHtml + `<div>${todoList[i].name}</div> <div>${todoList[i].date}</div> <div>${todoList[i].time}</div>
    <input type="checkbox" class="task-progress-checkbox">
    <button class="delete-button js-delete-button">Delete</button> 
    `;
  }

  document.querySelector('.view-task').innerHTML = `${todoHtml}`;

  //Output Events
  let del = document.querySelectorAll('.js-delete-button');
  for(let i=0; i<del.length; i++){
    del[i].addEventListener('click',()=>{
    todoList.splice(i,1);
    displayTasks();
    });
  }
}

function addTask(){
  let inputElement = document.querySelector('.js-input');

  if(inputElement.value === ''){
    return document.querySelector('.view-task').innerHTML = `<p>ERROR: ENTER SOME TASK!, task can't be empty</p>`;
  }else{
    let name = inputElement.value;
    let dateInputElement = document.querySelector('.js-date-input');
    let date = dateInputElement.value;
    let timeInputElement =document.querySelector('.js-time-input');
    let time = timeInputElement.value;
    todoList.push({name: name, date: date, time: time});
    displayTasks();
    inputElement.value = '';
  }
}

