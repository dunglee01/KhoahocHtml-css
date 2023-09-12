// http://api.weatherapi.com/v1/current.json?key=03e5fe9a0a864919bd9145549233008&q=${Citysearch}&aqi=no

const URLs = `http://api.weatherapi.com/v1/current.json?key=03e5fe9a0a864919bd9145549233008&aqi=no`

const input = document.querySelector('input');
const result = document.querySelector('.result')
const city = document.querySelector('.city');
const valueSearch = ''
let listResult = ''

const handleSearchCity = async (value) => {
  const res = await fetch(`${URLs}&q=${value}`)

  if (res.status === 200) {
    const data = await res.json();
    listResult = data.location.name
    renderResult()
  } else {
    listResult = ''
    renderResult()
  }
}

input.addEventListener('input', (event) => {
  //cắt khoảng trắng
  const searchTerm = input.value.trim();

  if (searchTerm.length > 0) {
    handleSearchCity(searchTerm)
  }
})

const renderResult = () => {
  result.innerHTML = `<div class="item-result">${listResult}</div>`

  if (listResult.length) {
    result.classList.add('show')
  } else {
    result.classList.remove('show')
  }

}





