import { Link } from 'react-router-dom'

function CardCategoria({ nome, desc, rota }) {
  return (
    <Link to={rota} className="card">
      <h3>{nome}</h3>
      <p>{desc}</p>
    </Link>
  )
}

export default CardCategoria