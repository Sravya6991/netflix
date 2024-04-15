import React, { useState } from "react";
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios';
import Footer from "../Homepage/Footer";

const rurl = "http://localhost:3500/register";

const Signup = (props) => {
    const [user, setUser] = useState({
      userName: "",
      email: "",
      password: ""
  });
    const history = useHistory();

    const handleChange = (e) => {
        setUser({
          ...user,
            [e.target.name]: e.target.value
        })
        console.log(user)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${rurl}`, {
            userName: user.userName,
            email: user.email,
            password: user.password
          }
        )
        .then(result => {
          console.log(result.data);
          history.push("/login")
        });
    }
 
  return (
    <>
    <section id="main" className="min-vh-100 position-relative">
      <nav className="navbar navbar-expand">
        <div className="container-fluid justify-content-start ms-5">
          <Link to={"/"} className="navbar-brand text-danger fs-1 fw-bold">
            NETFLIX
          </Link>
        </div>
      </nav>

      <div className="container mx-auto text-center" id="signin">
        <div className="container w-75">
          <h2 className="text-light text-start fw-bold">Register</h2>
          <form className="position-relative w-100" onSubmit={handleSubmit}>
            <input
                className="form-control mb-3 p-2 bg-dark text-light  rounded-0"
                placeholder="Username"
                type="text"
                name="userName"
                value={user.userName}
                onChange={handleChange}
              />
              <input
                className="form-control mb-3 p-2 bg-dark text-light  rounded-0"
                placeholder="Email or phone number"
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
              <input
                type="password"
                className="form-control mb-3 p-2 bg-dark text-light rounded-0"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="btn bg-danger mb-1 w-100 p-2 text-light"
              >
                Register
              </button>
              <div className="d-flex justify-content-between mb-5">
              {/* <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check-input"
                />
                <label
                  htmlFor="check-input"
                  className="form-check-label text-secondary"
                >
                  Remember me
                </label>
              </div> */}
              <Link
                to="/"
                className="text-secondary link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover"
              >
                Need help?
              </Link>
            </div>

            <div className="sign-content text-secondary text-start">
              <p>
                New to Netflix? &nbsp;
                <Link
                  to="/login"
                  className="text-secondary d-inline-block link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover"
                >
                  Login now.
                </Link>
              </p>
              <p>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
                <Link to="/" className="d-inline-block">
                  Learn more.
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
    <Footer />
    </>

  );
};

export default Signup;
