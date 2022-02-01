import { MenuItem, SubHeading } from "../../components";
import { images, data } from "../../constants";
import "./specialMenu.css";

const MenuSection = ({ classes, subheading, items }) => (
  <div className={`${classes} flex__center`}>
    <p className="specialMenu-menu_heading">{subheading}</p>
    <div className="specialMenu-menu_items">{items}</div>
  </div>
);

export const SpecialMenu = () => {
  const wines = data.wines.map((wine, idx) => (
    <MenuItem
      key={idx}
      title={wine.title}
      price={wine.price}
      tags={wine.tags}
    />
  ));

  const cocktails = data.cocktails.map((cocktail, idx) => (
    <MenuItem
      key={idx}
      title={cocktail.title}
      price={cocktail.price}
      tags={cocktail.tags}
    />
  ));

  return (
    <div className="specialMenu flex__center section__padding" id="menu">
      <div className="specialMenu-title">
        <SubHeading title="Menu That Fits Your palatte" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="specialMenu-menu">
        <MenuSection
          classes="specialMenu-menu_wine"
          subheading="Wine & Bear"
          items={wines}
        />

        <div className="specialMenu-menu_img">
          <img src={images.menu} alt="menu" />
        </div>

        <MenuSection
          classes="specialMenu-menu_cocktails"
          subheading="Cocktails"
          items={cocktails}
        />
      </div>

      <div style={{ marginTop: "15px" }}>
        <button className="custom__button">View More</button>
      </div>
    </div>
  );
};
