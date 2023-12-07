const containerTasks = document.querySelector("#sect-tasks");
const frmTask = document.getElementById("frm-task");
const modal = document.getElementById("modal");

const title = document.getElementById("title-task");
const task = document.getElementById("Por-hacer");
const assignedTo = document.getElementById("assigned-to"); // Nuevo campo

frmTask.addEventListener("submit", createCard);

loadTodo();

function createCard(event) {
  event.preventDefault();
  const id = "task" + (getlastindex() + 1);
  saveTodo(title.value, task.value, assignedTo.value);
  renderTodo(title.value, task.value, assignedTo.value, id);
  
  
  }


function closeModal() {
  if (modal) {
    modal.close();
  }
}

function openModal() {
  if (modal) {
    modal.showModal();
  }
}

function getlastindex() {
  return parseInt(localStorage.getItem("todosIndex") ?? 0);
}

function setlastindex(index) {
  localStorage.setItem("todosIndex", index);
}

function saveTodo(title, task, assignedTo) {
  setlastindex(getlastindex() + 1);
  localStorage.setItem("task" + getlastindex(), [title, task, assignedTo]);
}

function loadTodo() {
  for (let i = 1; i <= getlastindex(); ++i) {
    let todo = localStorage.getItem("task" + i);
    if (todo == null) {
      continue;
    }
    todo = todo.split(",");
    const title = todo[0];
    const task = todo[1];
    const assignedTo = todo[2];
    const id = "task" + i;
    renderTodo(title, task, assignedTo, id);
  }
}

function renderTodo(title, task, assignedTo, id) {
  const card = document.createElement("article");
  card.classList.add("card");
  card.setAttribute("id", "card");

  const headerCard = document.createElement("div");
  headerCard.classList.add("header-card");

  const closeCard = document.createElement("button");
  const titleCard = document.createElement("h2");
  titleCard.textContent = title;
  closeCard.classList.add("close");
  closeCard.id = "close";
  closeCard.textContent = "x";

  const containerCard = document.createElement("div");
  containerCard.classList.add("container-card");

  const descriptionCard = document.createElement("p");
  descriptionCard.textContent = task;

  const assignedToLabel = document.createElement("p");
  assignedToLabel.textContent = "Tarea asignada a: ";
  assignedToLabel.style.fontWeight = "bold";

  const assignedToValue = document.createElement("span");
  assignedToValue.textContent = assignedTo;
  assignedToValue.style.color = "blue";

  const footerCard = document.createElement("div");
  const reference = document.createElement("a");
  reference.setAttribute(
    "href",
    "https://github.com/keycode-team/task_management_software"
  );
  reference.textContent = "KeyCode Team";

  headerCard.appendChild(titleCard);
  headerCard.appendChild(closeCard);

  containerCard.appendChild(descriptionCard);
  containerCard.appendChild(assignedToLabel);
  containerCard.appendChild(assignedToValue);

  footerCard.appendChild(reference);

  card.appendChild(headerCard);
  card.appendChild(containerCard);
  card.appendChild(footerCard);

  containerTasks.appendChild(card);

  closeCard.addEventListener("click", () => {
    card.style.display = "none";
    localStorage.removeItem(id);


  });

  closeModal();

  frmTask.reset();


  const containerDrop = document.querySelectorAll('.dropzone');
let draggabletodo = null;

document.querySelectorAll('.card').forEach((card) => {
  card.setAttribute('draggable', 'true');
  card.addEventListener('dragstart', dragStart);
  card.addEventListener('dragend', dragEnd);
});

containerDrop.forEach((status) => {
  status.addEventListener('dragover', dragOver);
  status.addEventListener('dragenter', dragEnter);
  status.addEventListener('dragleave', dragLeave);
  status.addEventListener('drop', dragDrop);
});

function dragStart() {
  draggabletodo = this;
}

function dragEnd() {
  draggabletodo = null;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter() {
  this.style.border = '2px dashed #000'; 
}

function dragLeave() {
  this.style.border = '';
}

function dragDrop() {
  if (this.classList.contains('Doing')) {
    draggabletodo.style.background = 'green';
  } else if (this.classList.contains('Done')) {
    draggabletodo.style.background = 'red';
  } else {
    draggabletodo.style.background = '#457b9d';
  }

  this.style.border = '';
  this.appendChild(draggabletodo);
}

}
  
  
  

