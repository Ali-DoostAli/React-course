import { useState } from "react";
import { useProductsActions } from "../Provider/ProductProvider";
import Select from 'react-select';
import styles from "./filter.module.css";

const options =[
    { value: "" , label: "All" },
    { value: "XS" , label: "XS" },
    { value: "S" , label: "S" },
    { value: "L" , label: "L" },
    { value: "XL" , label: "XL" },
    { value: "XXL" , label: "XXL" },
];

const Filter = () => {
  const dispatch = useProductsActions();
  const [value, setValue] = useState("");

  const changeHandler = (selectedOption) => {
    dispatch({ type: "filter", selectedOption});
    setValue(selectedOption);
  };
  return (
    <div className={styles.filter}>
      <p>filter products based on :</p>
      <div className={styles.selectContiner}>
        <span>order by</span>
        <Select className={styles.select} onChange={changeHandler} options={options} value={value} />
         
      </div>
    </div>
  );
};

export default Filter;
