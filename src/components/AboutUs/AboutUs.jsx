import "./AboutUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StaffingVideo from "../../video/StaffingVideo.mp4";
import FoundationVideo from "../../video/DHCF.mp4";

export default function AboutUs() {
  return (
    <div className="container-fluid aboutusContain">
      <div className="row" style={{ justifyContent: "space-between" }}>
        <div className="col-md-6 py-5 px-4">
          <h2 className="mx-1 my-4 ">
            <strong className="about1">WE ARE </strong>
            <br />
            <strong className="about2">NONPROFIT TEAM</strong>
          </h2>
          <p className="p-2 ">
            Dominion Health Care Foundation is a rapidly growing non profit
            organization that takes an unconventional approach to the standard
            by providing the resources needed for Scholarships, Health and
            Wellness Awareness, Community and Economic Development, and
            Fundraising for individuals with the interest to pursue an Allied
            Health Career.
            <br />
            Fundamental to this work is filling gaps in knowledge, skills, and
            abilities by assessing individual needs and addressing those gaps
            through targeted training and long-term employment opportunities. At
            Dominion Health Care Foundation, high qualified training by top
            qualified instructors with over 50 years combined experience in the
            advanced and allied health field. Our programs focus on up-skilling
            that will support success now and into the future. It equips program
            people with the skills they'll need to accomplish their career
            objectives and create a secure future for themselves and their
            families. By taking a longer view, we can focus not only on what the
            people need to know now but also on how they can grow and develop
            over time to retain employment and open doors for additional
            advancement opportunities.
          </p>
          <div className="row">
            <div className="col-md-12 donateBtn">
              <a
                href="https://link.clover.com/urlshortener/rXyCkJ"
                target="blank"
                className="my-3 aboutBtn"
                data-aos="zoom-in"
                disabled
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 aboutImageSection"></div>
      </div>
      <div className="row">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <video style={{ width: "100%" }} controls>
                <source src={StaffingVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center text-center">
              <h3 className="staffing__name">
                Dominion Health Care Institute and Staffing Co.
              </h3>
            </div>
            <div className="linebreak"></div>
            <div className="col-md-6 d-flex justify-content-center align-items-center text-center">
              <h3 className="staffing__name">
                Dominion Health Care Foundation
              </h3>
            </div>
            <div className="col-md-6">
              <video style={{ width: "100%" }} controls>
                <source src={FoundationVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
