const $toDoForm = document.querySelector('#toDoForm');
const $toDoInput = document.querySelector('#toDoForm input');
const $toDoList = document.querySelector('#toDoList');

const TODOS_KEY = 'toDos';

let toDos = [];

function submitToDoList(event) {
  event.preventDefault();

  let curToDos = toDos.length;

  if (!savedUsername) {
    alert('Log In, Please!!');
    return;
  }

  if (toDos.length > 9) {
    $toDoInput.value = '';
    alert('Too Many To Do List!!');
    return;
  }

  const newToDo = $toDoInput.value;
  $toDoInput.value = '';
  const newToDoObj = {
    id: Date.now(),
    text: newToDo,
  };
  toDos.push(newToDoObj);
  addToDoList(newToDoObj)
  saveToDos();
}

function addToDoList(newToDoObj) {
  const $li = document.createElement('li');
  const $span = document.createElement('span');
  const $btn = document.createElement('button');

  $li.id = newToDoObj.id;
  $span.innerText = newToDoObj.text;
  $btn.innerText = '✖';

  $btn.addEventListener('click', deleteToDo);

  $li.appendChild($span);
  $li.appendChild($btn);
  $toDoList.appendChild($li);
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

$toDoForm.addEventListener('submit', submitToDoList);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(addToDoList);
}