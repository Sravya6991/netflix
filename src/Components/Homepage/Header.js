import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand">
        <div className="container-fluid justify-content-around text-center">
          <Link className="navbar-brand text-danger fs-1 fw-bold" to="/">NETFLIX</Link>
          <ul className="navbar-nav">
            <li className="nav-item dropdown me-3">
              <Link
                to={"/"}
                className="nav-link dropdown-toggle border rounded-3 py-1 px-2 text-light bg-dark lang"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-globe text-light"></i>
                <span>English</span>
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={"/"}>Hindi</Link></li>
                <li><Link to={"/"} className="dropdown-item">French</Link></li>
                <li><Link to={"/"} className="dropdown-item">Korean</Link></li>
                <li><Link to={"/"} className="dropdown-item">English</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to={"/login"}
                className="nav-link bg-danger text-light rounded-3 px-3 py-1 signin"
                role="button"
              >
                Sign-in
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Header