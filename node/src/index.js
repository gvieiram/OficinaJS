const express = require('express')
const app = express()

const port = 3333

app.get('/', (req, res) => {
  return res.json({message: 'Hello World!'})
})

app.listen(port, () => {
  console.log(`🚀 Rodando em http://localhost:${port}`)
})
