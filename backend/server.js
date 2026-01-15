import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/teste', (req, res) => {
  res.json({ msg: 'api funcionando' })
})

app.listen(3000, () => {
  console.log('backend rodando na porta 3000')
})
