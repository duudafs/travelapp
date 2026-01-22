import { Link } from 'react-router-dom'
import './CardCategoria.css'


function CardCategoria({ nome, desc, rota }) {
  return (
    <Link to={rota} className="card" style={{ backgroundColor: 'white', width: '300px', height: '200px', borderRadius: '20px' }}>
      <h3>{nome}</h3>
      <p>{desc}</p>
    </Link>
  )
}

export default CardCategoria