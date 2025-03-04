import styles from "./BackTitle.module.scss";
import BackArrow from "../../../public/BackArrow.svg";

const BackTitle = ({ text }) => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className={styles.titleWrapper}>
      <img
        className={styles.icon}
        src={BackArrow}
        alt="BackArrow SVG"
        onClick={handleReload}
      />
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default BackTitle;
