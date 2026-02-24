import { Password } from "primereact/password"
import { useEffect, useState } from "react"
import {
  User, Mail, Lock, MapPin, Globe,
  ArrowRight, Eye, EyeOff, Plane,
  ChevronRight, Sparkles, CheckCircle2
} from 'lucide-react';

function PasswordInput({ label, value, onChange, placeholder = "••••••••",  showFooter = false }) {
   const [erro, setErro] = useState("")

  useEffect (() => {
    validarSenha(value)
  }, [value])

   function validarSenha(senha) {
    if (!senha) {
      setErro("")
      return
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

    if (!regex.test(senha)) {
      setErro("A senha não atende aos requisitos")
    } else {
      setErro("")
    }
  }
  
  const footer = (
    <>
      <p className="mt-2">sugestões</p>
      <ul className="line-height-3">
        <li>1 letra maiúscula</li>
        <li>1 letra minúscula</li>
        <li>1 número</li>
        <li>mínimo 8 caracteres</li>
      </ul>
    </>
  )

  return (
 <div style={{ position: "relative", width: "100%", marginBottom: "13px" }}>

   <Lock
    size={18}
    style={{
      position: "absolute",
      top: "18px",
      left: "20px",
      color: "#a8a8a8",
      zIndex: 2
    }}
  />

  <Password
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    toggleMask
     style={{ width: "100%" }}
      footer={showFooter ? footer : null}
      feedback={showFooter}
    inputStyle={{
       width: "100%",
      height: "50px", // Ajustado para combinar com o campo de e-mail
      paddingLeft: "55px",
      borderRadius: "15px",
      fontSize: "14px",
      backgroundColor: "#ffffff",
      border: "1px solid #e4e4e4"
    }}
    className={erro ? "p-invalid" : ""}
    required
  />

      <div>
  {erro && <small className="p-error">{erro}</small>}
      </div>
    
    </div>
  )
}

export default PasswordInput


