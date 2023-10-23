const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const PORT = 4000

const PostUserRouter = require('./Routes/PostUsersRoutes')
const CorrectUserRouter = require('./Routes/UserCorrectRoute')

app.use(cors())
app.use(bodyParser.json())
app.use(PostUserRouter.UserPostRouter)
app.use(CorrectUserRouter.UserCorrectRouter)

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

// Export the Express API
module.exports = app
