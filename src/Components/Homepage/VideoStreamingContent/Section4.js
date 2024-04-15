import React from 'react'
import image4 from "../../../images/screenshot-4.png";

const Section4 = () => {
  return (
    <section className="sections text-center">
      <div
        className="row w-100 justify-content-evenly align-items-center video-stream"
      >
        <div className="col-lg-4 col-12 p-0">
          <img
            src={image4}
            height="300px"
            alt="tv animated"
          />
        </div>
        <div className="col-lg-6 col-12 text-start content">
          <h1 className="mb-3">Create profiles for kids</h1>
          <h4>
            Send children on adventires with their favourite characters in a
            space made just for them - free with your membership.
          </h4>
        </div>
      </div>
    </section>
  )
}

export default Section4