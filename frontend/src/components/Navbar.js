import { Link, useLocation, useNavigate } from "react-router-dom";
import '../App.css';

const Navbar = (props) => {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  }

  let location = useLocation();

  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand">myNotebook</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === '/notes' ? "active" : ""}`} aria-current="page" to="/notes">Notes</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} to="/about">About</Link>
                </li>
              </>
            )}
          </ul>
          {!isAuthenticated ? (
            <form className="d-flex">
              <Link className="btn button" to='/signin' role="button">SignIn</Link>
              <Link className="btn button mx-1" to='/signup' role="button">SignUp</Link>
            </form>
          ) : (
            <button className="btn button mx-2" onClick={handleLogout}>Logout</button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
