
//detructuring


// const arr = [1, 2, 3, 4, 5]

// // console.log(arr[1])
// const [a, ...huy] = arr



// console.log(huy)

//fill 

// const arr = [1, 2, 3, 4, 5, 6]

// console.log(arr.fill(0, 1, 2))


// Rest Parameters

// function sum(a, b, ...rest) {
//   let total = 0;

//   console.log(xxxx)

//   // for (const arg of theArgs) {
//   //   total += arg;
//   // }
//   // return total;
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 'asdasdas', 'zxczxczxc'));

//Spread 

// const a = [1, 2, 3]
// const b = [4, 5, 6]

// const result = [...a, ...b]

// const obj1 = {
//   names: '10a',
//   age: '9t'
// }
// const obj2 = {
//   address: 'HN',
//   Career: "1"
// }

// const combine = {
//   ...obj1,
//   ...obj2
// }



// console.log(combine)


// const person = {
//   bophan: 'chan',
//   noi: 'yes',
// }

// const person1 = {
//   names: 'huy'
// }

// const person2 = {
//   names: 'dung'
// }

// const combinePerson1 = {
//   ...person1,
//   ...person
// }

// console.log(combinePerson1)

// const a = { a: 1, b: 2, c: 3 }

// const { a: a1, ...spread } = a


// const newObj = {
//   ...spread,
//   new: 1
// }

// console.log(newObj)


// Sort , reverse

// const a = ['huy', 'dung', 'an']

// console.log(a.sort((a, b) => a - b))
// console.log(a.reverse())


//JSON 

// const js = '{"name": "TopDev","title": "Việc làm IT cho Top Developers","description": "là hệ sinh thái bao gồm cộng đồng các Top Developers."}';

// const trans = JSON.parse(js)


// console.log(trans)


// const a = {
//   names: 'dung',
//   age: '10'
// }

// const transJs = JSON.stringify(a)

// console.log(transJs)

//async await \

//try catch




// const a = async () => {
//   try {
//     //logic
//     const getInfo = await apiInfo; // looix
//     const data = getInfo
//   } catch (e) {
//     console.log(e)
//   }

// }


const URLs = 'https://petstore.swagger.io/v2'
const idPet = 1
const newPet = {
  id: 1,
  category: {
    id: 1,
    name: "longngan"
  },
  name: "meo",
  photoUrls: [
    "string"
  ],
  tags: [
    {
      id: 1,
      name: "longdai"
    }
  ],
  status: "available"
}



const results = async (urls) => {
  try {
    const data = await fetch(`${urls}/pet/${idPet}`);
    const a = await data.json();
    console.log(a);
  } catch (error) {
    console.log(`error`, error);
  }
}

results(URLs)


const btn = document.querySelector('#btn');
const mess = document.querySelector('.mess');

const handleAddPet = async (urls) => {

  try {
    const res = await fetch(`${urls}/petxxxx`, {
      method: 'POST',
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPet)
    })

    const a = await res.json()

    console.log(a)

    mess.innerHTML = 'them pet  thanhf coong'

  } catch (error) {
    mess.innerHTML = 'them pet that bai'
  }

}

btn.addEventListener('click', (e) => {
  e.preventDefault();

  handleAddPet(URLs)

})









