// import "./product.css";
import styles from "./product.module.css";
import { BiTrash } from "react-icons/bi";

const Product = (props) => {
  return (
    <div className={styles.product}>
      <p>product name : {props.product.title}</p>
      <p>product price : {props.product.price}</p>
      <p>product discout : {props.product.discout}</p>
      <span className={styles.quantity}>{props.product.quantity}</span>
      <input
      className={styles.input}
        type="text"
        onChange={props.onChange}
        value={props.product.title}
      />
      <button
        className={`${styles.button} ${styles.dec}`}
        onClick={props.onDecrement}
      >
        {props.product.quantity > 1 ? "- " : <BiTrash />} 
      </button>

      <button
        className={`${styles.button} ${styles.inc}`}
        onClick={props.onIncrement}
      >
        +
      </button>

      <button
        className={`${styles.button} ${styles.del}`}
        onClick={props.onDelete}
      >
        delete
      </button>
    </div>
  );
};

export default Product;
