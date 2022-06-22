const locationApi = () =>{
  const url = "https://api.geocod.io/v1.6/geocode?q=75062&api_key=661f10101f5551601645516fff5559650249f94"
  return fetch(url).then(res => {
      return res.json()
  }).then(locationRes=>{
      console.log(locationRes.results[0].location)
  })
}