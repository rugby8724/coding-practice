const processVisa = () => {
  const visaPromise = new Promise((resovle, reject) => {
    if(isEligible()){
      const visa = {
        type : 'tourism',
        'validity' : 10,
        'expiry' : '12/31/2022'
      }
      resovle(visa)
    }else {
      reject('Visa declined')
    }
    
  })
  return visaPromise
}

const ticketPurchase = () =>{
  const ticketPromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve('Ticket Purchased')
    }, 10000)
  })
  return ticketPromise
}

const travelPurchase = () =>{
  const travelPromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve('traval purchase confirmed')
    }, 5000)
  })
  return travelPromise
}

const airportChekin = () =>{
  const checkinPromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve('checked in airport')
    }, 3000)
  })
  return checkinPromise
}

const boardFlight = () => {
  const boardPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('boarding')
    },1000)
  })
  return boardPromise
}

const isEligible = () =>{
  return true
}

const doTravel = () =>{
  processVisa().then(visa => {
    console.log(visa.type)
    ticketPurchase().then(msg=>{
      console.log(msg)
      airportChekin().then(msg=>{
        console.log(msg)
        boardFlight().then(msg=>{
          console.log(msg)
        })
      })
    })
    travelPurchase().then(msg=>{
      console.log(msg)
    })
  }).catch(errorMsg => {
    console.log(errorMsg)
  })
}

doTravel()
