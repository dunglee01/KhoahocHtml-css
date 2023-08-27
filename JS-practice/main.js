var addTask = document.querySelector('input')
var tasks = []
var lineThrougValue = []
addTask.addEventListener('change', function (e) {
    
    tasks.push(e.target.value)
    addTask.value = ''
    duplicateTask(tasks)
    renderTask(tasks)
    checkLinethrough(tasks)
})

function duplicateTask(tasks = []) {
    tasks.filter((task, index) => { 
        if (tasks.indexOf(task) !== index) {
            alert('đã tồn tại nhiệm vụ')
            tasks.pop()
        }
    })
}
    

function removetask() {
    var selectedbtn = document.querySelector('button')
    tasks.filter((task, index) => {
        if (selectedbtn.getAttribute('id') === task) {
            tasks.splice(index, 1)
        }
    })
    renderTask(tasks)
}

function completeTask(selectedValue) {
    // gach ten nhiem vu da tich
    var selectedLi = document.querySelector(`.${selectedValue}`) 
    selectedLi.classList.toggle('line-through')
    // disable button remove
    var selectedbtn = document.querySelector(`#${selectedValue}`)
    if (selectedLi.classList.contains('line-through')) {
        selectedbtn.setAttribute('disabled', true)
        checkLinethrough()
    } else {
        selectedbtn.removeAttribute('disabled')
    }
}

function checkLinethrough(tasks) {
    var selectedLine = document.querySelectorAll('.line-through')
    
}

function renderTask(tasks = []) {
    var content = '<ul>'
    tasks.forEach((task) => {
        content +=   `<li>  
                    <input type="checkbox" value="${task}" onchange='completeTask(this.value)'>
                    <div id='${task}'>${task}</div>
                    <button type='button' id='${task}' onclick='removetask()'>x</button>
                    </li>`
    })
    content += '</ul>'
    document.querySelector('#result').innerHTML = content


    // tasks.every((task, index) => {
    //     if (task !== lineThrougValue[index]) {
    //         renderTask(lineThrougValue)
    //     }
    // })
}