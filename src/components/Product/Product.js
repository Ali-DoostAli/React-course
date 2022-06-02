// import "./product.css";
import styles from "./product.module.css";


const Product = (props) => {
  return (
    <>
      <p>product name : {props.name}</p>
      <p>product price : {props.price}</p>
      {props.children}
    </>
  );
};

export default Product;
