import images from "../../constants/images";
import "./aboutUs.css";

const AboutContent = ({ classes, header, content }) => (
  <div className={classes}>
    <h1 className="headtext__cormorant">{header}</h1>
    <img src={images.spoon} alt="spoon" className="spoon__img" />
    <p className="p__opensans">{content}</p>
    <button className="custom__button">Know More</button>
  </div>
);

export const AboutUs = () => {
  return (
    <div className="aboutus app__bg flex__center section__padding" id="about">
      <div className="aboutus-overlay flex__center">
        <img src={images.G} alt="g letter" />
      </div>

      <div className="aboutus-content flex__center">
        <AboutContent
          classes="aboutus-content_about"
          header="About Us"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            doloremque laboriosam itaque deleniti earum doloribus distinctio
            minus ut!"
        />

        <div className="aboutus-content_knife flex__center">
          <img src={images.knife} alt="knife" />
        </div>

        <AboutContent
          classes="aboutus-content_history"
          header="Our History"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            doloremque laboriosam itaque deleniti earum doloribus distinctio
            minus ut!"
        />
      </div>
    </div>
  );
};
