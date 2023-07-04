import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
    let location = useLocation();
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-black z-3 position-fixed w-100 ">
            <div className="container">
                <a className="navbar-brand" href="#">Nomad Strength</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname == '/' ? 'text-danger' : ''}`} aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname == '/catalog' ? 'text-danger' : ''}`} to='/catalog'>Catalog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname == '/contact' ? 'text-danger' : ''}`} to='/contact'>Contact</Link>
                        </li>
                    </ul>
                    <div>
                        <button className="btn btn-light mx-2">Login</button>
                        <button className="btn btn-light mx-2">Register</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar