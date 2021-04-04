import "./AboutUs.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
            by providing allied health training. This process has proven to
            yield higher performance efficiency over the years with a goal to
            provide food, low interest loans, and career development for careers
            that do not require a 4-year college degree.
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
                href="https://www.paypal.com/donate?hosted_button_id=CYMDQ2J47LTTE"
                target="blank"
                className="my-3 aboutBtn"
                data-aos="zoom-in"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 aboutImageSection"></div>
      </div>
    </div>
  );
}
