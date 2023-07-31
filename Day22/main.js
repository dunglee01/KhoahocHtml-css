// var a = 20
// var b = "100"

// var c = new Number(b)
// var e = Number(b)
// console.log(c);
// console.log(Number(b));
// console.log(+b);

// console.log(Number(b) + a)

// var e = {}
// var f = []
// var h = function () {

// }

// console.log(typeof h)


// console.log(typeof a)

// console.log(typeof d.toString())

// var sum = a + Number(b)

// console.log(sum.toString())
// toFixed() 


// LÀM VIỆC VỚI MẢNG ARRAY []
// Mảng là 1 tập hợp bên trong chưa các phần tử có giá trị , Các phần tử trong mảng cách nhau bởi dấu ","
// .length để lấy ra độ dài của mảng 
// Kiểu dữ liệu của Array là Object
// Index của Array là vị trí phần tử nằm bên trong mảng
// Trong Array vị trí của phần tử bắt đầu từ Index 0
// ví dụ về mảng


// ["1", "abc", 1, true, false , {} , null , undefined]

//1 : Cách tạo mảng 

// var a = [1, 2, 3, [1], "abc", {}, null, undefined];

// var b = new Array([1], 1, 2, 3)

// var c = "Huy"

// var d = {
//   a: "huy"
// }

// var e = 123123

// console.log(a.length);
// console.log(b.length)
// console.log(c.length)
// console.log(d.length)
// console.log((e + '').length)

// console.log(typeof b)

// var a = [1, 2, 3, 3, 4, 5, 5, 5, 5, 5, 5, 9, 5, 5, 5, 5, 5, 5, 9, 5, 5, 5, 5, 5, 5, 9, 5, 5, 5, 5, 5, 5, 9, 5, 5, 5, 5, 5, 5, 9, 5, 5, 5, 5, 5, 5, 9, 5, 5, 5, 5, 5, 5, 9, 5, 5, 5, 5, 5, 5, 9, 5, 5, 5, 5, 5, 5, 9, 5, 5, 5, 5, 5, 5, 9, 5, 5, 5, 5, 5, 5, 122]
// console.log(a[2]);

// Cách làm việc với mảng 
/*
To String
Join
Pop
Push
Shift
UnShift
Splicing, cắt
Concat
Slicing
*/

// var a = [1, 2, 3, [], null, {}, undefined, Symbol, function () { }]

// console.log(a.toString())

//Join: Convert Arrays thành chuỗi theo tham số truyền vào

//Pop: lấy ra phần tử cuối cùng trong mảng 
//Shift lấy ra phần tử đầu tiền trong mảng , ảnh hưởng tới mảng gốc, mảng gốc sẽ mất đi phần tử đầu tiên
//unshift: thêm phần tử vào đầu mảng, ảnh hưởng tới mảng gốc
//Push: Thêm phần tử vào cuối mảng , Ảnh hưởng tới mảng gốc 
//Concat: 


// var a = FName.shift()

// console.log(a);
// console.log(FName);




// console.log(FName);

// var category = ['iPhone', 'macbook']
// var product = ['nokia', 'samsung', ['abc'], ['abc']]


// FName.push('abvc', '123123123', 123123123, 'zxcxzccxz')

// FName.unshift(1, 123123, 123123, 12312312, 123123123, 123123123, 123123)
// console.log(FName);

// var newArr = []

// var test = product[product.length - 1]
// var test2 = product.pop()

// console.log(test2);
// console.log(product);

// var combineArr = product.concat(test)

// var result = category.concat(combineArr)

// console.log(result);

// var kho = category.concat(product)

// console.log(kho);

//splice cắt, bao gồm 2 tham số: Tham số đầu tiền là vị trí muốn cắt  

// slice 


// var category = [1, 2, 3]

// console.log(category.slice(1, 2))

// console.log(category);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.splice(2, 1, 'dungle');

// console.log(fruits);

let arr = [[1, 2], [3, 4], [5, 6], [5, 6], [5, 6], [5, 6]]

let results = []

let arr1 = arr[0]
let resultArr1 = arr1.join(',')
console.log(resultArr1);

let arr2 = arr[1]
let resultArr2 = arr2.join(',')
console.log(resultArr2);

let arr3 = arr[2]
let resultArr3 = arr3.join(',')
console.log(resultArr3);


results.push(...arr1, ...arr2, ...arr3)

console.log(results);