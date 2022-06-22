const showWeatherBtn = document.getElementById('showWeatherBtn')
const displayWeather = document.getElementById('displayWeather')
const longForecastCheck = document.getElementById('longForecastCheck')
const tempRadioInput = document.querySelectorAll('input[name="temp_choice"]')
const showWindCheck = document.getElementById('showWindCheck')

const locationApi = (address) =>{
  const url = `https://api.geocod.io/v1.6/geocode?q=${address}&api_key=661f10101f5551601645516fff5559650249f94`;
  return fetch(url).then(res => {
      return res.json()
  })
}

const weatherApi = (locationRes) => {
  const locationValue = locationRes.results[0].location
      const lg = locationValue.lng
      const lt = locationValue.lat
      return fetch(`https://api.weather.gov/points/${lt},${lg}`)
      .then(res => {return res.json()})
}

const foreCastApi = (foreCastUrl) =>{
  return fetch(foreCastUrl).then(res => {return res.json()})            
}

const dailyWeather = (dailyForcast) => {
  forecast = ''
  if(longForecastCheck){
    forecast = 'detailedForecast'
  }else{
    forecast = 'shortForecast'
  }
  displayWeather.innerHTML = ''
  dailyForcast.forEach( weather => {
      if(!weather.isDaytime){
        displayWeather.innerHTML += 
        `<div class='dailyForcastDisplay col-4'>
        <h3 class="day">${weather.name}</h3>
        <h5 class="shortFor">${weather.shortForecast}</h5>
        <h5 class="detailFor" style='display: none'>${weather.detailedForecast}</h5>
        <img src="${weather.icon}" alt="weatherIcon">
        <h6 class="tempF">${weather.temperature} F</h6>
        <h6 class="tempC" style='display: none'>${parseInt((weather.temperature-32)*.5556)} C</h6>
        <p class="windDetails" style='display: none'>Wind:${weather.windSpeed}, ${weather.windDirection}</p>
        </div>`
      }
  })
  console.log(dailyForcast)
}

const showWeather = () =>{
  const address = document.getElementById("address").value
  locationApi(address)
  .then(locationResponse => {
      weatherApi(locationResponse)
      .then(weatherResponse => {
          foreCastApi(weatherResponse.properties.forecast).then(foreCastRes => {
              dailyWeather(foreCastRes.properties.periods)
              forecastDetailChange()
              
          })
      })
  })
}

const forecastDetailChange = () => {
  const shortFor = document.getElementsByClassName('shortFor')
  const detailFor = document.getElementsByClassName('detailFor')
  for(let i=0; i <shortFor.length; i++){
    if(longForecastCheck.checked){
      shortFor[i].style.display = 'none'
      detailFor[i].style.display = 'block'
    }else{
      shortFor[i].style.display = 'block'
      detailFor[i].style.display = 'none'
    }
    
  }
}

const tempScaleChange = () => {
  const tempF = document.getElementsByClassName('tempF')
  const tempC = document.getElementsByClassName('tempC')
  for(let i=0; i <tempC.length; i++){
    if(fahrenheitRadio.checked){
      tempC[i].style.display = 'none'
      tempF[i].style.display = 'block'
    }else{
      tempC[i].style.display = 'block'
      tempF[i].style.display = 'none'
    }
    
  }
}

const displayWind = () =>{
  const windDetails = document.getElementsByClassName('windDetails')
  for(let i=0; i <windDetails.length; i++){
    if(showWindCheck.checked){
      windDetails[i].style.display = 'block'
    }
    else{
      windDetails[i].style.display = 'none'
    }
  }
}


longForecastCheck.addEventListener('change', forecastDetailChange)
showWindCheck.addEventListener('change', displayWind)
tempRadioInput.forEach(tempChange => {
  tempChange.addEventListener('click', tempScaleChange)
})
showWeatherBtn.addEventListener('click', showWeather)