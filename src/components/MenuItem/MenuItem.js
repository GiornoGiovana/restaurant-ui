import "./menuItem.css";

export const MenuItem = ({ title, price, tags }) => {
  return (
    <div className="menuItem">
      <div className="menuItem-head">
        <div className="menuItem-name">
          <p className="p__cormorant" style={{ color: "#DCCA87" }}>
            {title}
          </p>
        </div>

        <div className="menuItem-dash" />

        <div className="menuItem-price">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>

      <div className="menuItem-sub">
        <p className="p__opensans" style={{ color: "#AAA" }}>
          {tags}
        </p>
      </div>
    </div>
  );
};
