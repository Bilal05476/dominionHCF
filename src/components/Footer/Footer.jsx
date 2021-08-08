import "./Footer.css";
import logo from "../../img/footLogo.png";
import gallery1 from "../../img/gall1.jpg";
import gallery2 from "../../img/gall2.jpg";
import gallery3 from "../../img/gall3.jpg";
import gallery4 from "../../img/gall4.jpg";
import gallery5 from "../../img/gall5.jpg";
import gallery6 from "../../img/gall6.jpg";

export default function Footer() {
  const GalleryImages = [
    {
      image: gallery1,
    },
    {
      image: gallery2,
    },
    {
      image: gallery3,
    },
    {
      image: gallery4,
    },
    {
      image: gallery5,
    },
    {
      image: gallery6,
    },
  ];
  return (
    <div className="container-fluid footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 my-2">
            <img className="footerLogo" src={logo} alt="webLogo" />
            <h5>Our Mission</h5>
            <p>
              Our goal is to make a difference in the lives of people who are in
              desperate need. We aspire to interrupt negative patterns of broken
              individuals in need of right now assistance. We will work
              diligently to offer a better way of life, and it is through our
              networking efforts we will offer a hand up, not a handout.?
            </p>
          </div>
          <div className="col-md-3 my-4">
            <h4>Useful Links</h4>
            <a href="#" className="footer__link">
              Home
            </a>{" "}
            <br />
            <a href="#about" className="footer__link">
              About
            </a>{" "}
            <br />
            <a href="#causes" className="footer__link">
              Causes
            </a>{" "}
            <br />
            <a href="#whatwe" className="footer__link">
              What we doing?
            </a>{" "}
            <br />
            <a href="#contact" className="footer__link">
              Contact
            </a>{" "}
            <br />
            <div className="footer__icons my-3">
              <a
                href="https://www.facebook.com/Dominion-Health-Care-Foundation-107220368137748"
                target="blank"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/dominionhealthcarefoundation/"
                target="blank"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/dominion-health-care-foundation/"
                target="blank"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCDsTNDfuJiGQnw06QJlivgg"
                target="blank"
              >
                <i className="fa fa-youtube"></i>
              </a>
              <a href="mailto:info@dominionhcis.com">
                <i className="fa fa-google"></i>
              </a>
            </div>
          </div>
          <div className="col-md-3 my-4 gallery">
            <h4>Gallery</h4>
            <div className="row">
              {GalleryImages.map((item, ind) => {
                return (
                  <div
                    className="col-6 col-md-5 p-0 imageContain"
                    data-aos="flip-right"
                    key={ind}
                  >
                    <img
                      className="galleryImage"
                      src={item.image}
                      alt="gallery"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-md-3 contact my-4">
            <h4>Quick Contact</h4>
            <div className="footerCont">
              <div className="address">
                <i className="fa fa-map-marker"></i>
                <strong>Physical Office</strong>
              </div>
              <p className="m-2">
                439 Westwood Suite 157 Fayetteville, NC 28314
              </p>
              <div className="address">
                <i className="fa fa-map-marker"></i>
                <strong>Corporate Address</strong>
              </div>
              <p className="m-2">
                1700 Northside Drive Suite A7 Box 2063 Atlanta, GA 30318
              </p>
            </div>
            <div className="footerCont">
              <div className="address">
                <i className="fa fa-phone"></i>
                <strong>Phone Number</strong>
              </div>
              <p className="m-2">1-800-370-8089</p>
            </div>

            <div className="address">
              <i className="fa fa-envelope"></i>
              <strong>Email</strong>
            </div>
            <p className="m-2">info@dominionhcis.com</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="copyright py-3">
              Copyright © 2021 | All Rights Reserved Dominion Health Care
              Foundation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
