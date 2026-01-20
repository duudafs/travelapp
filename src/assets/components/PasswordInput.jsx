import { Password } from "primereact/password"


function PasswordInput({ label, value, onChange }) {
  
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
        className="senha-input"
        placeholder="Senha..."
        onChange={(e) => onChange(e.target.value)}
        toggleMask
        footer={footer}
      />
    </div>
  )
}

export default PasswordInput
