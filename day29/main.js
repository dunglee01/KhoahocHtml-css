//PROMISE

//1. const promise = new Promise
//2. promise.resolve()
//3. promise.reject()
//4. promise.all()

//fetch , setimeout , setinterval

//Có 3 trạng thái:
// pending
// Fullfilled
// Rejected

const prom1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, [4, 5, 6])
})
const prom2 = new Promise((resolve, reject) => {
  setTimeout(reject, 6000, 'có lỗi')
})

const promisA = Promise.all([prom1, prom2])

promisA
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
