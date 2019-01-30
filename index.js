const express = require('express')
const app = express()
const PORT = process.env.PORT || '8000'


app.get('/hello/:name', (req, res) =>
  res.send({
    message: `Hello ${req.params.name}`,
    ENV_SAMPLE: process.env.ENV_SAMPLE
  })
)

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
