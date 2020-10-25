import React from "react";
function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1>About Me</h1>

          <div className="col-md-12">
            <div className="float-left">
              <div className="caption">
                <p>
                  <img
                    src="assets/images/cjs.jpg"
                    alt="placeholder img"
                    className="img-thumbnail thumbnail img-responsive float-left mb-2 mr-2"
                  />
                  My desired role as a coding professional with a background in
                  engineering is to be connected to a technical career and in a
                  technical industry- IoT, software development as relates to
                  software being used by engineers, or just pure computer
                  programming. My past career work as a degreed design engineer
                  working in buildings, bridges and mechanical/product design
                  and computer aided drafting make me uniquely positioned to
                  work in a specialized position, to be considered to have a
                  unique skill set. The certificate I possess in full stack
                  development makes me very specialized yet agile- but any new
                  strides I take as a professional will still involve the same
                  driving forces I called upon in the past- to be a problem
                  solver and a difference maker. And to do this I rely on my
                  work ethic to be productive, efficient and create a superior
                  finished product.
                </p>
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
    </>
  );
}
export default Home;
