const { default: axios } = require('axios')
const axiosReq = require('axios')

const callCatAPi = (apiUrl) =>{
  axiosReq.get(apiUrl).then(res => {
    console.log(res)
  })
}

callCatAPi('https://api.thecatapi.com/v1/breeds')