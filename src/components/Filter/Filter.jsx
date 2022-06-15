import { useState } from "react";
import { useProductsActions } from "../Provider/ProductProvider";
import Select from "react-select";
import styles from "./filter.module.css";

const options = [
  { value: "", label: "All" },
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];
const sortOptions = [
  { value: "highest", label: " highest price" },
  { value: "lowest", label: "lowest price" },
];

const Filter = () => {
  const dispatch = useProductsActions();
  const [value, setValue] = useState("");

  const [sort, setSort] = useState("");

  const changeHandler = (selectedOption) => {
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption : sort });
    setValue(selectedOption);
  };
  const sortHandler = (selectedOption) => {
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
  };
  return (
    <div className={styles.filter}>
      <p>filter products based on :</p>
      <div className={styles.selectContiner}>
        <span>order by</span>
        <Select
          className={styles.select}
          onChange={changeHandler}
          options={options}
          value={value}
        />
      </div>
      <div className={styles.selectContiner}>
        <span>sort by</span>
        <Select
          className={styles.select}
          onChange={sortHandler}
          options={sortOptions}
          value={sort}
        />
      </div>
    </div>
  );
};

export default Filter;
