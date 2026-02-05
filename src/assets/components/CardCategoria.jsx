import { Link } from 'react-router-dom'
import './CardCategoria.css'


function CardCategoria({ nome, desc, rota, images, icon }) {
  return (
    <Link to={rota} className="card-categoria" style={{ backgroundColor: 'white', width: '300px', height: '360px', borderRadius: '20px', boxShadow: ' rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px', position: 'relative', overflow: 'hidden' }}>
      <img src={images} alt={nome} className="card-img" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0}} />
      <div className="card-body" style={{  inset: 0, position: 'absolute', top: 0, zIndex: 1, color: 'white', textAlign: 'start', width: '100%', padding: '8px 0', background:  'linear-gradient(to bottom, rgba( 0, 0, 0, 0.5), rgba(0, 0, 0, 0))' }}>
        <h5 className="card-title" style={{ width: '93px', padding: '5px', paddingLeft: '10px', marginLeft: '19px', fontSize: '15px', border: '1px white', borderRadius: '20px', color: '#000000ff', backgroundColor: 'rgba(255, 255, 255, 0.68)' }}> {icon && <img src={icon} alt="icon" style={{ width: '16px', height: '15px', marginBottom: '1px', marginLeft: '7px', marginRight: '5px' }} />}{nome}</h5>
      </div>
      
    </Link>
  )
}

export default CardCategoria


