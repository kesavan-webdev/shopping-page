import "./categories.styles.css";
import { categories } from "../../Data";
import CategoryItem from "../category-item/categoryItem.component";

import "./categories.styles.css";
const Categories = () => {
  return (
    <div className="categories">
      {categories.map((val) => {
        return <CategoryItem data={val} key={val.id} />;
      })}
    </div>
  );
};

export default Categories;
