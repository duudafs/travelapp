import './Registro.css'
import { Link } from "react-router-dom"
import { useState } from "react"

function Registro() {
    const [isregister, setIsregister] = useState(true)
  return (
    <div className="card-registro">
      <h2>Registro</h2>
     <div class="row">
    <div class="col-lg-8"> <input className="nome-input" type="text" placeholder="Nome" /></div>
   
  </div>
  <div class="row">
    <div class="col-lg-8"> <input className="sobrenome-input" type="text" placeholder="Sobrenome" />
    </div>
  
  </div>
       
       
        <input className="email-input" type="email" placeholder="Email" />
        <input className="senha-input" type="password" placeholder="Senha" />
        <button type="submit">Registrar</button>
     
    </div>
  )
}

export default Registro
