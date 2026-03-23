import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import CardCidade from '../assets/components/CardCidade'
import Layout from "./Layout"
import { Link } from "react-router-dom"
import "./Pais.css";
import {ArrowLeft} from 'lucide-react'

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
    <>
    <main className="conteudo-pagina">
<section className="section-rosa">
        <h1 className="titulo-slug">
          {slug}
        </h1>
        
        <p className="texto-descricao">
          descrição
        </p>
      </section>
      <section className="section-azul">
        <p>oi</p>
      </section>
    </main>

      
    
     </>
  );
}


export default Pais;

