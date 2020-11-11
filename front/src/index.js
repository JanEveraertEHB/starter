const express = require('express')
const app = express()
const port = 3000

const line = [
  { part: 1 },
  { part: 2 }
]
app.get('/', (req, res) => {
  res.send('Hello World front ')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})