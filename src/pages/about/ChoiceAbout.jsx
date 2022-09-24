import React from "react";
import workIMg from "../../assets/images/about/work.svg";

const ChoiceAbout = () => {
  return (
    <>
      <section className="why-us">
        <div className="container my-4">
          <div className="row">
            <div className="col-lg-5">
              <img src={workIMg} className="rounded img-fluid" alt="work" />
            </div>
            <div className="col-lg-7 align-self-end">
              <h2 className="h2 pb-3">Why you choose us?</h2>
              <p className="text-muted pb-5 light-300">
                You are allowed to download and use this Purple Buzz template
                for your websites. You are <strong>not allowed</strong> to
                re-distribute this template ZIP file on other template websites.
                It is quite easy to simply copy and repost the ZIP file on any{" "}
                <a
                  rel="nofollow"
                  href="https://www.google.com/search?q=free+css"
                  target="_blank"
                >
                  Free CSS collection
                </a>{" "}
                websites.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChoiceAbout;
