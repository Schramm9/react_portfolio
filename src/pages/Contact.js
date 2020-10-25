import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="page-header">
            <h1>Contact</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4 float-right">
            <form action="/action_page.php">
              <div className="form-group">
                <label for="email">Name:</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="form-group">
                <label for="pwd">Email:</label>
                <input type="password" className="form-control" id="pwd" />
              </div>

              <div className="form-group">
                <label for="message">Message</label>
                <textarea
                  className="form-control"
                  aria-label="Message"
                  id="message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-default">
                Submit
              </button>
            </form>
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
