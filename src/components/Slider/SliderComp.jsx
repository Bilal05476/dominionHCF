import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
// import "normalize.css/normalize.css";
import "./slider-animation.css";
import "./slider.css";
// import image1 from "../../img/1.jpg";
import image2 from "../../img/2.jpg";
import image3 from "../../img/3.jpg";
import image4 from "../../img/4.jpeg";
import image5 from "../../img/5.jpg";

const content = [
  {
    title: "Raising Funds to educate those interested in Allied Health Care",
    description: "Get Started Today.",
    image: image4,
  },
  {
    title: "Raising Funds to educate those interested in Allied Health Care",
    description: "Get Started Today.",
    image: image2,
  },
  {
    title: "Raising Funds to educate those interested in Allied Health Care",
    description: "Get Started Today.",
    image: image3,
  },
  {
    title: "Raising Funds to educate those interested in Allied Health Care",
    description: "Get Started Today.",
    image: image5,
  },
];

const SliderComp = () => (
  <div>
    <Slider className="slider-wrapper" autoplay={3000}>
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{
            background: `url('${item.image}') no-repeat`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: "none !important",
          }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <div className="py-3">
              <a
                href="#"
                disabled
                target="blank"
                className="donation__Btn"
                data-aos="zoom-in"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);
export default SliderComp;
