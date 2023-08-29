//1. DOM Css
//document.style
// var h1 = document.querySelector('h1')
// h1.style.color = 'red'
// h1.style.fontSize = '20px'
// console.log()
// var box = document.querySelector('div')
// Object.assign(box.style, {
//   width: '150px',
//   height: '150px',
//   backgroundColor: 'red'
// })
// box.style.width = '150px'
// box.style.height = '150px'
// box.style.backgroundColor = 'red'



//2. ClassList Property
//    1. Add
//    2. Contains
//    3. Remove
//    4. Toggle


// var box = document.querySelector('div')
// var li = document.querySelectorAll('li')
// for (var i = 0; i < li.length; i++) {
//   if (li[i].textContent === 'Javascript') {
//     li[i].classList.add('js')
//   } else if (li[i].textContent === 'PHP') {
//     li[i].classList.add('php')
//   } else {
//     li[i].classList.add('ruby')
//   }
// }

// console.log(
//   box.classList.contains('box-3')
// )

// if (!box.classList.contains('box-1')) {
//   box.classList.add('box-1')
// }

// setTimeout(() => {
//   if (box.classList.contains('box-1')) {
//     box.classList.remove('box-1', 'box')
//   }
// }, 3000)


// var h1 = document.querySelector('h1')
// h1.addEventListener('click', function () {
// h1.classList.toggle('h1')
// console.log('tôi đang click vào h1')

// })
// setInterval(() => {
//   h1.classList.toggle('h1')
// }, 300)

//3. DOM Event 
//    1. Attribute events
//    2. Assign event using the element node


// var myFunction = function () {
//   h1.classList.toggle('h1')
// }


var input = document.querySelector('input')
var button = document.querySelector('button')
var ul = document.querySelector('ul')

var value = ''

input.addEventListener('change', function (e) {
  value = e.target.value
})

button.addEventListener('click', function (event) {
  var li = document.createElement('li')
  li.innerText = value
  ul.appendChild(li)
  input.value = ''
})
