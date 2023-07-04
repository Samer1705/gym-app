import ProductGrid from "../../Components/ProudctGrid/ProductGrid"

const Catalog = () => {
  return (
    <>
      <div className="bg-catalog text-white p-5 ">
        <div className="layer p-5">
          <div className="content p-5 container animate__animated animate__fadeIn">
            <p className="fa-4x ">SHOP NOW <br /> SAVE MORE</p>
            <button type="button" className="btn btn-outline-danger fs-4">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between px-5 py-4 bg-black bg-opacity-75 ">
        <button className="btn btn-danger"> <i className="fa-solid fa-sliders"></i> Filter</button>
        <input type="text" className="form-control w-25" placeholder="Search"/>
      </div>
      <ProductGrid />
    </>
  )
}

export default Catalog