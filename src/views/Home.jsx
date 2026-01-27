import './Home.css'
import { useRef, useState, useEffect } from 'react'
import CardCategoria from '../assets/components/CardCategoria'

import iconLocal from  '../assets/images/iconLocal.png' 
import liberdade from '../assets/images/liberdade.jpg'

function Home() {
  const categorias = [
    { id: 1, nome: 'Liberdade', desc: 'São Paulo, SP', rota: '/cat1', tipo: 'nacional', images: liberdade, icon: iconLocal, bioma: 'cultural' },
    { id: 2, nome: 'categoria 2', desc: 'descrição 2', rota: '/cat2', tipo: 'internacional', icon: iconLocal, bioma: 'cultural' },
    { id: 3, nome: 'categoria 3', desc: 'descrição 3', rota: '/cat3', tipo: 'nacional', icon: iconLocal, bioma: 'praia' }
  ];

  const [activeBioma, setActiveBioma] = useState('explorar');
  const [activeCategoria, setActiveCategoria] = useState('todas');
  const carouselRef = useRef(null);

  const categoriasFiltradas = categorias.filter(cat => {
    const biomaMatch = activeBioma === 'explorar' || cat.bioma === activeBioma;
    const categoriaMatch = activeCategoria === 'todas' || cat.tipo === activeCategoria;
    return biomaMatch && categoriaMatch;
  });

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
  };

  useEffect(() => {
    carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
  }, [activeBioma, activeCategoria]);

  return (
    <>
      <section className="section-categories">
        <div className="container-home">

          <ul className="nav nav-pills-bioma">
            <li><button className={`nav-cat-link-bioma ${activeBioma === 'explorar' ? 'active' : ''}`} onClick={() => setActiveBioma('explorar')}>Explorar</button></li>
            <li><button className={`nav-cat-link-bioma ${activeBioma === 'praia' ? 'active' : ''}`} onClick={() => setActiveBioma('praia')}>Praia</button></li>
            <li><button className={`nav-cat-link-bioma ${activeBioma === 'cultural' ? 'active' : ''}`} onClick={() => setActiveBioma('cultural')}>Cultural</button></li>
          </ul>

          <ul className="nav nav-pills mt-3" style={{ marginLeft: '40px', gap: '20px' }}>
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
          <h2>Outra seção</h2>
          <p>Conteúdo da nova seção — coloque aqui o que quiser (cards, listas, etc.).</p>
        </div>
      </section>
    </>
  );
}

export default Home
