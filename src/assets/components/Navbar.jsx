import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="header">
      <div className="nav-full">

      
        <div className="nav-left">
          <div className="logo">🌍</div>
          <span className="brand">logo</span>
        </div>

    
        <nav className="nav-center">
          <NavLink to="/home" end>Destinos</NavLink>
          <NavLink to="/album">Álbum</NavLink>
          <NavLink to="/dicas">Dicas</NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </nav>

        
        <div className="nav-right">
          <button className="btn-login">entrar</button>
          <button className="btn-signup">cadastrar</button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
