import { Link } from "react-router-dom";
import Cover from "../../Shared.jsx/Cover/Cover";
import MenuItem from "../../Shared.jsx/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="">
      {title && <Cover img={coverImg} title={title}></Cover>}

      <div className="grid md:grid-cols-2 gap-10 pt-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 my-8">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
