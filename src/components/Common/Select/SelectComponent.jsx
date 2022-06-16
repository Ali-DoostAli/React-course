import styles from "./select.module.css";
import Select from "react-select";

const SelectComponent = ({ title, ...rest }) => {
  return (
    <div className={styles.selectContiner}>
      <span>{title}</span>
      <Select {...rest} />
    </div>
  );
};

export default SelectComponent;
