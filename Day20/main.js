//1. khai bao bien
// var , let , const 
//2. comment 
//ctrl + /
// this is sum number
// const sumNumber = (a,b) => {
//   console.log(a + b)
// }

// console.log("abc cbd");

// alert('le viet dung')

//3. 1 số hàm built in của js
// - Alert : Dùng để thông báo 1 cái message hay kiểu dữ liệu nào đó cho browser
// ví dụ. 
// alert(1 + 'le viet dung')
// alert(2 + 'le viet dung')
// console.log('2.5');
// alert(3 + 'le viet dung')
// - console.log() Dùng để in ra dữ liệu trên màn hình (tab console)

// - Confirm : 

// confirm('Bạn có muốn thoát không ?')

//- prompt: 

// prompt('Họ và tên')

//- Set timeout 

// console.log('Huy 1')

// setTimeout(function () {
//   console.log('Huy 2')
// }, 5000)

// setTimeout(function () {
//   console.log('Huy 3')
// }, 3000)

// setTimeout(function () {
//   console.log('Huy 4')
// }, 4000)

// console.log('Huy 5')


// setInterval(function () {

//   console.log('huy 1huy 1huy 1huy 1huy 1huy 1huy 1huy 1huy 1huy 1huy 1huy 1huy 1huy 1huy 1huy 1huy 1huy 1huy 1huy 1huy 1huy 1huy 1');
// }, 1)

// Những toán tử trong javascript
// * , / , + , - , % , **
// Chỉ duy nhất toán tử + thì sẽ tự động nối lại với nhau 
// còn các toán tử khác khi không phải là số thì sẽ bị lỗi trả ra NaN
// toán tử + sẽ ưu tiên convert sang string 
// các toán tử khác sẽ ưu tiên convert về số 
// Number(): hàm number nhận vào string hoặc number, Dùng để ép kiểu string sang kiểu number
// String(): hàm string nhận vào string hoặc numer , Dùng để ép kiểu về string
// --a : trừ 1 đơn vị trước rồi mới in ra giá trị a
// a-- : in ra giá trị a trước rồi mới trừ đi 1 giá trị 





// Những toán tử so sánh trong javascript
// && , || , > , < , == , === , >= , <= 

// var a = 102222222
// var b = "20"
// var c = 'abc2'
// var d = '1'

// console.log(String(a));

// console.log(b);
// console.log(Number(b));

// console.log(a + Number(b));

// console.log(String(a));

var a = '10'
var b = 10

// == , === 

//console.log(a == b);// so sánh giá trị (Lỏng lẻo)true
//console.log(a === b);// so sánh theo kiểu dữ liệu và giá trị (nghiêm ngặt) false 


// console.log(a != b);
// console.log(a !== b);


// console.log(typeof a)
// console.log(typeof b)

// console.log(Number(a) <= b);

console.log(a !== 10 ? 'Lê Dũng' : "Huy Lê");
//----------condition ? value true : value false