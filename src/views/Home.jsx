import  './Home.css'
import CardCategoria from '../assets/components/CardCategoria'

function Home() {
  
  const categorias = [
    {
      id: 1,
      nome: 'categoria 1',
      desc: 'descrição 1',
      rota: '/cat1'
    },
    {
      id: 2,
      nome: 'categoria 2',
      desc: 'descrição 2',
      rota: '/cat2'
    },
    {
      id: 3,
      nome: 'categoria 3',
      desc: 'descrição 3',
      rota: '/cat3'
    }
  ]
  return (
    <>
     

      <section className="section-categories">
        <div className="container">
    <div className="container-cat">
      <row>
        <div className="col-6">
          <button className="btn-todas">Todas</button>
          <button className="btn-nacional">nacional</button>
          <button className="btn-internacional">internacional</button>
          
        </div>
      </row>
         {categorias.map((cat) => (
  <CardCategoria
    key={cat.id}
    nome={cat.nome}
    desc={cat.desc}
    rota={cat.rota}
  />
))}
    </div>
  </div>
      </section>
    </>
  )
}

export default Home

