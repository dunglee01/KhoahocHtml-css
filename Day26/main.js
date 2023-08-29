//DOM 
//1. Element

//2. Attributes
//3. Text


// console.log(document.getElementById('heading'))
// console.log(document.getElementsByClassName('heading1'))

// console.log(document.getElementsByTagName('h1'))


// console.log(document.getElementsByClassName('heading1'))

// console.log(document.querySelectorAll('#box2 .heading3'))

// document.write('HELLO WORLD')

var heading = document.getElementById('demo')
// heading.innerHTML = '<i>le viet dung</i>'


var btn = document.querySelector('.myBtn')

btn.addEventListener('click', (e) => {
  e.preventDefault()
  heading.setAttribute('id', 'dungle')
})



