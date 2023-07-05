const box_content = document.querySelector('[box-content]')
const search_text = document.querySelector('[search-text]')
const lupa = document.querySelector('[lupa]')
const notfound = document.querySelector('[notfound]')
const main_content = document.querySelector('[main-content]')
const image = document.querySelector('[image]')
const type_weather = document.querySelector('[type-weather]')
const box_details = document.querySelector('[box-details]')
const text_humidity = document.querySelector('[text-details-h]')
const text_windspeed = document.querySelector('[text-details-ws]')
const graus = document.querySelector('[graus]')
const notfound_image = document.querySelector('[notfound-image]')
const APIKey = '10b1abbf3980364216710d0b8753490a'

lupa.addEventListener('click', () => {
    let resultadoCelsius 
    const city = search_text.value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
    fetch(url)
        .then(res => res.json())
        .then(res => {
            if(res.cod !== '404') {
                switch (res.weather[0].main) {
                    case 'Clear':
                        image.src = 'imgs/clear.png'
                        break;
                    case 'Clouds':
                        image.src = 'imgs/Cloud.png'
                        break;
                    case 'Mist':
                        image.src = 'imgs/Mist.png'
                        break;
                    case 'Snow':
                        image.src = 'imgs/Snow.png'
                        break;
                    case 'Rain':
                        image.src = 'imgs/rain.png'
                        break;
                    default:
                        image.src = ''
                }
                notfound.style.display = 'none'
                resultadoCelsius = res.main.temp - 273,15
                graus.innerHTML = `${Math.floor(resultadoCelsius)}°C`
                type_weather.innerHTML = `${res.weather[0].description}`
                text_humidity.innerHTML = `${res.main.humidity}%`
                text_windspeed.innerHTML = `${res.wind.speed}m/s`
                box_details.style.display = 'flex'
                main_content.style.display = 'grid'
                box_content.style.height = '60vh'
            } else{
                box_details.style.display = 'none'
                main_content.style.display = 'none'
                notfound.style.display = 'grid'
                box_content.style.height = '60vh'
            }

        })
        .catch(e => console.log(e))
})
