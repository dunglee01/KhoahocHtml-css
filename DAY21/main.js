// var first_name = "Lê";
// var last_name = "Dũng"
// var age = 20
// trong js toán tử chuỗi sẽ có toán tử + dùng để nối chuỗi
// console.log(first_name);
// console.log(last_name);


// console.log(first_name + " " + last_name + " " + age)

// console.log('Họ và tên: ' + first_name + ' ' + last_name)
// console.log('tuổi: ' + age)


// console.log(a == b)

// var result = a > b

// if (a != b) {
//   console.log('cau dk 1')
// } else if (a == b) {
//   console.log('câu dk 2')
// } else {
//   console.log('cau dieu kien 3');
// }
// {
//   if (a != b) {
//     console.log('data 1')
//     return
//   }

//   if (a == b) {
//     console.log('data 1')
//     return
//   }

//   console.log('data 2')

// }




//truthy
//Falsy

// var age = null
// console.log(age);

// console.log(typeof null)
// console.log(typeof undefined)

// if (null == undefined) {
//   console.log('truthy');
// } else {
//   console.log('falsy');
// }

// hoặc  || , && và, ! phủ định



// var a = 1
// var b = '1'
// var c = 1
// var d = 2

// var namming = ''





// if (a == d && a == c || b == d && a == c) {
//   console.log('true');
// } else {
//   console.log('false');
// }

// Trong js có 2 kiểu dữ liệu 
// 1. Kiểu dữ liệu tham chiếu  ( Phức tạp)
// - Function
// - Object 
//2. Kiểu dữ liệu tham trị ( nguyên thuỷ)
/*
- Number
- String
- boolean
- undefined
- null
- symbol
*/

var a = {
  name: 'dung',
  c: 1
}

console.log(typeof a);
var b = a

console.log(a === b);

var a = {
  name: 'dung',
  c: 1
}
var b = {
  name: 'dung',
  c: 1
}
console.log(a == b);
