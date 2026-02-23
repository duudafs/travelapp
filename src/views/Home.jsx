import './Home.css'
import { useRef, useState, useEffect } from 'react'
import CardCategoria from '../assets/components/CardCategoria'
import Sidebar from '../assets/components/Sidebar'
import { Link } from "react-router-dom"
import localIcon from '../assets/images/localIcon.png'
import brasil3 from '../assets/images/brasil3.jpg'
import horizonte from '../assets/images/horizonte.jpg'

function Home() {
  const [categorias, setCategorias] = useState([])


const visibleCards = 3;
const cardWidth = 300; 

  
  const [activeCategoria, setActiveCategoria] = useState('todas');
  const carouselRef = useRef(null);

  const categoriasFiltradas = categorias.filter(cat => {
  return activeCategoria === 'todas' || cat.continente === activeCategoria;
});
  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -cardWidth * visibleCards, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: cardWidth * visibleCards, behavior: 'smooth' });
  };

  useEffect(() => {
    carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
   fetch("http://localhost:3000/api/paises")
    .then(res => res.json())
    .then(data => {
      setCategorias(data)
    })
    .catch(err => console.log("erro ao buscar países:", err))
}, [])



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
            <li><button className={`nav-cat-link ${activeCategoria === 'AmericaCentral' ? 'active' : ''}`} onClick={() => setActiveCategoria('AmericaCentral')}>América do Central</button></li>
            <li><button className={`nav-cat-link ${activeCategoria === 'Africa' ? 'active' : ''}`} onClick={() => setActiveCategoria('Africa')}>África</button></li>
            <li><button className={`nav-cat-link ${activeCategoria === 'Europa' ? 'active' : ''}`} onClick={() => setActiveCategoria('Europa')}>Europa</button></li>
            <li><button className={`nav-cat-link ${activeCategoria === 'Asia' ? 'active' : ''}`} onClick={() => setActiveCategoria('Asia')}>Ásia</button></li>
            <li><button className={`nav-cat-link ${activeCategoria === 'Oceania' ? 'active' : ''}`} onClick={() => setActiveCategoria('Oceania')}>Oceania</button></li>
          </ul>

          <div className="carousel-wrapper">
            <button className="carousel-home-control-prev" onClick={scrollLeft}>‹</button>
            <div
              className={`carousel-home carousel-${activeCategoria}`}
              ref={carouselRef}
            >
              {categoriasFiltradas.map(cat => (
                <CardCategoria
                  key={cat.id}
                  nome={cat.nome}
                  desc={cat.desc}
                  rota={`/paises/${cat.slug}`}
                  continente={cat.continente}
                  images={cat.images}
                  icon={cat.icon}
                  
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
