var addTask = document.querySelector('input')
var tasks = []
addTask.addEventListener('change', function (e) {
    
    tasks.push(e.target.value)
    addTask.value = ''
    duplicateTask(tasks)
    renderTask(tasks)
})

function duplicateTask(tasks = []) {
    tasks.filter((task, index) => { 
        if (tasks.indexOf(task) !== index) {
            alert('đã tồn tại nhiệm vụ')
            tasks.pop()
        }
    })
}
    

function completeTask(tasks) {


    // tasks.forEach((task) => {
    //     var linethrough = document.getElementById(task)
    //     if (linethrough.textContent === task) {
    //         linethrough.classList.toggle('line-through')
    //     }   
    // })
    console.log(tasks);
}

function renderTask(tasks = []) {
    var content = '<ul>'
    console.log(tasks);
    tasks.forEach((task, index) => {
        console.log(tasks);
        content +=   `<li>
                    <input type="checkbox" onclick='completeTask(${task})'>
                    <div id='${task}'>${task}</div>
                    <button type='button' id='check2'>x</button>
                    </li>`
    })

    content += '</ul>'

    document.querySelector('#result').innerHTML = content
}