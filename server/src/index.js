const express = require('express')
const app = express()
const port = 3000
const route=require('./routes/index')
//app.use(express.urlencoded({extended: true}))
app.use (express.urlencoded())


//ROUTE INIT
route(app);


//CONNECT MONGODB
const db=require('./config/db/index.js')
//Database connection
db.connect();


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})