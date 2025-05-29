import styles from "./Nav.module.scss";
import { VECTOR_ASSETS } from "../../assets/vector-assets";

const Item = ({ title, isDropdown = false }) => {
  return (
    <li className={styles["item"]}>
      {title}
      <div className={isDropdown ? styles["item-show"] : styles["item-hide"]}>
        {VECTOR_ASSETS.downIcon}
      </div>
    </li>
  );
};

export default Item;
