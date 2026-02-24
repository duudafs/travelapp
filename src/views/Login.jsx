import './Login.css'
import { useState } from "react";
import { Link } from "react-router-dom"
import {
  User, Mail, Lock, MapPin, Globe,
  ArrowRight, Eye, EyeOff, Plane,
  ChevronRight, Sparkles, CheckCircle2
} from 'lucide-react';
import PasswordInput from '../assets/components/PasswordInput';
import Registro from "./Registro";


function Login() {


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Senha:", senha);
  };
  const [senha, setSenha] = useState("");

  return (
    <div className="container-login">
      <div className="lado-esquerdo">


        <div className="grid text-start ms-5 mt-5">


          <div className="d-flex align-items-start gap-3 mb-5">

            <div
              className="d-flex align-items-center justify-content-center rounded-4 shadow"
              style={{ width: "48px", height: "48px", backgroundColor: "#6dc29a" }}
            >
              <Plane className="text-white" size={24} />
            </div>

            <div>
              <span className="fw-bold fs-5 d-block" style={{ color: "#ffffff" }}>
                TravelAPP
              </span>



              <span className="text-uppercase fw-semibold" style={{ letterSpacing: "0.1em", fontSize: "12px", color: "#6dc29a" }}>
                Smart Planner
              </span>
            </div>

          </div>

          <div className="mb-4">

            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill " style={{ backgroundColor: "#ffffff25", color: "#71cea3", backdropFilter: "blur(8px)", fontSize: "13px" }}>
              <Sparkles size={14} />
              <span>Nova experiência de viagem</span>
            </div>

            <h2 className="display-5 mt-4" style={{ color: "#ffffff", fontWeight: "900" }}>
              Seja bem <br />
              <span style={{ color: "#6dc29a", fontStyle: "italic" }}>
                vindo!
              </span>
            </h2>

            <div className="mt-4">

              <p style={{ maxWidth: "280px", color: "#7e7e7e" }}>
                Planeje. Viaje melhor. Relembre sempre.
              </p>

              <ul className="list-unstyled mt-3">
                {['Roteiros com IA', 'Álbuns Únicos', 'Destinos Exclusivos'].map((item) => (
                  <li key={item} className="d-flex align-items-center gap-2 small mb-2 text-white">
                    <CheckCircle2 size={16} style={{ color: "#4fad81" }} />
                    {item}
                  </li>
                ))}
              </ul>

            </div>

          </div>

          <div>
            <div className="d-inline-flex align-items-center gap-2 px-3 py-4 " style={{ marginTop: "95px", backgroundColor: "#4d4d4d54", color: "#a8a8a8", backdropFilter: "blur(4px)", fontSize: "13px", width: "430px", borderRadius: "19px" }}>
              <span>"Crie roteiros inteligentes com IA e transforme cada viagem em um álbum único, do seu jeito"</span>
            </div>

          </div>

        </div>
      </div>
      <div className="lado-direito justify-content-center d-flex align-items-center mb-5">
        <div className="grid text-center ms-4 ">
          <div className="card-login" style={{width: "500px"}}>
            <h2 className="display-6 text-start mb-5" style={{ fontWeight: "900" }}>Fazer login</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ position: "relative" }}>
                <Mail size={18} style={{ position: "absolute", top: "16px", left: "20px", color: "#a8a8a8" }} />
                <input type="text" placeholder="nome@email.com" className="email-field" />
              </div>

            <div style={{ position: "relative", width: "100%" }}>
                <PasswordInput
                  value={senha}
                  onChange={setSenha}
                />
              </div>

              <button className="submit-login">submit</button>
            </form>

            <div className="divider-line" >
            </div>
            <div className="align-items-center justify-content-center">
              <span style={{ fontSize: "14px", color: "#a8a8a8"}}>ou</span>
             
              <div className="registrar">
                
                Não tem conta? <Link to="/registro"><strong style={{ color: "rgb(71, 160, 130)" }}>Clique aqui</strong></Link>


              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Login
