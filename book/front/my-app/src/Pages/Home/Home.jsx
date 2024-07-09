import React from "react";
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section>
        <div>
          <marquee behavior="" direction=""></marquee>
        </div>
        <div className="container text-center my-5">
          <div className="row">
            <div className="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 mx-auto">
                <h1  style={{color:"blueviolet"}}>Easy Books</h1>
                <hr/>
                  <h5 className="card-title">
                    Where Simplicity Meets creativity in every Click !
                  </h5>
                  <hr/>
                  <p className="text-secondary">
                  A book is a medium for recording information in the form of writing or images. Books are typically composed of many pages, bound together and protected by a cover. Modern bound books were preceded by many other written mediums, such as the codex and the scroll.
                  </p>
                  <div className= "d-flex justify-content-center align-item-center">
                  <div className="my-4 fw-bold p-4 box fs-5">
                  <Link to={"/Books"} className="home-btn p-3">Read Books</Link>
                  </div>
                  </div>
            </div>
            <div className="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 mx-auto">
              <div className="home-img">
                <img src="/assets/home.avif" className="rounded img-fluid" alt="Read Books" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;