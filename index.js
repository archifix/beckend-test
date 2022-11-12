require('dotenv').config('./.env')
const express = require('express')


const PORT = process.env.PORT

const app = express()


const start = async () => {
  try {
  app.listen(PORT, () => console.log(`Server OK on:${PORT}`))
} catch(e) {
  console.log(e)
}
}

start()