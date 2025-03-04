import styles from "./HeaderSociety.module.scss"
import ContentCard from "./ContentCard"
import Button from "@/components/button/Button"

function Header_Society({ title, imageUrl }) {
  const parts = title.split(/~(.*?)~/)
  const buttons = [{ text: "ABOUT" }, { text: "TEAM" }]
  return (
    <section className={styles["hero"]}>
      <div className={styles["hero-left"]}>
        <p>
          {parts.map((part, index) =>
            index % 2 === 1 ? (
              <span
                key={index}
                className={styles['highlight']}
              >
                {part}
              </span>
            ) : (
              <span key={index}>{part}</span>
            )
          )}
        </p>
        <div className={styles["hero-buttons"]}>
          {buttons.map((button, index) => (
            <Button
              key={index}
              text={button.text}
            />
          ))}
        </div>
      </div>
      <div className={styles['hero-img']}>
        <ContentCard
          imgSrc={imageUrl}
          imgAlt={title}
        />
      </div>

    </section>
  )
}

export default Header_Society
