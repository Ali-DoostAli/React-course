import { useState } from "react";
import styles from "./search.module.css";
import { useProductsActions } from "../../Provider/ProductProvider";

const SearchBar = ({filter}) => {
  const dispatch = useProductsActions();
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    dispatch({ type: "filter", selectedOption: filter });
    dispatch({ type: "search", event: e });
    setValue(e.target.value);
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="search product"
        onChange={changeHandler}
        value={value}
      />
    </div>
  );
};

export default SearchBar;
