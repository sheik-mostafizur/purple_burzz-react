import React from "react";

import featureImgOne from "../../assets/images/work/feature-work-1.jpg";
import featureImgTwo from "../../assets/images/work/feature-work-2.jpg";
import featureImgThree from "../../assets/images/work/feature-work-3.jpg";
import featureImgFour from "../../assets/images/work/feature-work-4-large.jpg";

const FeatureWork = () => {
  return (
    <>
      <section class="feature_work py-5">
        <div class="container my-4">
          <div class="row d-flex d-flex align-items-center">
            <div class="col-lg-5">
              <h3 class="h4 text-muted">Featured Work</h3>
              <h1 class="feature-work-heading py-3 ">Transform with us</h1>
              <p class="feature-work-body text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <p class="feature-work-footer text-muted">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                gravida. Risus commodo viverra maecenas. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
            <div class="col-lg-6 offset-lg-1 align-left">
              <div class="row">
                <a
                  class="col"
                  data-type="image"
                  data-fslightbox="gallery"
                  href="./assets/img/feature-work-1-large.jpg"
                >
                  <img class="img-fluid" src={featureImgOne} />
                </a>
                <a
                  class="col"
                  data-type="image"
                  data-fslightbox="gallery"
                  href="./assets/img/feature-work-2-large.jpg"
                >
                  <img class="img-fluid" src={featureImgTwo} />
                </a>
              </div>
              <div class="row pt-4">
                <a
                  class="col"
                  data-type="image"
                  data-fslightbox="gallery"
                  href="./assets/img/feature-work-3-large.jpg"
                >
                  <img class="img-fluid" src={featureImgThree} />
                </a>
                <a
                  class="col"
                  data-type="image"
                  data-fslightbox="gallery"
                  href="./assets/img/feature-work-4-large.jpg"
                >
                  <img class="img-fluid" src={featureImgFour} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureWork;
