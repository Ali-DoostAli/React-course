// import "./product.css";
import styles from "./product.module.css";


const Product = (props) => {
  return (
    <div className={styles.product} >
      <p>product name : {props.product.name}</p>
      <p>product price : {props.product.price}</p>
      <p>product discout  : {props.product.discout}</p>
      <span className={styles.quantity}>{props.product.quantity}</span>
      <button className={`${styles.button} ${styles.inc}`} onClick={props.onIncrement}>increment</button>
      <button className={`${styles.button} ${styles.inc}`} onClick={props.onDecrement}>decrement</button>
      <button className={styles.button}  onClick={props.onDelete}>delete</button>
      
    </div>
  );
};

export default Product;
