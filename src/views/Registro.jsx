import "./Registro.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import PasswordInput from "../assets/components/PasswordInput";


function Registro() {
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [uf, setUF] = useState("UF")
    const [cidade, setCidade] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const handleChange = (event) => {
        setUF(event.target.value)
    }

const handleSubmit = async (e) => {
    e.preventDefault()

    const dados = {
    nome,
    sobrenome,
    email,
    senha,
    cidade,
    uf
  }

  try {
    const res = await fetch("http://localhost:3000/api/cadastro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dados)
    })

    const data = await res.json()

    if (!res.ok) {
      alert(data.msg)
      return
    }

    alert("cadastro realizado com sucesso")
    console.log(data)

  } catch (error) {
    alert("erro ao conectar com o servidor")
    console.error(error)
  }
}

    return (
        <div className="card-registro">
            <h2>sign up</h2>

            <form className="container-registro" onSubmit={handleSubmit}>

                <div className="row">
                    <div className="col">
                        <label>Nome</label>
                        <input
                            type="text"
                            placeholder="Nome..."
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>

                    <div className="col">
                        <label>Sobrenome</label>
                        <input
                            type="text"
                            placeholder="Sobrenome..."
                            value={sobrenome}
                            onChange={(e) => setSobrenome(e.target.value)}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col uf">
                        <label>UF</label>
                        <select value={uf} onChange={handleChange}>
                            <option>UF</option>
                            <option>AM</option>
                            <option>SP</option>
                            <option>RJ</option>
                            <option>MG</option>
                            <option>DF</option>
                        </select>
                    </div>

                    <div className="col">
                        <label>Cidade</label>
                        <input type="text"
                            placeholder="Cidade..."
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)} />
                    </div>
                </div>

                <div className="row">
                    <div className="col full">
                        <label>Email</label>
                        <input type="email"
                            placeholder="Email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>

                <div className="row">
                    <div className="col full">

                        <PasswordInput
                            label="Senha"
                            placeholder="Senha..."
                            value={senha}
                            onChange={setSenha}
                        />

                      
                    </div>
                </div>

                <button className="btn-cadastrar" type="submit">Cadastrar</button>

                <p className="login-text">
                    Já tem uma conta? <Link to="/"><strong style={{ color: "rgb(71, 160, 130)" }}>fazer login</strong></Link>
                </p>

            </form>
        </div>
    )
}

export default Registro
