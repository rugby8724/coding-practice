const express = require('express')
const http = require('http')
const app = express()

app.use(express.json())

// app.get('/name', (req, res) => {
//   let name = {
//     "firstname": "John",
//     "lastname": "Doe"
//   }
//   console.log(res.json(name))
// })

// app.post('/name', (req, res) => {
//   let name = req.body
//   console.log(name)
//   let fullName = {
//     "fullName": `${name.firstname} ${name.lastname}`
//   }
//   console.log(res.json(fullName))
// })

app.get('/digital-crafts/cohort/:year', (req, res) => {
  console.log(req.params.year)
  res.send(JSON.stringify(`I study at DigitalCrafts ${req.params.year} Cohort`))
})








const server = http.createServer(app)
server.listen(3000)