import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import Registro from './views/Registro'
import Album from './views/Album'
import Layout from './views/Layout'
import Pais from './views/Pais'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
       <Route path="/registro" element={<Registro />} />

       <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
       <Route path="/album" element={<Album />} />
       <Route path="/paises/:slug" element={<Pais />} />
       
      </Route>
      
      
    </Routes>
  )
}

export default AppRoutes