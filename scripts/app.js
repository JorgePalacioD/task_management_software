const containerTasks = document.querySelector('#sect-tasks')
const frmTask = document.getElementById('frm-task')

const title = document.getElementById('title-task')
const textTask = document.getElementById('Por-hacer')

frmTask.addEventListener('submit', createCard)

function createCard(event) {

  event.preventDefault()
  console.log(event);

  const card = document.createElement('article')
  card.classList.add('card')
  card.setAttribute('id','card')

  const headerCard = document.createElement('div')
  headerCard.classList.add('header-card')

  const closeCard = document.createElement('button')
  const titleCard = document.createElement('h2')
  titleCard.textContent = title.value
  closeCard.classList.add('close')
  closeCard.id = 'close'
  closeCard.textContent = 'x'

  const containerCard = document.createElement('div')
  containerCard.classList.add('container-card')

  const descriptionCard = document.createElement('p')
  descriptionCard.textContent = textTask.value
  const footerCard = document.createElement('div')
  const reference = document.createElement('a')
  reference.setAttribute('href','')
  reference.textContent = 'KeyCode Team'

  headerCard.appendChild(titleCard)
  headerCard.appendChild(closeCard)

  containerCard.appendChild(descriptionCard)

  footerCard.appendChild(reference)

  card.appendChild(headerCard)
  card.appendChild(containerCard)
  card.appendChild(footerCard)

  containerTasks.appendChild(card)
  
  closeCard.addEventListener('click', () => {
    card.style.display = 'none'
  })  
}



