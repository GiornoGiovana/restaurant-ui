import { MenuItem, SubHeading } from "../../components";
import { images, data } from "../../constants";
import "./specialMenu.css";

export const SpecialMenu = () => {
  return (
    <div className="specialMenu flex__center section__padding" id="menu">
      <div className="specialMenu-title">
        <SubHeading title="Menu That Fits Your palatte" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="specialMenu-menu">
        <div className="specialMenu-menu_wine flex__center">
          <p className="specialMenu-menu_heading">Wine & Bear</p>
          <div className="specialMenu-menu_items">
            {data.wines.map((wine, idx) => (
              <MenuItem
                key={idx}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
          </div>
        </div>

        <div className="specialMenu-menu_img">
          <img src={images.menu} alt="menu" />
        </div>

        <div className="specialMenu-menu_cocktails flex__center">
          <p className="specialMenu-menu_heading">Cocktails</p>
          <div className="specialMenu-menu_items">
            {data.cocktails.map((cocktail, idx) => (
              <MenuItem
                key={idx}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: "15px" }}>
        <button className="custom__button">View More</button>
      </div>
    </div>
  );
};
