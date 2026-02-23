import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import CardCidade from '../assets/components/CardCidade'
import Layout from "./Layout";
import "./Pais.css";

function Pais() {

  const { slug } = useParams();
  const [cidades, setCidades] = useState([]);

  const praiaRef = useRef(null);
  const culturalRef = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/paises/${slug}/cidades`)
      .then(res => res.json())
      .then(data => setCidades(data))
      .catch(err => console.error(err));
  }, [slug]);

  // separa por bioma
  const cidadesPraia = cidades.filter(c => c.bioma === "praia");
  const cidadesCultural = cidades.filter(c => c.bioma === "cultural");

  // scroll praia
  const scrollPraiaLeft = () => {
    praiaRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollPraiaRight = () => {
    praiaRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  // scroll cultural
  const scrollCulturalLeft = () => {
    culturalRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollCulturalRight = () => {
    culturalRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div>

      <h1>{slug.toUpperCase()}</h1>

      {/* PRAIA */}
      <section>
        <h2>Praia</h2>

        <div className="carousel-wrapper">
          <button onClick={scrollPraiaLeft}>‹</button>

          <div className="carousel" ref={praiaRef}>
            {cidadesPraia.map(cidade => (
              <CardCidade
                key={cidade.id}
                cidade={cidade.nome}
                
              />
            ))}
          </div>

          <button onClick={scrollPraiaRight}>›</button>
        </div>
      </section>

      {/* CULTURAL */}
      <section>
        <h2>Cultural</h2>

        <div className="carousel-wrapper">
          <button onClick={scrollCulturalLeft}>‹</button>

          <div className="carousel" ref={culturalRef}>
            {cidadesCultural.map(cidade => (
              <CardCidade
                key={cidade.id}
                cidade={cidade.nome}
               
              />
            ))}
          </div>

          <button onClick={scrollCulturalRight}>›</button>
        </div>
      </section>

    </div>
  );
}

export default Pais;