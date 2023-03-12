const express = require('express')
const app = express()

const people = require('./people')
const auth = require('./auth')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/people', people)
app.use('/login', auth)

app.listen(4000, () => {
  console.log('Server is listening on port 4000....')
})