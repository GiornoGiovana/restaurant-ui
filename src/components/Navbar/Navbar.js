import { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";

const Menu = ({ classes }) => (
  <ul className={classes}>
    <li className="p__opensans">
      <a href="#home">Home</a>
    </li>
    <li className="p__opensans">
      <a href="#about">About</a>
    </li>
    <li className="p__opensans">
      <a href="#menu">Menu</a>
    </li>
    <li className="p__opensans">
      <a href="#awards">Awards</a>
    </li>
    <li className="p__opensans">
      <a href="#contact">Contact</a>
    </li>
  </ul>
);

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={images.gericht} alt="logo" />
      </div>
      <Menu classes="navbar-links" />
      <div className="navbar-login">
        <a href="#login" className="p__opensans">
          Log In / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <Menu classes="navbar-smallscreen_links" />
          </div>
        )}
      </div>
    </nav>
  );
};
