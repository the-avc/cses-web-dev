import styles from "./ContentCard.module.scss";

function ContentCard({ imgSrc, imgAlt }) {
  return (
    <img loading="lazy" src={imgSrc} alt={imgAlt} className={styles.img} />
  );
}

export default ContentCard;
