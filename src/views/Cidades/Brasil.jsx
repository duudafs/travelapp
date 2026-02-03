import "./Brasil.css";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import CardCidade from "../../assets/components/CardCidade";
import iconLocal from "../../assets/images/iconLocal.png";
import liberdade from "../../assets/images/liberdade.jpg";
import Layout from "../Layout";



function Brasil(){

     const cidades = [
        { id: 101, cidade: 'São Paulo', desc: 'Brasil', rota: '/saopaulo',  images: liberdade, icon: iconLocal, bioma: 'cultural' },
        { id: 102, cidade: 'Rio de Janeiro', desc: 'Rio de Janeiro', rota: '/cid2', icon: iconLocal, bioma: 'cultural' },
        { id: 103, cidade: 'Cidade 3', desc: 'descrição 3', rota: '/cid3',  icon: iconLocal, bioma: 'praia' },
        { id: 104, cidade: 'Cidade 4', desc: 'descrição 4', rota: '/cid4',  icon: iconLocal, bioma: 'praia' },
        { id: 105, cidade: 'Cidade 5', desc: 'descrição 5', rota: '/cid5',  icon: iconLocal, bioma: 'praia' },
        { id: 106, cidade: 'Cidade 6', desc: 'descrição 6', rota: '/cid6',  icon: iconLocal, bioma: 'cultural' },
        { id: 107, cidade: 'Cidade 7', desc: 'descrição 7', rota: '/cid7',  icon: iconLocal, bioma: 'praia' }
      ];

     const cardsPerPage = 5;
   
      
        const [activeCidade, setActiveCidade] = useState('');
      const [activeBioma, setActiveBioma] = useState('praia');

   const startIndex = activeCidade * cardsPerPage;
const endIndex = startIndex + cardsPerPage;

const cidadesFiltradas = cidades.slice(startIndex, endIndex);


        const carouselRef = useRef(null);
      
        
      const scrollLeft = () => {
  if (currentPage > 0) {
    setCurrentPage(currentPage - 1);
  }
};

const scrollRight = () => {
  if (endIndex < cidades.length) {
    setCurrentPage(currentPage + 1);
  }
};
      
        useEffect(() => {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }, [activeBioma, activeCidade]);
      

    return (
       
        <>
     
<header style={{textAlign: 'start', marginLeft: '100px', position: 'absolute', top: 120 }}>
    <h2 style={{fontWeight: '800', fontSize: '50px'}}>Brasil</h2>
    <p>descricao</p>
</header>


<section className="section-praia">
<div className="container-praia">                    
         
            <button className={`nav-bioma-link ${activeBioma === 'praia' ? 'active' : ''}`} onClick={() => setActiveBioma('Praia')}>Praia</button>
          
          <div className="carousel-cidades-wrapper">
            <button className="carousel-control-prev" onClick={scrollLeft}>‹</button>
            <div
              className={`carousel-cidades carousel-${activeCidade}`}
              ref={carouselRef}
            >
              {cidadesFiltradas.map(cid => (
                <CardCidade
  key={cid.id}
  cidade={cid.cidade}
  desc={cid.desc}
  rota={cid.rota}
  tipo={cid.tipo}
  images={cid.images}
  icon={cid.icon}
  bioma={cid.bioma}
/>
              ))}
              
            </div>

            <button className="carousel-control-next" onClick={scrollRight}>›</button>

          </div>

        </div>
</section>

<section className="section-cultural">
    <div className="container-cultural">                    
         
            <button className={`nav-bioma-link ${activeBioma === 'cultural' ? 'active' : ''}`} onClick={() => setActiveBioma('Cultural')}>Cultural</button>
          
          <div className="carousel-cidades-wrapper">
            <button className="carousel-control-prev" onClick={scrollLeft}>‹</button>
            <div
              className={`carousel-cidades carousel-${activeCidade}`}
              ref={carouselRef}
            >
              {cidadesFiltradas.map(cid => (
                <CardCidade
  key={cid.id}
  cidade={cid.cidade}
  desc={cid.desc}
  rota={cid.rota}
  tipo={cid.tipo}
  images={cid.images}
  icon={cid.icon}
  bioma={cid.bioma}
/>
              ))}
              
            </div>

            <button className="carousel-control-next" onClick={scrollRight}>›</button>

          </div>

        </div>
</section>




</>
    );
}

export default Brasil