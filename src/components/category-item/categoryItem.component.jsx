import "./categoryItem.styles.css";

const CategoryItem = ({ data }) => {
  // console.log(data);
  const { title, img } = data;
  // console.log(img);
  return (
    <div className="category-container">
      <div className="img-container">
        <img className="img" src={img} alt={title} />
      </div>
      <div className="category-info">
        <h3 className="title">{title}</h3>
        <button className="btn btn-shop">Shop Now</button>
      </div>
    </div>
  );
};

export default CategoryItem;
