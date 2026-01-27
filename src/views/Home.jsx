import './Home.css'
import { useRef, useState, useEffect } from 'react'
import CardCategoria from '../assets/components/CardCategoria'
import Sidebar from '../assets/components/Sidebar'
import { Link } from "react-router-dom"
import iconLocal from '../assets/images/iconLocal.png'
import liberdade from '../assets/images/liberdade.jpg'

function Home() {
  const categorias = [
    { id: 1, nome: 'Liberdade', desc: 'São Paulo, SP', rota: '/cat1', tipo: 'nacional', images: liberdade, icon: iconLocal, bioma: 'cultural' },
    { id: 2, nome: 'categoria 2', desc: 'descrição 2', rota: '/cat2', tipo: 'internacional', icon: iconLocal, bioma: 'cultural' },
    { id: 3, nome: 'categoria 3', desc: 'descrição 3', rota: '/cat3', tipo: 'nacional', icon: iconLocal, bioma: 'praia' },
    { id: 4, nome: 'categoria 4', desc: 'descrição 4', rota: '/cat4', tipo: 'nacional', icon: iconLocal, bioma: 'praia' },
    { id: 5, nome: 'categoria 5', desc: 'descrição 5', rota: '/cat5', tipo: 'internacional', icon: iconLocal, bioma: 'praia' },
    { id: 6, nome: 'categoria 6', desc: 'descrição 6', rota: '/cat6', tipo: 'nacional', icon: iconLocal, bioma: 'cultural' },
    { id: 7, nome: 'categoria 7', desc: 'descrição 7', rota: '/cat7', tipo: 'nacional', icon: iconLocal, bioma: 'praia' }
  ];


const visibleCards = 3;
const cardWidth = 300; 

  const [activeBioma, setActiveBioma] = useState('explorar');
  const [activeCategoria, setActiveCategoria] = useState('todas');
  const carouselRef = useRef(null);

  const categoriasFiltradas = categorias.filter(cat => {
    const biomaMatch = activeBioma === 'explorar' || cat.bioma === activeBioma;
    const categoriaMatch = activeCategoria === 'todas' || cat.tipo === activeCategoria;
    return biomaMatch && categoriaMatch;
  });

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -cardWidth * visibleCards, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: cardWidth * visibleCards, behavior: 'smooth' });
  };

  useEffect(() => {
    carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
  }, [activeBioma, activeCategoria]);



  return (
    <>
      <section className="section-categories">
        <div className="container-home">
          
            <Sidebar />
        
          <ul className="nav nav-pills-bioma" style={{ marginLeft: '150px', gap: '20px', position: 'relative' }}>
            <li>
              <button 
                className={`nav-cat-link-bioma ${activeBioma === 'explorar' ? 'active' : ''}`} 
                onClick={() => setActiveBioma('explorar')}
              >
                <img src={iconLocal} alt="Explorar Icon" style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                Explorar
              </button>
            </li>
            <li><button className={`nav-cat-link-bioma ${activeBioma === 'praia' ? 'active' : ''}`} onClick={() => setActiveBioma('praia')}>Praia</button></li>
            <li><button className={`nav-cat-link-bioma ${activeBioma === 'cultural' ? 'active' : ''}`} onClick={() => setActiveBioma('cultural')}>Cultural</button></li>
          </ul>

          <ul className="nav nav-pills mt-3" style={{ marginLeft: '150px', gap: '20px', position: 'relative' }}>
            <li><button className={`nav-cat-link ${activeCategoria === 'todas' ? 'active' : ''}`} onClick={() => setActiveCategoria('todas')}>Todas</button></li>
            <li><button className={`nav-cat-link ${activeCategoria === 'nacional' ? 'active' : ''}`} onClick={() => setActiveCategoria('nacional')}>Nacional</button></li>
            <li><button className={`nav-cat-link ${activeCategoria === 'internacional' ? 'active' : ''}`} onClick={() => setActiveCategoria('internacional')}>Internacional</button></li>
          </ul>

          <div className="carousel-wrapper">

            <button className="carousel-home-control-prev" onClick={scrollLeft}>‹</button>

            <div
              className={`carousel-home carousel-${activeBioma}-${activeCategoria}`}
              ref={carouselRef}
            >
              {categoriasFiltradas.map(cat => (
                <CardCategoria
                  key={cat.id}
                  nome={cat.nome}
                  desc={cat.desc}
                  rota={cat.rota}
                  tipo={cat.tipo}
                  images={cat.images}
                  icon={cat.icon}
                  bioma={cat.bioma}
                />
              ))}
            </div>

            <button className="carousel-home-control-next" onClick={scrollRight}>›</button>

          </div>

        </div>
      </section>

      <section className="section-other">
        <div className="container-home">
          <h5>create your own album</h5>
        <Link to="/album"><button className="create-album">+</button></Link>
        </div>
      </section>
    </>
  );
}

export default Home
