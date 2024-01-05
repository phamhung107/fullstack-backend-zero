const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  res.render('sample')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})