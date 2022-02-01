import { SubHeading } from "..";
import "./newsletter.css";

export const Newsletter = () => {
  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Enter your email" />
        <button className="custom__button">Subscribe</button>
      </div>
    </div>
  );
};
