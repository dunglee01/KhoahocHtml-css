let search = document.querySelector('input')
let city = document.querySelector('.city')
let time = document.querySelector('.time')
let status = document.querySelector('.status')
let temp = document.querySelector('.temp')
let visibility = document.querySelector('.visibility span')
let wind = document.querySelector('.wind span')
let humidity = document.querySelector('.humidity span')
let content = document.querySelector('.description')
let result = document.querySelector('.result')
let container = document.querySelector('.container')
let descriptionImage = document.querySelector('.container-content')
const URLs = `http://api.weatherapi.com/v1/current.json?key=03e5fe9a0a864919bd9145549233008&aqi=no`
let listResult = ''

const handleSearchCity = async (value) => {
    const res = await fetch(`${URLs}&q=${value}`)
    if(res.status == 200) {
        const data = await res.json();
        content.classList.remove('hide')
        city.innerText = data.location.name + ',' 
        time.innerText = data.location.localtime
        status.innerText = 'Status:' + ' ' + data.current.condition.text
        temp.innerText = data.current.temp_c
        visibility.innerText = data.current.vis_km + 'km'
        wind.innerText = data.current.wind_mph*0.44704 + 'm/s'
        humidity.innerText = data.current.humidity + '%'
        listResult = data.location.name
        renderResult()
        
        if (temp.innerText > 25) {
            container.setAttribute('id', 'hot')
            descriptionImage.setAttribute('id', 'hot-content')
        }
        
        if (temp.innerText <= 25 && temp.innerText > 20) {
            container.setAttribute('id', 'autumn')
            descriptionImage.setAttribute('id', 'autumn-content')
        } 
        
        if (temp.innerText <= 20) {
            container.setAttribute('id', 'winter')
            descriptionImage.setAttribute('id', 'winter-content')
        }

    }else {
        content.classList.add('hide')
        listResult= ''
        renderResult()
    }
}

search.addEventListener('input',(event) => {
    const searchTerm = search.value.trim()
    if(searchTerm.length > 0) {
        handleSearchCity(searchTerm)
    }
})

search.addEventListener('focus', (e) => {
    result.classList.remove('hide')
})


search.addEventListener('blur', (e) => {
    result.classList.add('hide')
})

const renderResult = () => {
    result.innerHTML = `<div class="item-result" onclick=transferValue(${listResult})>${listResult}</div>`
    if (listResult.length) {
      result.classList.remove('hide')
    } else {   
      result.classList.add('hide')
    }
  }

const transferValue = (value) => {
    search.value = value
}