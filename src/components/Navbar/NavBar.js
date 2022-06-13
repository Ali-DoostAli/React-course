import { useContext } from "react";
import { useProducts } from "../Provider/ProductProvider";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const products = useProducts();
  const totalItems = products.length;
  return (
    <div className={styles.navBar}>
      <h2>frontHook.ir shopping</h2>
      <span>{totalItems}</span>
    </div>
  );
};

export default NavBar;
