import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
// import "normalize.css/normalize.css";
import "./slider-animation.css";
import "./slider.css";
import image1 from "../../img/1.jpg";
import image2 from "../../img/2.jpg";
import image3 from "../../img/3.jpg";

const content = [
  {
    title: "Fundraising for the people and causes you care about",
    description: "Get Started Today.",
    image: image1,
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png",
  },
  {
    title: "Fundraising for the people and causes you care about",
    description: "Get Started Today.",
    image: image2,
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png",
  },
  {
    title: "Fundraising for the people and causes you care about",
    description: "Get Started Today.",
    image: image3,
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png",
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
            {/* <h5 className="py-1">{item.tagLine}</h5> */}
            <p>{item.description}</p>
            <button>Donate Now</button>
          </div>
          {/* <section>
            <img src={item.userProfile} alt={item.user} />
            <span>
              Posted by <strong>{item.user}</strong>
            </span>
          </section> */}
        </div>
      ))}
    </Slider>
  </div>
);
export default SliderComp;
