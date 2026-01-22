import './Home.css'
import { useState } from 'react'

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

    const [active, setActive] = useState('todas')
  return (
    <>


      <section className="section-categories">
        <div className="container">
          <div className="container-cat">
            <row>
              <ul className="nav nav-pills mb-3">
      <li className="nav-item">
        <button
          className={`nav-cat-link ${active === 'todas' ? 'active' : ''}`}
          onClick={() => setActive('todas')}
        >
          Todas
        </button>
      </li>

      <li className="nav-item">
        <button
          className={`nav-cat-link ${active === 'nacional' ? 'active' : ''}`}
          onClick={() => setActive('nacional')}
        >
          Nacional
        </button>
      </li>

      <li className="nav-item">
        <button
          className={`nav-cat-link ${active === 'internacional' ? 'active' : ''}`}
          onClick={() => setActive('internacional')}
        >
          Internacional
        </button>
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

