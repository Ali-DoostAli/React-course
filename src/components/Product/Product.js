// import "./product.css";
import styles from "./product.module.css";


const Product = (props) => {
  return (
    <div className={styles.product} onClick={props.click}>
      <p>product name : {props.name}</p>
      <p>product price : {props.price}</p>
      {props.children}
    </div>
  );
};

export default Product;
