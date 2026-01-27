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

                <ul className="nav-pills  sidebar-links">
                   
                    <li>
                        <Link to="/home">
                            <button 
                                className={`nav-sidebar-link ${activeLink === 'home' ? 'active' : ''}`} 
                                onClick={() => setActiveLink('home')}
                            >
                                Home
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/categorias">
                            <button 
                                className={`nav-sidebar-link ${activeLink === 'categorias' ? 'active' : ''}`} 
                                onClick={() => setActiveLink('categorias')}
                            >
                                Categorias
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/perfil">
                            <button 
                                className={`nav-sidebar-link ${activeLink === 'perfil' ? 'active' : ''}`} 
                                onClick={() => setActiveLink('perfil')}
                            >
                                Perfil
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar

