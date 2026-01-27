import './Sidebar.css'
import { useState } from 'react'
import { Link } from "react-router-dom"


function Sidebar() {

    const [activeLink, setActiveLink] = useState('home');
    const [visible, setVisible] = useState(false);

    return (
        <>

            <button className="sidebar-button" onClick={() => setVisible(true)}>
                ☰
            </button>
            <div className={`sidebar ${visible ? 'open' : ''}`}>
                <button className="close-btn" onClick={() => setVisible(false)}>X</button>
                <div className="divider-line"></div>

                <ul className="nav sidebar-links">
                    <Link to="/home">
                        <li><button className={`nav-sidebar-link ${activeLink === 'home' ? 'active' : ''}`} onClick={() => setActiveLink('home')}>Home</button></li>
                    </Link>
                    <Link to="/categorias">
                        <li><button className={`nav-sidebar-link ${activeLink === 'categorias' ? 'active' : ''}`} onClick={() => setActiveLink('categorias')}>Categorias</button></li>
                    </Link>
                    <Link to="/perfil">
                        <li><button className={`nav-sidebar-link ${activeLink === 'perfil' ? 'active' : ''}`} onClick={() => setActiveLink('perfil')}>Perfil</button></li>
                    </Link>

                </ul>
            </div>
        </>
    )
}

export default Sidebar

