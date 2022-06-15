import { useState } from "react";
import { useProductsActions } from "../Provider/ProductProvider";

const Filter = () => {
  const dispatch = useProductsActions();
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    dispatch({ type: "filter", event: e });
    setValue(e.target.value);
  };
  return (
    <div>
      <p>filter products based on :</p>
      <div>
        order by
        <select onChange={changeHandler} value={value}>
          <option value={""}>All</option>
          <option value={"XS"}>XS</option>
          <option value={"S"}>S</option>
          <option value={"M"}>M</option>
          <option value={"L"}>L</option>
          <option value={"XL"}>XL</option>
          <option value={"XXL"}>XXl</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
