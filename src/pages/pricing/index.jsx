import React from "react";
import priceBg from "../../assets/images/price/pricing.svg";

const Pricing = () => {
  return (
    <>
      <section class="container py-5">
        <h1 class="h2 semi-bold-600 text-center pt-5">Pricing</h1>
        <p class="text-center pb-5 light-300">
          Vector illustration from{" "}
          <a rel="nofollow" href="https://storyset.com/" target="_blank">
            StorySet
          </a>
          . Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          facilisis.
        </p>

        <div class="row d-flex align-items-center pb-5">
          <div class="col-lg-6 offset-lg-0 col-md-8 offset-md-2">
            <img class="rounded float-right" src={priceBg} />
          </div>

          <div class="col-lg-6">
            <div class="pricing-list shadow-sm rounded-top rounded-3 py-sm-0 py-5">
              <div class="row p-2">
                <div class="pricing-list-icon col-3 text-center m-auto text-secondary ml-5 py-2">
                  <i class="display-3 fa-solid fa-box-open"></i>
                </div>
                <div class="pricing-list-body col-md-5 align-items-center pl-3 pt-2">
                  <ul class="list-unstyled text-center light-300">
                    <li class="h5 semi-bold-600 mb-0 mt-3">Free</li>
                    <li>Deserunt mollit laborum.</li>
                  </ul>
                </div>
                <div class="pricing-list-footer col-4 text-center m-auto align-items-center">
                  <a
                    href="#"
                    class="btn rounded-pill px-4 btn-primary light-300"
                  >
                    $0
                  </a>
                </div>
              </div>
            </div>
            <div class="pricing-list shadow-sm py-sm-0 py-5">
              <div class="row p-2">
                <div class="pricing-list-icon col-3 text-center m-auto text-secondary ml-5 py-2">
                  <i class="display-3 fa-solid fa-box-open"></i>
                </div>
                <div class="pricing-list-body col-md-5 align-items-center pl-3 pt-2">
                  <ul class="list-unstyled text-center light-300">
                    <li class="h5 semi-bold-600 mb-0 mt-3">Standard</li>
                    <li>Adipiscing elit, sed do</li>
                  </ul>
                </div>
                <div class="pricing-list-footer col-sm-4 col-5 text-center m-auto align-items-center">
                  <a
                    href="#"
                    class="btn rounded-pill px-4 btn-primary light-300"
                  >
                    $120/Year
                  </a>
                </div>
              </div>
            </div>
            <div class="pricing-list shadow-sm rounded-botton rounded-3 py-sm-0 py-5">
              <div class="row p-2">
                <div class="pricing-list-icon col-sm-3 text-center m-auto text-secondary ml-5 py-2">
                  <i class="display-3 fa-solid fa-box-open"></i>
                </div>
                <div class="pricing-list-body col-md-5 align-items-center pl-3 pt-2">
                  <ul class="list-unstyled text-center light-300">
                    <li class="h5 semi-bold-600 mb-0 mt-3">Enterprise</li>
                    <li>Sed do eiusmod tempor</li>
                  </ul>
                </div>
                <div class="pricing-list-footer col-sm-4 col-5 text-center m-auto align-items-center">
                  <a
                    href="#"
                    class="btn rounded-pill px-4 btn-primary light-300"
                  >
                    $840/Year
                  </a>
                </div>
              </div>
            </div>
            <p class="text-center">
              <a class="btn px-4 mt-4 mx-auto btn-outline-primary" href="#">
                Get Now
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
