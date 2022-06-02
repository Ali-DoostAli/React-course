// import "./product.css";
import styles from "./product.module.css";


const Product = (props) => {
  return (
    <div className={styles.product} onClick={props.click}>
      <p>product name : {props.name}</p>
      <p>product price : {props.price}</p>
      <p>product discout : {props.discout}</p>
      <button onClick={props.onDelete}>delete</button>
      
    </div>
  );
};

export default Product;
