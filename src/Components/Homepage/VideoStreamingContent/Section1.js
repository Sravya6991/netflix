import React from 'react'
import image1 from "../../../images/screenshot-1.png"

const Section1 = () => {
  return (
    <section className="sections text-center">
      <div className="row w-100 justify-content-evenly align-items-center">
        <div className="col-lg-6 col-12 text-start content">
          <h1 className="mb-3">Enjoy on your TV</h1>
          <h4>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </h4>
        </div>
        <div className="col-lg-4 col-12 p-0">
          <img
            src={image1}
            height="300px"
            alt="tv animated"
          />
        </div>
      </div>
    </section>
  )
}

export default Section1