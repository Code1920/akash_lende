const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => { 
  console.log(`Example app listening on port ${port}`)
  console.log('Server running at http://127.0.0.1:5000/')
})  