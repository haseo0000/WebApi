const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


let students = [
  { id:1 , name:'Nantapob' , email:'nantapob007@hotmail.com'},
  { id:2 , name:'Sasithon' , email:'amfouy@gmail.com'}
]

app.post('/students', (req, res) => {
  let student = req.body
  students.push(student)
  res.json(student)
})


app.get('/students', (req, res) => {
  res.json(students)
})


app.get('/greeting', (req, res) => {
  res.json({ message:'Hello' })
})


module.exports = app
