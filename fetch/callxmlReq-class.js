const xmlReq = require('xhr2')


const callCatApi = () =>{
  const req = new xmlReq()
  req.onreadystatechange = () => {
    if(req.readyState == 4 && req.status == 200){
      console.log(req.responseText)
    }
  }
  req.open('Get', 'https://api.thecatapi.com/v1/breeds')
  req.send()
}

callCatApi()