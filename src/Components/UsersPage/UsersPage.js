import React from 'react'
import Login from './Login';
import Footer from '../Homepage/Footer';
import  { Link } from "react-router-dom";

const UsersPage = () => {
  return (
    <section id="main" className="min-vh-100 position-relative">
        <nav className="navbar navbar-expand">
          <div className="container-fluid justify-content-start ms-5">
            <Link to={"/"} className="navbar-brand text-danger fs-1 fw-bold">NETFLIX</Link>
          </div>
        </nav>
        
        <Login />
        <Footer/>
        
    </section>
    
  )
}

export default UsersPage;