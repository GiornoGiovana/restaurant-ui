import { SubHeading } from "../../components";
import images from "../../constants/images";
import "./header.css";

export const Header = () => {
  return (
    <div className="header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="header-h1">The Key to Fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          voluptas ullam quibusdam sint! Illo reprehenderit iure eum expedita.
        </p>
        <button className="custom__button">Explore Menu</button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header" />
      </div>
    </div>
  );
};
