// 1: Tạo Mảng chứa 5 phần tử [1,2,3,4,5]
let hw1 = [1, 2, 3, 4, 5]

let hw2 = [hw1.pop() ,hw1.shift()]

hw2.join('-')

hw1.push("alo")

hw1.splice(1, 0, 'Huy')

let hw3 = [[1, 2], [3, 4], [5, 6]]

let hw4 = hw3.pop()
let hw7 = hw4.pop()
let hw5 = hw3.pop()
let hw8 = hw5.pop()
let hw6 = hw3.pop()
let hw9 = hw6.pop()
    combine = hw3.concat(hw4,hw5,hw6,hw7,hw8,hw9)
console.log(combine);