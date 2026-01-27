import { Link } from 'react-router-dom'
import './CardCategoria.css'


function CardCategoria({ nome, desc, rota, images, icon }) {
  return (
    <Link to={rota} className="card-categoria" style={{ backgroundColor: 'white', width: '300px', height: '200px', borderRadius: '20px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', position: 'relative', overflow: 'hidden' }}>
      <img src={images} alt={nome} className="card-img" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0 }} />
      <div className="card-body" style={{ position: 'absolute', bottom: 0, zIndex: 1, color: 'white', textAlign: 'start', width: '100%', padding: '8px 0', background:  'linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))' }}>
        <h5 className="card-title" style={{ marginLeft: '15px', fontSize: '18px' }}>{nome}</h5>
        <h6 className="card-subtitle mb-2 text-body-white" style={{ marginLeft: '15px', textAlign: 'start', fontSize: '14px', display: 'flex', alignItems: 'start', justifyContent: 'start', gap: '8px' }}>
          {icon && <img src={icon} alt="icon" style={{ width: '16px', height: '16px' }} />}
          {desc}
        </h6>
      </div>
    </Link>
  )
}

export default CardCategoria