import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./chef.css";

export const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title="Chef's Word" />
        <h1 className="headtext__cormorant">What We Belive In</h1>

        <div className="chef-content">
          <div className="chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel?
            </p>
          </div>
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            tenetur ipsam natus dicta! Aperiam ut repudiandae voluptatibus dolor
            nostrum eos.
          </p>
        </div>

        <div className="chef-sign">
          <p>Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  );
};
