import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const HeroContent = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    
  }

  return (
    <div className="container min-w-75 position-relative text-center" id="hero">
        <h1 className="text-light fs-1">Unlimited movies, TV shows and more</h1>
        <p className="text-light fs-4">Watch anywhere. Cancel anytime.</p>
        <p className="text-light fs-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form action="/movies" onSubmit={handleSubmit} className="form d-flex p-0 mx-auto justify-content-center">
          <input
            type="email"
            name="email"
            className="form-control w-50 bg-dark opacity-75 text-light rounded-0 me-4"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Email address"
          />
          <Link to="/login" className="btn bg-danger text-light fw-bold fs-5 rounded-0">
            Get Started 
          </Link>
        </form>
    </div>
  )
}

export default HeroContent