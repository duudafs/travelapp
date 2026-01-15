import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default AppRoutes