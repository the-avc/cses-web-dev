import styles from './Card.module.scss'

const Card = ({ title, description, imageSrc, isDarkText }) => {
  const textColorClass = isDarkText ? styles.darkText : styles.lightText
  const listItems = description.split('\n')

  return (
    <div className={styles.card}>
      <section className={textColorClass}>
        <img
          src={imageSrc}
          alt=''
          className={styles.cardImage}
        />
        <div className={styles.cardContent}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <div className={styles.cardDescription}>
            <ul>
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Card
