import "./categoryItem.styles.css";

import CategoryContext from "../../context/categorycontext";
import { useContext } from "react";

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
        <button onClick={filteredProducts} className="btn btn-shop">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
