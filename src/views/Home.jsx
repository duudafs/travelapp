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
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-todas" type="button" role="tab" aria-controls="pills-todas" aria-selected="true">Todas</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-nacional" type="button" role="tab" aria-controls="pills-nacional" aria-selected="false">Nacional</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-internacional" type="button" role="tab" aria-controls="pills-internacional" aria-selected="false">Internacional</button>
  </li>
  
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-todas" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
         {categorias.map((cat) => (
  <CardCategoria
    key={cat.id}
    nome={cat.nome}
    desc={cat.desc}
    rota={cat.rota}
  />
))}
  </div>
  <div className="tab-pane fade" id="pills-nacional" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
         {categorias.map((cat) => (
  <CardCategoria
    key={cat.id}
    nome={cat.nome}
    desc={cat.desc}
    rota={cat.rota}
  />
))}
  </div>
  <div className="tab-pane fade" id="pills-internacional" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
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
      </row>

    </div>
  </div>
      </section>
    </>
  )
}

export default Home

