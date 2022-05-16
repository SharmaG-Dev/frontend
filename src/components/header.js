import { Switch } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = ({darkTheme,setdarkTheme}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand text-primary">Avengers 3.0</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/services">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/eventhandler">Event Handling</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/gallary">Gallary</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/signup">Sign Up</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/manageuser">Manage User</NavLink>
              </li>
              <Switch checked={darkTheme} onChange={ (e , v) => {setdarkTheme(v)}}/>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;