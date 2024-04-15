import React from 'react'
import { Link } from "react-router-dom";
import "../../styles.css";

const Footer = () => {
  return (
      <div className="container d-flex flex-column">
        <p>Questions? Call 000-800-919-xxxx</p>
        <div className="row footer-row">
          <div className="col-4 p-0 d-flex flex-column">
            <Link to="/" className="p-1 text-light">FAQ</Link>
            <Link to="/" className="p-1 text-light">Media Center</Link>
            <Link to="/" className="p-1 text-light">Ways to watch</Link>
            <Link to="/" className="p-1 text-light">Cookie Preferences</Link>
            <Link to="/" className="p-1 text-light">Speed Test</Link>
          </div>
          <div className="col-4 d-flex flex-column">
            <Link to="/" className="p-1 text-light">Help Center</Link>
            <Link to="/" className="p-1 text-light">Investor Relations</Link>
            <Link to="/" className="p-1 text-light">Terms of Use</Link>
            <Link to="/" className="p-1 text-light">Corporate Information</Link>
            <Link to="/" className="p-1 text-light">Legal Notices</Link>
          </div>
          <div className="col-4 d-flex flex-column">
            <Link to="/" className="p-1 text-light">Account</Link>
            <Link to="/" className="p-1 text-light">Jobs</Link>
            <Link to="/" className="p-1 text-light">Privacy</Link>
            <Link to="/" className="p-1 text-light">Contact Us</Link>
            <Link to="/" className="p-1 text-light">Only on Netflix</Link>
          </div>
        </div>

        <div className="mb-2 dropdown w-25">
          <button
            className="btn dropdown-toggle btn-outline-light lang"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi bi-globe me-1"></i>English
          </button>
          <ul className="dropdown-menu">
            <li><Link to="/" className="dropdown-item">Hindi</Link></li>
            <li><Link to="/" className="dropdown-item">French</Link></li>
            <li><Link to="/" className="dropdown-item">Korean</Link></li>
            <li><Link to="/" className="dropdown-item">German</Link></li>
          </ul>
        </div>

        <div className="text-light">Netflix India</div>
      </div>
  )
}

export default Footer