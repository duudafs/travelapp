import './Home.css'
import { useEffect, useState } from 'react'

function Home() {
  const [msg, setMsg] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/api/teste')
      .then(res => res.json())
      .then(data => setMsg(data.msg))
  }, [])

  return <h1>{msg}</h1>
}

export default Home
