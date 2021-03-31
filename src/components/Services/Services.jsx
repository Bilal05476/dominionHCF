import "./Services.css";

const Services = () => {
  const content = [
    {
      title: "SHARE YOUR VALUABLES",
      description:
        "Share your Valuables with us to add Value in Someone's Life !",
      image:
        "https://images.unsplash.com/photo-1603185030522-05d4497bb180?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c21pbGUlMjBib3l8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    },
    {
      title: "ONLINE HELP",
      description:
        "You Can Connect with us by Our Online Help Department for your Queries and Donations !",

      image: "https://www.smartanswer.com/images/bann_1.jpg",
    },
    {
      title: "GIVE INSPIRATION",
      description:
        "You can Become Someone's Inspiration by Sharing your Innovative Ideas and Achievements !",

      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReqKdR2sdvRUKCuvP43Y75cv96euxYIMGLc4ltXRzqVPjDFw2TtMdK3qO07961CjDkVWk&usqp=CAU",
    },
    {
      title: "SHARE EXPERTISE",
      description:
        "You can share your Expertise with us and also make a best of your part in our major Causes !",
      image:
        "https://www.campusfrance.org/sites/default/files/expertise_conception%20programme%20bourses%20sur%20mesure.jpg",
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
          <button className="my-3" data-aos="zoom-in">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
