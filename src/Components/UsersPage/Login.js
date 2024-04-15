<<<<<<< HEAD
import React, {useState} from "react";
import  { Link, useHistory } from "react-router-dom";
import axios from 'axios';

const lurl = "http://localhost:3500/login";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    message: ""
  });

  const history = useHistory();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await axios.post(`${lurl}`, {
        email: user.email,
        password: user.password
    })
    console.log(result.data)
    if(result.data.auth === true) {
        sessionStorage.setItem("token", result.data.token)
        history.push("/movies");
    } else {
      setUser({
        ...user,
        message: result.data.token
      });
    }
  }

  return (
    <div className="container mx-auto text-center" id="signin">
      <div className="container w-75">
        <h2 className="text-light text-start fw-bold">Sign In</h2>
        <form className="position-relative w-100" onSubmit={handleSubmit}>
          <input
            className="form-control mb-3 p-2 bg-dark text-light rounded-0"
            placeholder="Email"
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            className="form-control mb-3 p-2 bg-dark text-light  rounded-0"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
          <button type="submit" className="btn bg-danger mb-1 w-100 p-2 text-light">
            Sign In
          </button>
          <div className="d-flex justify-content-between mb-5">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="check-input"
              />
              <label htmlFor="check-input" className="form-check-label text-secondary">
                Remember me
              </label>
            </div>
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
                to="/signup"
                className="text-secondary d-inline-block link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover"
              >
                Sign up now.
              </Link>
            </p>
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <Link to="/" className="d-inline-block">
                Learn more.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
=======
import React, {useState} from "react";
import  { Link, useHistory } from "react-router-dom";
import axios from 'axios';

const lurl = "http://localhost:3500/login";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    message: ""
  });

  const history = useHistory();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await axios.post(`${lurl}`, {
        email: user.email,
        password: user.password
    })
    console.log(result.data)
    if(result.data.auth === true) {
        sessionStorage.setItem("token", result.data.token)
        history.push("/movies");
    } else {
      setUser({
        ...user,
        message: result.data.token
      });
    }
  }

  return (
    <div className="container mx-auto text-center" id="signin">
      <div className="container w-75">
        <h2 className="text-light text-start fw-bold">Sign In</h2>
        <form className="position-relative w-100" onSubmit={handleSubmit}>
          <input
            className="form-control mb-3 p-2 bg-dark text-light rounded-0"
            placeholder="Email"
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            className="form-control mb-3 p-2 bg-dark text-light  rounded-0"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
          <button type="submit" className="btn bg-danger mb-1 w-100 p-2 text-light">
            Sign In
          </button>
          <div className="d-flex justify-content-between mb-5">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="check-input"
              />
              <label htmlFor="check-input" className="form-check-label text-secondary">
                Remember me
              </label>
            </div>
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
                to="/signup"
                className="text-secondary d-inline-block link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover"
              >
                Sign up now.
              </Link>
            </p>
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <Link to="/" className="d-inline-block">
                Learn more.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
>>>>>>> 36088f84ff902e78a6fbc0901a7ab68398c7e7e6
