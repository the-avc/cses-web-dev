import styles from "./Title.module.scss";

const Title = ({ mainTitle, subTitle, style }) => {
  return (
    <div className={styles["clubs-title"]} style={style}>
      {mainTitle} <br />
      <span className={styles.subtitle}>{subTitle}</span>
    </div>
  );
};

export default Title;
