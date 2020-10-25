import styles from "./All.module.css";
import React from "react";

export default function Portfolio() {
  return (
    <div className="container">
      <div className={styles.bannerc1}>
        <div className="container">
          <div className="banner-content">
            <span>collaborative project one:</span>
            <h1>informed diner</h1>
            <p>
              An application that makes use of the Google API and the BestTime
              API to determine what venues are nearby to the user and determines
              how busy a location will be at different times of the day.
            </p>
            <a
              href="https://github.com/Schramm9/Informed-Diner"
              target="_blank"
              className="btn-one"
            >
              Github (see the code)
            </a>
            <a
              href="https://schramm9.github.io/Informed-Diner/"
              target="_blank"
              className="btn-two"
            >
              deployed application
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bannerc2}>
        <div className="container">
          <div className="banner-content">
            <span>collaborative project two:</span>
            <h1>petmatch.com</h1>
            <p>
              A website for the many pet lovers of the world to connect and find
              play-dates for their cherished family members who don't use the
              net on their own.
            </p>
            <a
              href="https://github.com/Schramm9/petmatch"
              target="_blank"
              className="btn-one"
            >
              Github (see the code)
            </a>
            <a
              href="https://salty-bayou-40519.herokuapp.com/"
              target="_blank"
              className="btn-two"
            >
              deployed application
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h1 className="col-12 page-header mt-5">other projects of note:</h1>

          <div className="row row-cols-1 row-cols-md-2">
            <div className="col mb-2">
              <div className="card">
                <div className="row">
                  <img
                    className="img-fluid fixed-width col-md-6"
                    src="assets/images/pass_gen-img.png"
                    alt="Image of Password Generator web page with a password
                  result shown"
                  />
                  <div className="col-md-6">
                    <div className="d-flex flex-column">
                      <a
                        href="https://schramm9.github.io/Password_Generator/"
                        target="_blank"
                        className="btn btn-dark col-md-12 height-fixed"
                      >
                        Password Generator
                      </a>
                      <p>
                        Uses the math.random() method to pseudo-randomly select
                        from letters, digits and special characters to create a
                        password of the desired length and the content used
                        therein once the user selects their preferences.
                      </p>
                      <a
                        href="https://github.com/Schramm9/Password_Generator"
                        target="_blank"
                        className="btn btn-dark position-absolute bott-anchor"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-2">
              <div className="card">
                <div className="row">
                  <img
                    className="img-fluid fixed-width col-md-6"
                    src="assets/images/day_plnr.png"
                    alt="Image of Day Planner web page."
                  />
                  <div className="col-md-6">
                    <div className="d-flex flex-column">
                      <a
                        href="https://schramm9.github.io/Day_Planner/"
                        target="_blank"
                        className="btn btn-dark col-md-12 height-fixed"
                      >
                        Day Planner
                      </a>
                      <p>
                        A scheduling application that runs in the browser making
                        use of moment.js and jQuery to update content
                        dynamically on the page, save events in local storage
                        and indicate the status of an event as listed in a
                        certain "block" of time.
                      </p>
                      <a
                        href="https://github.com/Schramm9/Day_Planner"
                        target="_blank"
                        className="btn btn-dark position-absolute bott-anchor"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-2">
              <div className="card">
                <div className="row">
                  <img
                    className="img-fluid fixed-width col-md-6"
                    src="assets/images/infrmddnr.png"
                    alt="Image of Informed Diner listings page."
                  />
                  <div className="col-md-6">
                    <div className="d-flex flex-column">
                      <a
                        href="https://github.com/Schramm9/Informed-Diner"
                        target="_blank"
                        className="btn btn-dark col-md-12 height-fixed"
                      >
                        Informed Diner
                      </a>
                      <p>
                        An application that makes use of the Google API and the
                        BestTime API to determine what venues are nearby to the
                        user and determines how busy a location will be at
                        different times of the day.
                      </p>
                      <a
                        href="https://schramm9.github.io/Informed-Diner/"
                        target="_blank"
                        className="btn btn-dark position-absolute bott-anchor"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-2">
              <div className="card">
                <div className="row">
                  <img
                    className="img-fluid fixed-width col-md-6"
                    src="assets/images/weather_dashboard.png"
                    alt="Card image"
                  />
                  <div className="col-md-6">
                    <div className="d-flex flex-column">
                      <a
                        href="#"
                        target="_blank"
                        className="btn btn-dark col-md-12 height-fixed"
                      >
                        Weather Dashboard
                      </a>
                      <p className="mt-16">
                        An application that makes two API calls and acquires
                        data from the openweathermap.org API and displays the
                        data after retrieving it in the background
                        asynchronously.
                      </p>
                      <a
                        href="https://github.com/Schramm9/Weather_Dashboard"
                        target="_blank"
                        className="btn btn-dark position-absolute bott-anchor"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-2">
              <div className="card">
                <div className="row">
                  <img
                    className="img-fluid fixed-width col-md-6"
                    src="http://placehold.it/150x150"
                    alt="Card image"
                  />
                  <div className="col-md-6">
                    <div className="d-flex flex-column">
                      <a
                        href="#"
                        target="_blank"
                        className="btn btn-dark col-md-12 height-fixed"
                      >
                        _____
                      </a>
                      <p className="mt-16">Coming Soon</p>
                      <a
                        href="#"
                        target="_blank"
                        className="btn btn-dark position-absolute bott-anchor"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-2">
              <div className="card">
                <div className="row">
                  <img
                    className="img-fluid fixed-width col-md-6"
                    src="http://placehold.it/150x150"
                    alt="Card image"
                  />
                  <div className="col-md-6">
                    <div className="d-flex flex-column">
                      <a
                        href="#"
                        target="_blank"
                        className="btn btn-dark col-md-12 height-fixed"
                      >
                        _____
                      </a>
                      <p className="mt-16">Coming Soon</p>
                      <a
                        href="#"
                        target="_blank"
                        className="btn btn-dark position-absolute bott-anchor"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-2">
              <div className="card">
                <div className="row">
                  <img
                    className="img-fluid fixed-width col-md-6"
                    src="http://placehold.it/150x150"
                    alt="Card image"
                  />
                  <div className="col-md-6">
                    <div className="d-flex flex-column">
                      <a
                        href="#"
                        target="_blank"
                        className="btn btn-dark col-md-12 height-fixed"
                      >
                        _____
                      </a>
                      <p className="mt-16">Coming Soon</p>
                      <a
                        href="#"
                        target="_blank"
                        className="btn btn-dark position-absolute bott-anchor"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-2">
              <div className="card">
                <div className="row">
                  <img
                    className="img-fluid fixed-width col-md-6"
                    src="http://placehold.it/150x150"
                    alt="Card image"
                  />
                  <div className="col-md-6">
                    <div className="d-flex flex-column">
                      <a
                        href="#"
                        target="_blank"
                        className="btn btn-dark col-md-12 height-fixed"
                      >
                        _____
                      </a>
                      <p className="mt-16">Coming Soon</p>
                      <a
                        href="#"
                        target="_blank"
                        className="btn btn-dark position-absolute bott-anchor"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-2">
              <div className="card">
                <div className="row">
                  <img
                    className="img-fluid fixed-width col-md-6"
                    src="http://placehold.it/150x150"
                    alt="Card image"
                  />
                  <div className="col-md-6">
                    <div className="d-flex flex-column">
                      <a
                        href="#"
                        target="_blank"
                        className="btn btn-dark col-md-12 height-fixed"
                      >
                        _____
                      </a>
                      <p className="mt-16">Coming Soon</p>
                      <a
                        href="#"
                        target="_blank"
                        className="btn btn-dark position-absolute bott-anchor"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-2">
              <div className="card">
                <div className="row">
                  <img
                    className="img-fluid fixed-width col-md-6"
                    src="http://placehold.it/150x150"
                    alt="Card image"
                  />
                  <div className="col-md-6">
                    <div className="d-flex flex-column">
                      <a
                        href="#"
                        target="_blank"
                        className="btn btn-dark col-md-12 height-fixed"
                      >
                        _____
                      </a>
                      <p className="mt-16">Coming Soon</p>
                      <a
                        href="#"
                        target="_blank"
                        className="btn btn-dark position-absolute bott-anchor"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer fixed-bottom bg-dark">
        <div className="container">
          <a href="index.html">
            <span className="text-muted">Chris Schramm</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
