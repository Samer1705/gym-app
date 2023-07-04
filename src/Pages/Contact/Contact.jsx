const Contact = () => {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <form action="" className="row bg-black border border-danger p-5 rounded-4 bg-opacity-75 g-3 animate__animated animate__fadeInDown">
        <h2 className="text-danger">Contact Us</h2>
        <div className="col-md-6">
          <input type="text" placeholder="Name" className="form-control py-3" />
        </div>
        <div className="col-md-6">
          <input type="email" placeholder="Email" className="form-control py-3" />
        </div>
        <div>
          <input type="text" placeholder="Phone Number" className="form-control py-3" />
        </div>
        <div>
          <textarea type="text" placeholder="Comment" className="form-control py-3" />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button type="submit" className="btn btn-outline-danger w-25">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contact