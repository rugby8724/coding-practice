import {fetchReq} from 'node-fetch'

const callCatAPi = (apiUrl) =>{
  fetchReq(apiUrl)
  .then(res => res.json())
  .then(data => console.log(data))
}

callCatAPi('https://api.thecatapi.com/v1/breeds')