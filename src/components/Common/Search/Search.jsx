import styles from "./search.module.css";

const SearchBar = () => {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="search product" />
    </div>
  );
};

export default SearchBar;
