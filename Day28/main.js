var inputs = document.querySelector('#input');
var btnAdd = document.querySelector('#add');
var messageError = document.querySelector('.error')
var ul = document.querySelector('ul');

var listTasks = [];
var completedTaskList = [];
var valueInput = '';

inputs.addEventListener('change', (eInput) => {
  messageError.classList.remove('show-error')
  valueInput = eInput.target.value
})

var checkDuplicateTask = task => !!listTasks.filter((item) => item === task).length

var checkCompletedTaskList = task => !!completedTaskList.filter((item) => item === task).length

btnAdd.addEventListener('click', (eClick) => {
  eClick.preventDefault()
  //Validate 
  if (checkDuplicateTask(valueInput)) {
    messageError.classList.add('show-error')
  } else {
    listTasks.push(valueInput)
    renderTasks(listTasks)
    inputs.value = ''
  }
})

var renderTasks = (tasks = []) => {
  let html = tasks.map((item, index) => {
    if (checkCompletedTaskList(item)) {
      return `       <li class="boxLi">
              <input checked='true' type="checkbox" value="${item}" onchange="completedTask(this.value)"/>
              <div class="line-through" id="${item}">${item}</div>
              <button disabled='true' class="${item}" onclick='removeTask(${index})'>X</button>
            </li>`
    } else {
      return `       <li class="boxLi">
              <input type="checkbox" value="${item}" onchange="completedTask(this.value)"/>
              <div id="${item}">${item}</div>
              <button class="${item}" onclick='removeTask(${index})'>X</button>
            </li>`
    }
  }
  )
  ul.innerHTML = html.join('')
}

var completedTask = (item) => {
  var divComplete = document.querySelector(`#${item}`)
  var btnDelete = document.querySelector(`.${item}`)
  divComplete.classList.toggle('line-through')

  if (checkCompletedTaskList(item)) {
    completedTaskList.splice(completedTaskList.indexOf(item), 1)
    btnDelete.removeAttribute('disabled');
  } else {
    completedTaskList.push(item)
    btnDelete.setAttribute('disabled', true);
  }
}

var removeTask = (index) => {
  listTasks.splice(index, 1);
  renderTasks(listTasks);
}



