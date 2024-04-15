import React from 'react'
import image2 from "../../../images/screenshot-2.png"

const Section2 = () => {
  return (
    <section className="sections text-center">
      <div
        className="row w-100 justify-content-evenly align-items-center video-stream"
      >
        <div className="col-lg-4 col-12 p-0">
          <img
            src={image2}
            height="300px"
            alt="tv animated"
          />
        </div>
        <div className="col-lg-6 col-12 text-start content">
          <h1 className="mb-3 fs-1">Download your shows to watch offline</h1>
          <h4>Save your favorite easily and always have something to watch.</h4>
        </div>
      </div>
    </section>
  )
}

export default Section2