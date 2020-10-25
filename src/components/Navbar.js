import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Portfolio from "../pages/Portfolio";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

export default function Navbar() {
  return (
    <>
      <Router>
        <div>
          <nav className="navbar navbar-expand-sm mr-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://drive.google.com/file/d/1bXXo56YppS5LJGz5OpM4tJoYRsQu866C/view?usp=sharing"
                alt="link to my resume"
                target="_blank"
              >
                My Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="portfolio.html">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <li className="nav-item">
                <a
                  className="nav-link external"
                  id="linkedin"
                  href="https://www.linkedin.com/in/chris-schramm-cswa-eit-gestalt/"
                  alt="link to linkedin profile"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link external"
                  id="github"
                  href="https://github.com/Schramm9"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </li>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
