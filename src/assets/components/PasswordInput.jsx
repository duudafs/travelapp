import { Password } from "primereact/password"
import { useEffect, useState } from "react"

function PasswordInput({ label, value, onChange }) {
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
      setErro("a senha não atende aos requisitos")
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
    <div className="field">
      <label>{label}</label>

      <Password
        value={value}
        className={`senha-input ${erro ? "p-invalid" : ""}`}
        placeholder="Senha..."
        onChange={(e) => onChange(e.target.value)}
        toggleMask
        footer={footer}
      />
      {erro && <small className="p-error">{erro}</small>}
    </div>
  )
}

export default PasswordInput
