import React from 'react'

const Faqs = () => {
  return (
    <section className="sections faqs-container text-center">
      <h1 className="mb-5">Frequently Asked Questions</h1>
      <div className="container">
        <div className="accordion accordion-flush text-start w-100 mb-5" id="faqs">
          {/* <!-- 1 --> */}
          <div className="accordion-item mb-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collpased text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#one"
                aria-controls="one"
                aria-expanded="false"
              >
                What is Netflix?
              </button>
            </h2>
            <div
              id="one"
              className="accordion-collapse collpase text-bg-dark"
              data-bs-parent="#faqs"
            >
              <div className="accordion-body">
                <p className="mb-3">
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries and more
                  - on thousands of internet-connected devices.
                </p>
                <p>
                  You can watch as much as you want, whenever you want, without
                  a single ad - all for one low monthly price. There's always
                  something new to discover, and new TV shows and movies are
                  added every week!
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 2 --> */}
          <div className="accordion-item mb-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#two"
                aria-controls="two"
                aria-expanded="false"
              >
                How much does Netflix cost?
              </button>
            </h2>
            <div
              id="two"
              className="accordion-collapse collapse text-bg-dark"
              data-bs-parent="#faqs"
            >
              <div className="accordion-body">
                <p>
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 3 --> */}
          <div className="accordion-item mb-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#three"
                aria-expanded="false"
                aria-controls="three"
              >
                Where can I watch?
              </button>
            </h2>
            <div
              id="three"
              className="accordion-collapse collapse text-bg-dark"
              data-bs-parent="#faqs"
            >
              <div className="accordion-body">
                <p className="mb-3">
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web at netflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles.
                </p>
                <p>
                  You can also download your favourite shows with the iOS,
                  Android, or Windows 10 app. Use downloads to watch while
                  you're on the go and without an internet connection. Take
                  Netflix with you anywhere.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 4 --> */}
          <div className="accordion-item mb-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#four"
                aria-expanded="false"
                aria-controls="four"
              >
                How do I cancel?
              </button>
            </h2>
            <div
              id="four"
              className="accordion-collapse collapse text-bg-dark"
              data-bs-parent="#faqs"
            >
              <div className="accordion-body">
                <p>
                  Netflix is flexible. There are no annoying contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 5 --> */}
          <div className="accordion-item mb-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#five"
                aria-expanded="false"
                aria-controls="five"
              >
                What can I watch on Netflix?
              </button>
            </h2>
            <div
              id="five"
              className="accordion-collapse collapse text-bg-dark"
              data-bs-parent="#faqs"
            >
              <div className="accordion-body">
                <p>
                  Netflix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Netflix
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- 6 --> */}
          <div className="accordion-item mb-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#six"
                aria-expanded="false"
                aria-controls="six"
              >
                Is Netflix good for kids?
              </button>
            </h2>
            <div
              id="six"
              className="accordion-collapse collapse text-bg-dark"
              data-bs-parent="#faqs"
            >
              <div className="accordion-body">
                <p className="mb-3">
                  The Netflix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and films in their own space.
                </p>
                <p>
                  Kids profiles come with PIN-protected parental controls that
                  let you restrict the maturity rating of content kids can watch
                  and block specific titles you don’t want kids to see.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="faqs-form">
          <h4 className="fs-4 mb-3">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>
          <form
            action="#"
            className="form d-flex p-0 mx-auto justify-content-center"
          >
            <input
              type="email"
              className="form-control fs-5 mb-2 bg-dark opacity-75 rounded-0 p-2 me-4"
              placeholder="Email address"
            />
            <button className="btn bg-danger text-light fw-bold fs-5 rounded-0">
              Get Started 
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Faqs