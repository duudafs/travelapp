import './Login.css'

function Login() {
   return (
  <div id="carouselExampleRide" className="carousel slide"data-bs-ride="true">

     <div className="carousel-indicators">
    <button data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" />
    <button data-bs-target="#carouselExample" data-bs-slide-to="1" />
    <button data-bs-target="#carouselExample" data-bs-slide-to="2" />
  </div>
    <div className="carousel-inner">

      <div className="carousel-item active">
        <div className="InitialCard">
            <div className="text-welcome">
                <h2>Seja Bem vindo!</h2>
                 <h4>Travel text</h4>
            </div>
        </div>
      </div>

      <div className="carousel-item">
        <div className="InitialCard">
            <div className="card-about">
 <div className="text-about">
<h4>Planeje. viaje melhor. relembre sempre. </h4>
          <h6>Crie roteiros inteligentes com ia e transforme cada viagem em um álbum único, do seu jeito.</h6>
            </div>
            </div>
        </div>
      </div>

      <div className="carousel-item" style={{ backgroundColor: "rgba(216, 228, 250, 1)" }}>
        <div className="LoginCard">
           <div className="card-login">
            <h3>Crie uma conta</h3>
             <input type="text" placeholder="Nome" className="name-field" />
        <input type="text" placeholder="Email" className="email-field" />
           
           </div>
               
        
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
