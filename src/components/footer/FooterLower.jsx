import Lists from "./FooterList";
import styles from "./Footer.module.scss";

const FooterLower = () => {
  const date = new Date().getFullYear();

  const legal = [`© ${date} Dribbble`, "Terms", "Privacy", "Cookies"];
  const tags = [
    "Jobs",
    "Designers",
    "Freelancers",
    "Tags",
    "Places",
    "Resources",
  ];

  return (
    <div className={styles["footer-lower"]}>
      <Lists list={legal} />
      <Lists list={tags} />
    </div>
  );
};

export default FooterLower;
