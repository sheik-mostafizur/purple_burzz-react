import React from "react";

const ContactAbout = () => {
  return (
    <>
      <section className="contact_about bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto my-4 p-3">
              <form action="#" method="get">
                <h1 className="h2 text-center">Stay up to date with us</h1>
                <div className="input-group py-3">
                  <input
                    name="email"
                    type="text"
                    className="form-control form-control-lg rounded-pill rounded-end"
                    id="email"
                    placeholder="Your Email"
                    aria-label="Your Email"
                  />
                  <button
                    className="btn text-white btn-lg rounded-pill rounded-start px-lg-4"
                    type="submit"
                  >
                    Subsribe
                  </button>
                </div>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt labore et dolore magna aliqua.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactAbout;
