import "./categoryItem.styles.css";

import CategoryContext from "../../context/categorycontext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ data }) => {
  const { filteredProducts } = useContext(CategoryContext);

  const { title, img } = data;

  return (
    <div className="category-container">
      <div className="img-container">
        <img className="img" src={img} alt={title} />
      </div>
      <div className="category-info">
        <h3 className="title">{title}</h3>
        <Link to={"/shop"}>
          <button onClick={filteredProducts} className="btn btn-shop">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
