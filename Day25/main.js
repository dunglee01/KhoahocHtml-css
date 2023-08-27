//ARRAY METHODS

//1.forEach()
//2.every()
//3.some()
//4.find()
//5.filter()
//6.map()
//7.reduce()





// var a = arrNumber.forEach(function (value, index, array) {

//   value * 2

//   console.log(value * 2);

//   return 'a'
// })

// console.log(arrNumber)


// console.log(a)
var arrNumber = [6, 7, 8, '9', '10']


// if (arrNumber.every(function (value) {
//   console.log(value)
//   return typeof value === 'number'
// })) {
//   console.log('dung')
// } else {
//   console.log('sai')
// }

//some()
var info = [
  { name: 'ledung', age: '10' },
  { name: 'ledung', age: '10' },
  { name: 'ledung', age: '10' },
  { name: 'ledung', age: '10' },
  { name: 'ledung', age: '10' },
  { name: 'ledung', age: '10' },
  { name: 'ledung', age: '10' },
  { name: 'ledung', age: '10' },
  { name: 'ledung', age: '20' }
]


//filter

var results = info.filter(function (value) {
  return value.age === '10111'
})


console.log(results);



// var results = info.find(function (value) {
//   return value % 2 === 0
// })


// console.log(results)




// var a = 'huy'


// console.log(a.split(''));
// console.log(a.split('').map(function (value, index) {
//   if (index === 0) {
//     return value.toUpperCase()
//   } else {
//     return value
//   }
// }).join(''))

// 'le viet dung'

// var a ='le viet dung'

// console.log(a.split(' ').map(function (value, index) {


//   return value.charAt(0).toUpperCase() + value.slice(1)
// }).join(' '))

//reduce

var arrNew = [1, 2, 3, 4]

console.log(arrNew.reduce(function (a, b) {

  console.log(arrNew[0]);

  return a = b

}, arrNew[0]))









// if (info.some(function (value) {
//   return value.industry === 'abc'
// })) {
//   console.log('abc')
// } else {
//   console.log('none')

// }


//chua bai tap ve nha

function sum(number) {

  var convertData = number.toString().split('')
  var currentValue = 0

  for (var i = 0; i < convertData.length; i++) {
    currentValue += Number(convertData[i])
  }

  if (currentValue < 10) {
    return currentValue
  } else {
    return sum(currentValue)
  }

}

console.log(sum(5427923))