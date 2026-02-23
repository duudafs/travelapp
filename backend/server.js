import express from 'express'
import cors from 'cors'
import mysql from "mysql2"

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "travelapp"
})

db.connect((err) => {
  if (err) {
    console.log("erro ao conectar:", err)
  } else {
    console.log("conectado ao mysql")
  }
})


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

  const sql = `
    INSERT INTO usuarios (nome, sobrenome, email, senha, cidade, uf)
    VALUES (?, ?, ?, ?, ?, ?)
  `

   db.query(sql, [nome, sobrenome, email, senha, cidade, uf], (err, result) => {
    if (err) {
      console.log("erro mysql:", err)
      return res.status(500).json({ msg: 'erro ao salvar no banco' })
    }

    res.status(201).json({
      msg: 'usuário salvo no banco',
      id: result.insertId
    })
  })

})

app.get("/api/paises", (req, res) => {
  db.query("SELECT * FROM paises", (err, result) => {
    if (err) {
      console.log(err)
      return res.status(500).json(err)
    }
    res.json(result)
  })
})

app.get("/api/paises/:slug/cidades", (req, res) => {
  const { slug } = req.params
  const { bioma } = req.query

  let sql = `
    SELECT cidades.* 
    FROM cidades
    JOIN paises ON cidades.pais_id = paises.id
    WHERE paises.slug = ?
  `

  if (bioma) {
    sql += " AND cidades.bioma = ?"
    db.query(sql, [slug, bioma], (err, result) => {
      if (err) return res.status(500).json(err)
      res.json(result)
    })
  } else {
    db.query(sql, [slug], (err, result) => {
      if (err) return res.status(500).json(err)
      res.json(result)
    })
  }
})

app.listen(3000, () => {
  console.log('backend rodando na porta 3000')
})
