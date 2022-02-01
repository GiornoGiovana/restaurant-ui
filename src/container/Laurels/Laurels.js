import "./laurels.css";
import { SubHeading } from "../../components";
import { data, images } from "../../constants";

const AwardCard = ({ award }) => (
  <div className="app__laurels_awards-card">
    <img src={award.imgUrl} alt={award.title} />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {award.title}
      </p>
      <p className="p__cormorant">{award.subtitle}</p>
    </div>
  </div>
);

export const Laurels = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & recognition" />
        <h1 className="headtext__cormorant">Our Lourels</h1>

        <div className="app__laurels_awards">
          {data.awards.map((award, idx) => (
            <AwardCard key={idx} award={award} />
          ))}
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels" />
      </div>
    </div>
  );
};
