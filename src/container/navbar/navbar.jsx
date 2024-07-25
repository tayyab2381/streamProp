import React from "react";
import steamprop from "../../assets/images/StreamP.png";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container-sm">
        <img src={steamprop} alt="" />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>

          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item mx-2">
                <a
                  class="nav-link link-styling px-3"
                  aria-current="page"
                  href="#"
                >
                  Features
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link link-styling px-3" >
                  Pricing
                </a>
              </li>
              <li class="nav-item mx-2">
                <a class="nav-link link-styling px-3" >
                  Contact
                </a>{" "}
              </li>

              <li class="nav-item mx-2">
                <a class="nav-link link-styling px-3">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <button className="btn btn-primary buton-style link-styling px-2 px-3 py-1 py-2">
                  Join us
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
