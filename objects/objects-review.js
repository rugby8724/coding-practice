
// objects have a key: value pair
let car = {
  make: 'Ford',
  model: 'Mustang',
  year: '2022',
  color: 'black'
}

// get the value of a key 
// console.log(car.year)
// add key to object
// car.seats = 4
// console.log(car.seats)
// console.log(car)



// in look to get key value pair
for(let key in car){
  console.log(`${key}: ${car.key}`)
  console.log(key)
}

// // Object.keys returns all the keys
// let carKeys = Object.keys(car)


// // Object.values returns all the values 
// let carValues = Object.values(car)
// console.log(`${carValues}`)

// Object.entries returns a 2D array with the inner array's being the key value pairs of the object
// let carEntries = Object.entries(car)
// console.log(`Object.entries: ${carEntries}`)

// carEntries = [[key,value], [key,value]]

// an interesting way to iterate through a 2D array
// for(const [info, detail] of carEntries){
//   console.log(`Jeff's car ${info} is ${detail}`)
// }