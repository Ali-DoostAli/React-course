import "./product.css";


const Product = (props) => {
  return (
    <div className="product">
      <p>product name : {props.name}</p>
      <p>product price : {props.price}</p>

      {props.children}
    </div>
  );
};

export default Product;
