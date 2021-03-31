import "./SecondaryNav.css";

const SecondaryNav = () => {
  return (
    <div className="secondary">
      <div className="container secContainer">
        <div className="left__secondary">
          <h6>
            <i className="fa fa-phone"></i>
            {" - "} 1-800-370-8089
          </h6>
          <h6>
            <i className="fa fa-times"></i>
            {" - "} Mon-Fri 8:00 to 12:00
          </h6>
          <h6>
            <i className="fa fa-envelope"></i>
            {" - "} info@dominionhcis.com
          </h6>
        </div>
        <div className="right__secondary">
          
        </div>
      </div>
    </div>
  );
};

export default SecondaryNav;
