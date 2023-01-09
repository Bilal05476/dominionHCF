import "./Services.css";
import help from "../../img/help.jpeg";
import onlineHelp from "../../img/onlineHelp.jpg";
import expertise from "../../img/expertise.jpg";
import inspiration from "../../img/inspiration.jpg";

const Services = () => {
  const content = [
    {
      title: "SHARE YOUR VALUABLES",
      description:
        "Share your Valuables with us to add Value in Someone's Life !",
      image: help,
    },
    {
      title: "ONLINE HELP",
      description:
        "You Can Connect with us by Our Online Help Department for your Queries and Donations !",
      image: onlineHelp,
    },
    {
      title: "GIVE INSPIRATION",
      description:
        "You can Become Someone's Inspiration by Sharing your Innovative Ideas and Achievements !",
      image: inspiration,
    },
    {
      title: "SHARE EXPERTISE",
      description:
        "You can share your Expertise with us and also make a best of your part in our major Causes !",
      image: expertise,
    },
  ];
  return (
    <div className="services container-fluid">
      <h3 className="text-center my-5">
        <strong className="help1">HOW COULD</strong>{" "}
        <strong className="help2">YOU HELP ?</strong>
      </h3>

      <div className="row my-4">
        {content.map((item, ind) => {
          return (
            <div key={ind} className="col-md-3 help">
              <img src={item.image} alt="" className="helpImg" />
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
      <div className="row">
        <div className="col-md-12 donateBtn">
          <a
            href="https://link.clover.com/urlshortener/rXyCkJ"
            
            target="blank"
            className="donation__Btn"
            data-aos="zoom-in"
          >
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
