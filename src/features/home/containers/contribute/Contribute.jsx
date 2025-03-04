import styles from './Contribute.module.scss'

const contributionWays = [
  'Join Events and Activities',
  'Volunteer Your Skills',
  'Become a Leader',
  'Provide Feedback',
]

function Contribute() {
  return (
    <section className={styles.contributeSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>Contribute</h2>
          <p>Become a part of the CSE Society</p>
          <div className={styles.content}>
            <div className={styles.textContent}>
              <h3 className={styles.subtitle}>Ways to contribute:</h3>
              <ul className={styles.contributionList}>
                {contributionWays.map((way, index) => (
                  <li
                    key={index}
                    className={styles.contributionItem}
                  >
                    {way}
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={'logo/Heritage.png'}
              alt='heritage'
              className={styles.heritage}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contribute
