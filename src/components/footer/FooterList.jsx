import styles from "./footer.module.scss";

const List = ({ list }) => {
  return (
    <div className={styles["lower-list"]}>
      {list.map((item, index) => {
        return (
          <a key={index} href="blank">
            {item}
          </a>
        );
      })}
    </div>
  );
};

export default List;
