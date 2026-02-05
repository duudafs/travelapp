import './Home.css'
import { useRef, useState, useEffect } from 'react'
import CardCategoria from '../assets/components/CardCategoria'
import Sidebar from '../assets/components/Sidebar'
import { Link } from "react-router-dom"
import localIcon from '../assets/images/localIcon.png'
import brasil3 from '../assets/images/brasil3.jpg'
import horizonte from '../assets/images/horizonte.jpg'

function Home() {
  const categorias = [
    { id: 1, nome: 'Brasil', desc: 'Brasil', rota: '/brasil', tipo: 'AmericaDoSul', images: brasil3, icon: localIcon, bioma: 'cultural' },
    { id: 2, nome: 'categoria 2', desc: 'Estados Unidos', rota: '/cat2', tipo: 'AmericaDoNorte',  icon: localIcon, bioma: 'cultural' },
    { id: 3, nome: 'categoria 3', desc: 'descrição 3', rota: '/cat3', tipo: 'AmericaCentral', icon: localIcon, bioma: 'praia' },
    { id: 4, nome: 'categoria 4', desc: 'descrição 4', rota: '/cat4', tipo: 'Africa', icon: localIcon, bioma: 'praia' },
    { id: 5, nome: 'categoria 5', desc: 'descrição 5', rota: '/cat5', tipo: 'Europa', icon: localIcon, bioma: 'praia' },
    { id: 6, nome: 'categoria 6', desc: 'descrição 6', rota: '/cat6', tipo: 'Asia', icon: localIcon, bioma: 'cultural' },
    { id: 7, nome: 'categoria 7', desc: 'descrição 7', rota: '/cat7', tipo: 'Oceania', icon: localIcon, bioma: 'praia' }
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
<section className="section-pesquisar">
  <div className="card-explore" style={{
  backgroundImage: `url(${horizonte})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '1200px',
  height: '500px' 
}}>
<Sidebar /> 
<div className="backdrop-blur-md">
<input className= "search-input " type="text" placeholder="Search..." >
  </input>

  <div className="relative">
 <ul className="nav nav-pills-bioma" style={{ gap: '20px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <li>
              <button 
                className={`nav-cat-link-bioma ${activeBioma === 'explorar' ? 'active' : ''}`} 
                onClick={() => setActiveBioma('explorar')}
              >
                <img src={localIcon} alt="Explorar Icon" style={{ width: '16px', height: '16px', marginRight: '8px' }} />
                Explorar
              </button>
            </li>
            <li><button className={`nav-cat-link-bioma ${activeBioma === 'praia' ? 'active' : ''}`} onClick={() => setActiveBioma('praia')}>Praia</button></li>
            <li><button className={`nav-cat-link-bioma ${activeBioma === 'cultural' ? 'active' : ''}`} onClick={() => setActiveBioma('cultural')}>Cultural</button></li>
          </ul>
  </div>
</div>
  </div>
</section>

      <section className="section-categories">
        <div className="container-home">          
          <div style={{textAlign: 'start', marginLeft: '45px', marginBottom: '30px'}}>
            <h2 className="text-black-800">Destinos Populares</h2>
            <p style={{marginBottom: '40px', color: '#7a7a7aff'}}>Os destinos mais amados pelos viajantes.</p>
          </div>
          <ul className="nav nav-pills mt-3" style={{ marginLeft: '40px', gap: '20px', position: 'relative' }}>
            <li><button className={`nav-cat-link ${activeCategoria === 'todas' ? 'active' : ''}`} onClick={() => setActiveCategoria('todas')}>Todas</button></li>
            <li><button className={`nav-cat-link ${activeCategoria === 'AmericaDoSul' ? 'active' : ''}`} onClick={() => setActiveCategoria('AmericaDoSul')}>América do Sul</button></li>
            <li><button className={`nav-cat-link ${activeCategoria === 'AmericaDoNorte' ? 'active' : ''}`} onClick={() => setActiveCategoria('AmericaDoNorte')}>América do Norte</button></li>
            <li><button className={`nav-cat-link ${activeCategoria === 'AmericaDoCentral' ? 'active' : ''}`} onClick={() => setActiveCategoria('AmericaDoCentral')}>América do Central</button></li>
            <li><button className={`nav-cat-link ${activeCategoria === 'Africa' ? 'active' : ''}`} onClick={() => setActiveCategoria('Africa')}>África</button></li>
            <li><button className={`nav-cat-link ${activeCategoria === 'Europa' ? 'active' : ''}`} onClick={() => setActiveCategoria('Europa')}>Europa</button></li>
            <li><button className={`nav-cat-link ${activeCategoria === 'Asia' ? 'active' : ''}`} onClick={() => setActiveCategoria('Asia')}>Ásia</button></li>
            <li><button className={`nav-cat-link ${activeCategoria === 'Oceania' ? 'active' : ''}`} onClick={() => setActiveCategoria('Oceania')}>Oceania</button></li>
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
