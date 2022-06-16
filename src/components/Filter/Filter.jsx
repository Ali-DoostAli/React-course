import { useState } from "react";
import { useProductsActions } from "../Provider/ProductProvider";
import styles from "./filter.module.css";
import SelectComponent from "../Common/Select/SelectComponent";
import SearchBar from "../Common/Search/Search";

const filterOptions = [
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
  const [filter, setFilter] = useState("");

  const [sort, setSort] = useState("");

  const filterHandler = (selectedOption) => {
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption: sort });
    setFilter(selectedOption);
  };
  const sortHandler = (selectedOption) => {
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
  };
  return (
    <div className={styles.filter}>
      <p>filter products based on :</p>
      <SearchBar filter={filter} />
      <SelectComponent
        title="sort by size"
        value={filter}
        onChange= {filterHandler}
        options={filterOptions}
      />
      <SelectComponent
        title="sort by price"
        value={sort}
        onChange={sortHandler}
        options={sortOptions}
      />
    </div>
  );
};

export default Filter;
