import { useNavigate } from "react-router-dom"
import styles from "./ClubSection.module.scss"

function ClubSection(props) {
  const { name, description, image, link, actualLInk } = props
  const navigate = useNavigate()

  const handleNavigate = (e) => {
    if (actualLInk) {
      window.open(actualLInk, "_blank")
    } else {
      e.stopPropagation()
      navigate(`/${link}`)
    }
  }
  const nameId = name.replace(/\s/g, "").toLowerCase()

  return (
    <section
      id={nameId}
      className={styles["club-section"]}
      onClick={handleNavigate}
    >
      <div className={styles.content}>
        <div className={styles.column}>
          <div className={styles["club-info"]}>
            <div className={styles["club-header"]}>
              <h2 className={styles["club-name"]}>{name}</h2>
            </div>
            <p className={styles["club-description"]}>{description}</p>
          </div>
        </div>
        <div className={styles["image-column"]}>
          <div className={styles["image-wrapper"]}>
            {image ? (
              <img src={image} alt={name} className={styles["club-image"]} />
            ) : (
              <div className={styles["club-text"]}>{name}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClubSection
