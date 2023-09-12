// 1. tao constructor
function dog (petname, age, color) {
    this.petname = petname
    this.age = age
    this.color = color
}

var goldendog = new dog('alo', 5, 'golden')
console.log(goldendog);

// 1.2 Có propertype 'bark'. là 1 hàm in ra tên name của chính nó + với chuỗi 'Go Go Go'

var blackdog = new dog('stu', 4, 'black')
dog.prototype.bark = blackdog.petname +" "+'Go Go Go'

console.log(blackdog.bark);

// 2. Có chuỗi 'Học lập trình để đi làm'
var stri = 'Học lập trình để đi làm'
// 2.1 tìm vị trí của chữ 'trình'

stri.indexOf('trình')

console.log(stri.indexOf('trình'));

// 2.2 Viêt câu điều  kiện kiểm tra xem trong chuỗi trên tồn tại chuỗi 'làm' thì sẽ nối thêm chuỗi '2023'
if (stri.includes('làm')) {
    stri2 = stri +' '+ '2023'    
}

console.log(stri2);

// 3. Viết 1 hàm kiểm tra xem 1 chuỗi có chứa dấu '@' hay không nếu có trả về true còn không có thì trả về false
var stri3 = 'hoc tap tot, lao dong tot'
function check(stri3) {
    if (stri3.includes('@')) {
        console.log('true');

    } else {
        console.log('false');
    }
}

check(stri3)

// 4. Viết 1 funtion tính bình phương của 1 số 
var i = 3
function double(i) {
    value = Math.pow(i, 2)
    console.log(value); 
}

double(i)
// 5. Viết function tính thế kỷ của 1 năm. Biết thế kỷ thứ nhất tính từ năm 1 đến 100.
var a = 2023
var b = a/100
function calcuyear(b) {
    if (b <= 1) {
        let value1 = 1
        console.log(value1);
        
    } else {
        value2 = b + 1
        value2.toFixed(0)
        console.log(value2.toFixed(0));
    }
}
calcuyear(b)

// 6. Cho 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu "..." ở cuối chuỗi.
var arr12 = [ 'a', 'b', 'a', 'd', 'e', 'f', 'g', 'h', 't', 'u', 'o', 'p', 'y', 'p', 'b']
function slicing(arr12) {
    for (let i = 0; i < 10; i++) {
        arr12.shift()
    }
    arr12.push('...')
}
slicing(arr12)
console.log(arr12);

// 7. Viết 1 function có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên.
var stri5 = 'huyle'
function nameupcase(stri5) {
    stri6 = stri5[0].toUpperCase()
    stri7 = stri5.slice(1)
    stri8 = stri6 + stri7
    console.log(stri8);
}
nameupcase(stri5)

// 8. Viết 1 function lấy ra 1 số nhỏ nhất trong 1 mảng các số.

var arr20 = [86, 7, 9, 4, 3, 45, 23, 87]
function minvalue(arr20) {
    arr21 = []
    
    for (let i = 0; i < arr20.length; i++) {
        min = arr20[0]
        b = arr20[i]
        if (min > b) {
            
            min = b
            
            arr21.push(min)
        }
        
    }
    console.log(arr21);
}
minvalue(arr20)
// - đang log ra tất cả kết quả 

// 9,10. Tạo 1 mảng từ 1 -> 10 -> Sử dụng vòng lặp for để xuất ra các số chẵn từ 2 đến 10.
var arr30 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function sochan(arr30) {
    arr31 = []
    for (let i = 0; i < arr30.length; i++) {
        if (arr30[i] % 2 === 0) {
            arr31.push(arr30[i])
        }
        
    }
    console.log(arr31);
}
sochan(arr30)

// 11. viết 1 function khi truyền tên vào sẽ tính được tổng số chữ cái ghép lại với nhau ,ví dụ abc thì tổng sẽ là 3

var arr111 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var nameinput = 'huy'
function tinhtong(nameinput) {
    var Dataexchange = nameinput.split('')
    var Tongchu = []
    var result = 0
    console.log(Dataexchange);
    for (let i = 0; i < Dataexchange.length; i++) {
        Tongchu.push(arr111.indexOf(Dataexchange[i]));
    }
    
    for (let i = 0; i < Tongchu.length; i++) {
        result += Number(Tongchu[i])
    }
    return result;
}
 tinhtong(nameinput)    

// 12. Viết 1 function tính cộng dồn số đến khi nào chỉ còn 1 chữ số ví dụ truyền vào 173 -> 11 -> 2.
var numb1 = 173
var numb2 = 0
var numb3 = ''
function layso(numb1) {
    numb5 = numb1.toString()
    numb4 = []
    for (let i = 0; i < numb5.length; i++) {
        numb4.push(numb5[i])  
    }
    console.log(numb4);
    for (let i = 0; i < numb4.length; i++) {
        numb2 += Number(numb4[i])
    }
   
    if (numb2 >= 10) {
        numb5 = numb2.toString()
        newnumber = []
        for (let i = 0; i < numb5.length; i++) {
            newnumber.push(numb5[i])  
        }
        numb2 = 0
        for (let i = 0; i < newnumber.length; i++) {
            numb2 += Number(numb4[i])
        }   
    } else {
        return numb2
    }
    console.log(numb2);
}   
layso(numb1)

// 13. Viết 1 function khi truyền vào tên "Nguyen Van A" thi sẽ tính được vị trí của chữ cuối của họ, chữ cuối của đệm và chữ cuối của tên
var name1 = 'Le Quy Huy'

function tinhvitri(name1) {
    var Dataexchange = name1.toLowerCase().split(' ')
    var vitri = []
    var result = []
    for (let i = 0; i < Dataexchange.length; i++) {
        vitri.push(Dataexchange[i][Dataexchange[i].length-1])
    }

    for (let i = 0; i < vitri.length; i++) {
        result.push(arr111.indexOf(vitri[i]))
    }
    return result;
}

tinhvitri(name1)
