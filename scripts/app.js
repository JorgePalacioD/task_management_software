const containerTasks = document.querySelector('#sect-tasks');
const frmTask = document.getElementById('frm-task');
const modal = document.getElementById('modal');

const title = document.getElementById('title-task');
const textTask = document.getElementById('Por-hacer');
const assignedTo = document.getElementById('assigned-to'); // Nuevo campo

frmTask.addEventListener('submit', createCard);

function createCard(event) {
  event.preventDefault();

  const card = document.createElement('article');
  card.classList.add('card');
  card.setAttribute('id', 'card');

  const headerCard = document.createElement('div');
  headerCard.classList.add('header-card');

  const closeCard = document.createElement('button');
  const titleCard = document.createElement('h2');
  titleCard.textContent = title.value;
  closeCard.classList.add('close');
  closeCard.id = 'close';
  closeCard.textContent = 'x';

  const containerCard = document.createElement('div');
  containerCard.classList.add('container-card');

  const descriptionCard = document.createElement('p');
  descriptionCard.textContent = textTask.value;

  const assignedToLabel = document.createElement('p');
  assignedToLabel.textContent = 'Tarea asignada a: ';
  assignedToLabel.style.fontWeight = 'bold';

  const assignedToValue = document.createElement('span');
  assignedToValue.textContent = assignedTo.value; 
  assignedToValue.style.color = 'blue';

  const footerCard = document.createElement('div');
  const reference = document.createElement('a');
  reference.setAttribute('href', 'https://github.com/keycode-team/task_management_software');
  reference.textContent = 'KeyCode Team';

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

  closeCard.addEventListener('click', () => {
    card.style.display = 'none';
  });

  closeModal();

  frmTask.reset();
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