import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/teste', (req, res) => {
  res.json({ msg: 'api funcionando' })
})

app.post('/api/cadastro', (req, res) => {
  const { nome, sobrenome, email, senha, cidade, uf } = req.body

  if (!nome || !sobrenome || !email || !senha) {
    return res.status(400).json({ msg: 'campos obrigatórios faltando' })
  }


  const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

  if (!senhaRegex.test(senha)) {
    return res.status(400).json({
      msg: 'senha fraca'
    })
  }

  res.status(201).json({
    msg: 'usuário cadastrado com sucesso',
    usuario: {
      nome,
      sobrenome,
      email,
      cidade,
      uf
    }
  })
})

app.listen(3000, () => {
  console.log('backend rodando na porta 3000')
})
