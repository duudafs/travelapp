import './Login.css'

function Login() {
   return (
  <div id="carouselExampleRide" className="carousel slide"data-bs-ride="true">
    <div className="carousel-inner">

      <div className="carousel-item active">
        <div className="InitialCard">
          <h2>Seja Bem vindo!</h2>
          <h4>Travel trip</h4>
        </div>
      </div>

      <div className="carousel-item">
        <div className="InitialCard">
          <h5>Planeje. viaje melhor. relembre sempre. </h5>
          <h3>Crie roteiros inteligentes com ia e transforme cada viagem em um álbum único, do seu jeito.</h3>
        </div>
      </div>

      <div className="carousel-item">
        <div className="InitialCard">
          <h5>Initial Card 3</h5>
        </div>
      </div>

    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" />
      <span className="visually-hidden">Previous</span>
    </button>

    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
      <span className="carousel-control-next-icon" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
)

}

                export default Login
