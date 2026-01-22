import { useEffect, useState } from 'react'

function TesteApi() {
  const [msg, setMsg] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/api/teste')
      .then(res => res.json())
      .then(data => setMsg(data.msg))
  }, [])

  return (
    <div>
      <h1>{msg}</h1>
    </div>

    
  )
}

export default TesteApi