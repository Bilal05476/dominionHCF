import "./WhatWe.css";
import educationImage from "../../img/education.png";
import welfareImage from "../../img/welfare.png";
import medicalImage from "../../img/medical.png";

const WhatWe = () => {
  const content = [
    {
      title: "WELFARE",
      image: welfareImage,
    },
    {
      title: "EDUCATION",
      image: educationImage,
    },
    {
      title: "MEDICAL",
      image: medicalImage,
    },
  ];
  return (
    <div className="volunteers container-fluid">
      <h3 className="text-center my-5">
        <strong className="volunteer1">FOUNDATION</strong>{" "}
        <strong className="volunteer2">EVENTS !!</strong>
      </h3>

      <div className="my-4 container volunteer__deck">
        {content.map((item, ind) => {
          return (
            <div key={ind} className="card volunteer" data-aos="flip-right">
              <img src={item.image} alt="" className="helpImg" />
              <strong>{item.title}</strong>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatWe;
