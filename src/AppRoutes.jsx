import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import Registro from './views/Registro'


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
       <Route path="/registro" element={<Registro />} />
    </Routes>
  )
}

export default AppRoutes