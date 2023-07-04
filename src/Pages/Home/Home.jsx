const Home = () => {
  return (
    <>
      <header className="bg ">
        <div className="layer vh-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center">
          <div className="content text-center animate__animated animate__fadeInUp">
            <h1 className="text-danger fa-4x">Noman Strength</h1>
            <p className="lead fs-2 text-white">The Price of Excellence is discipline.</p>
            <button type="button" className="btn btn-outline-danger fs-5">Shop Now</button>
          </div>
        </div>
      </header>
      <div className="container text-white p-5">
        <div className="row">
          <div className="col-md-4 d-flex align-items-center">
            <p className="fa-4x ">SHOP NOW <br /> SAVE MORE</p>
          </div>
          <div className="col-md-8 row">
            <div className="col-lg-6">
              <i className="fa-solid fa-box fa-3x my-3"></i>
              <h3>Free shipping</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, eaque cupiditate atque voluptatum tenetur qui!</p>
            </div>
            <div className="col-lg-6">
              <i className="fa-solid fa-headset fa-3x my-3"></i>
              <h3>Online Sale</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, eaque cupiditate atque voluptatum tenetur qui!</p>
            </div>
            <div className="col-lg-6">
              <i className="fa-solid fa-truck-fast fa-3x my-3"></i>
              <h3>Free Returns</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, eaque cupiditate atque voluptatum tenetur qui!</p>
            </div>
            <div className="col-lg-6">
              <i className="fa-regular fa-credit-card fa-3x my-3"></i>
              <h3>Safe Payment</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, eaque cupiditate atque voluptatum tenetur qui!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home