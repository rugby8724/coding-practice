
weatherList = []

async function getWeather(lon, lat, product, unit) {
  const apiURL = `http://www.7timer.info/bin/api.pl?Dst=${des}e&org=${org}&flightDate=${Date}&unit=${unit}&output=json`
  try{
    const response = await fetch(apiURL)
    weatherList = await response.json()
    console.log(weatherList.dataseries[1].cloudcover)
  }
  catch(error){
    console.log('No Weather!!!')
  }

}

getWeather(FLA, IAH, 'civil', 'British')