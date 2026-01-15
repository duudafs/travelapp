import './Login.css'

function Login() {
  return (
    <div
      id="carouselExampleRide"
      className="carousel slide"
      data-bs-ride="carousel"
    >

      <div className="carousel-indicators">
        <button data-bs-target="#carouselExampleRide" data-bs-slide-to="0" className="active" />
        <button data-bs-target="#carouselExampleRide" data-bs-slide-to="1" />
        <button data-bs-target="#carouselExampleRide" data-bs-slide-to="2" />
      </div>

      <div className="carousel-inner">

    
        <div className="carousel-item active">
          <div className="slide-content">
            <div className="InitialCard">
              <div className="text-welcome">
                <h2>seja bem vinda!</h2>
                <h4>travel text</h4>
              </div>
            </div>
          </div>
        </div>

       
        <div className="carousel-item">
          <div className="slide-content">
            <div className="InitialCard">
              <div className="card-about">
                <div className="text-about">
                  <h4>planeje. viaje melhor. relembre sempre.</h4>
                  <h6>
                    crie roteiros inteligentes com ia e transforme cada viagem
                    em um álbum único, do seu jeito.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>

   
        <div className="carousel-item">
          <div className="slide-content">
            <div className="card-login">
              <h3>Faça login</h3>
              <input type="text" placeholder="Email..." className="email-field" />
              <input type="password" placeholder="Senha..." className="pass-field" />
              <div className="forgot-pass">
                Esqueceu a senha?
                </div>
              <button className="submit-login">submit</button>
            </div>
          </div>
        </div>

      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" />
      </button>

      <button className="carousel-control-next" type="button"  data-bs-target="#carouselExampleRide"  data-bs-slide="next">
        <span className="carousel-control-next-icon" />
      </button>
    </div>
  )
}

export default Login
