import './Registro.css'
import { Link } from "react-router-dom"

function Registro() {
  return (
    <div>
      <h2>Registro</h2>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Registrar</button>
      </form>
    </div>
  )
}

export default Registro
