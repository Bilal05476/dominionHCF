import "./FeaturedCauses.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import educationCause from "../../img/causes1.jpg";
import schoolCause from "../../img/causes2.jpg";

const content = [
  {
    title: "Dominion Health Care Institute & Staffing Company",
    tagLine: "Organization for Everyone",
    description:
      "As a student at Dominion Health Care Institute and Staffing, you will be fully prepared for externship, high qualified training by top qualified instructors with over 50 years combined in experience in the advanced and allied health field. Dominion Health Care Institute and staffing, Co is a rapidly growing Institute.",
    image: schoolCause,
  },
  {
    title: "Online Learning",
    tagLine: "Organization for Everyone",
    description:
      "Online Learning-Our experts will assure that with our both in person and online curriculum you will be sure to Learn all the tools needed to become the allied professional of your choice. Our team of instructors are certified and assist each student in receiving their certification.",
    image: educationCause,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

const FeaturedCauses = () => {
  return (
    <div className="FeaturedCauses container my-5">
      <div>
        <h2 className="text-center my-4">
          <strong className="course1">FEATURED</strong>{" "}
          <strong className="course2">CAUSES</strong>
        </h2>

        <Slider {...settings}>
          {content.map((item, ind) => {
            return (
              <div className="card-deck" key={ind}>
                <div className="card">
                  <img
                    src={item.image}
                    className="card-img-top"
                    height="300"
                    alt="card"
                  />
                  <div className="extras">
                    <i className="fa fa-spinner arrowDown fa-spin"></i>
                  </div>
                  <div className="card-body">
                    <h6 className="card-subtitle mb-2 ">{item.tagLine}</h6>
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <div className="text-center py-3">
                      <a
                        href="https://www.paypal.com/donate?hosted_button_id=CYMDQ2J47LTTE"
                        target="blank"
                        className="donation__Btn"
                        data-aos="zoom-in"
                      >
                        Donate Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedCauses;
