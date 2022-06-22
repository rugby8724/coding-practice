async function processVisa(){
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

async function ticketPurchase (){
  const ticketPromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve('Ticket Purchased')
    }, 10000)
  })
  return ticketPromise
}

async function travelPurchase (){
  const travelPromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve('traval purchase confirmed')
    }, 5000)
  })
  return travelPromise
}

async function airportChekin(){
  const checkinPromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve('checked in airport')
    }, 3000)
  })
  return checkinPromise
}

async function boardFlight(){
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

async function doTravel (){
  try{
    const visaResponse = await processVisa()
    console.log('visa issued')
    const buyTicket = await ticketPurchase()
    console.log('Ticket purchased')
    const buyTravel = await travelPurchase()
    console.log('Travel purchased')

  }catch(e){
    console.log(e)
  }
 
}

doTravel()
