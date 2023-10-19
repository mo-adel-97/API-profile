// index.js
const express = require('express')

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.post('/users', (req, res) => {
  res.send(req.body)
})

app.get('/data',(req,res)=>{
  const data = {
  name:"mohamed"
  }
  res.json(data.name)
})

app.get('/about', (req, res) => {
  res.send('aboy bage  🥳')
})


// Export the Express API
module.exports = app
