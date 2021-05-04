import "./PrimaryNav.css";
import logo from "../../img/footLogo.png";
import SliderComp from "../Slider/SliderComp";
import Services from "../Services/Services";
import FeaturedCauses from "../FeaturedCauses/FeaturedCauses";
import AboutUs from "../AboutUs/AboutUs";
import Footer from "../Footer/Footer";
import WhatWe from "../WhatWeDoing/WhatWe";
const PrimaryNav = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-light fixed-top"
        id="navbar"
        data-aos="zoom-in"
      >
        <a className="navbar-brand my-2" href="#">
          <img src={logo} alt="logo" id="logo" />
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-align-right"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto mx-5 mx-1 ">
            <a className="nav-item nav-link" id="navLink" href="#">
              Home
            </a>
            <a className="nav-item nav-link" id="navLink" href="#about">
              About
            </a>
            <a className="nav-item nav-link" id="navLink" href="#causes">
              Causes
            </a>
            <a className="nav-item nav-link" id="navLink" href="#whatwe">
              What we doing?
            </a>
            <a className="nav-item nav-link" id="navLink" href="#contact">
              Contact
            </a>
          </div>
          <a
            href="https://www.paypal.com/donate?hosted_button_id=CYMDQ2J47LTTE"
            target="blank"
            className="donation__Btn"
            id="navBtn"
          >
            Donate Now
          </a>
        </div>
      </nav>
      <div className="app">
        <SliderComp />
      </div>
      <Services />
      <div id="about" data-aos="fade-up">
        <AboutUs />
      </div>
      <div id="causes" data-aos="fade-up">
        <FeaturedCauses />
      </div>
      <div id="whatwe" data-aos="zoom-in">
        <WhatWe />
      </div>
      <div id="contact" data-aos="zoom-in">
        <Footer />
      </div>
    </div>
  );
};

export default PrimaryNav;