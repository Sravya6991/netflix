import React from 'react'
import image3 from "../../../images/screenshot-3.png";

const Section3 = () => {
  return (
    <section className="sections text-center">
      <div className="row w-100 justify-content-evenly align-items-center">
        <div className="col-lg-6 col-12 text-start content">
          <h1 className="mb-3">Watch everywhere</h1>
          <h4>
            Stream unlimited movies ad TV shows on your phone, tablet, laptop
            and TV.
          </h4>
        </div>
        <div className="col-lg-4 col-12 p-0">
          <img
            src={image3}
            height="300px"
            alt="tv animated"
          />
        </div>
      </div>
    </section>
  )
}

export default Section3