const express = require('express')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
const PORT = 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(fileUpload())


app.use(require('./routes/index'))

async function start () {
 try {
  await mongoose.connect('mongodb+srv://Baisangur:q1w2e3r4@cluster0.nnwrv.mongodb.net/super', {
   useUnifiedTopology: true,
   useNewUrlParser: true
  })
  app.listen(PORT, () => {
   console.log(`server start in ${PORT} port`)
  })
 } catch (e) {
  console.log(e)
 }
}

start()
