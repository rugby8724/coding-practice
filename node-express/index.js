const express = require('express')
const es6Renderer = require('express-es6-template-engine')
const http = require('http')
const app = express()
app.use(express.json())
const {valiationCheck, validationResult} = require('express-validator')

const catData = [
  {
      "id":"abys",
      "name": "Abyssinian",
      "description": "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals."
  },
  {
      "id":"abys1",
      "name": "Abyssinian1",
      "description": "The Abyssinian1 is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals."
  }
]

app.get('/breeds', (req, res) =>{
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(catData))
  let 
})

app.post(
  '/breeds',
  [
    valiationCheck('name', 'Name is required').isLength({min:1})
  ],
  (req,res)=>{
    let errors = validationResult(req).array()
    if(errors.length >1){
      return res.status(422).json({errors:errors})
    }
    catData.push(req.body)
    res.status(201).send()
})


const server = http.createServer(app)
server.listen(3000)