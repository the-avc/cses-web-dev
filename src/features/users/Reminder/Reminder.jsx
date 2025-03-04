import styles from './Reminder.module.scss'
// exported at src\features\users\right-section\RightSection.jsx
const Reminders = () => {
   return (
      <div className={styles.reminders}>
         <div className={styles.header}>
            <h2>Our Events</h2>
            <span className="material-icons-sharp"></span>
         </div>

         <div className={styles.notification}>
            <div className={styles.icon}>
               <span className="material-icons-sharp"></span>
            </div>
            <div className={styles.content}>
               <div className={styles.info}>
                  <h3>Agglomeration</h3>
                  <small className={styles.text_muted}>Coming SOON...</small>
               </div>
            </div>
         </div>

         <div className={`${styles.notification} ${styles.deactive}`}>
            <div className={styles.icon}>
               <span className="material-icons-sharp"></span>
            </div>
            <div className={styles.content}>
               <div className={styles.info}>
                  <h3>Buffered Reader v6.2</h3>
                  <small className={styles.text_muted}>Arriving SOON...</small>
               </div>
            </div>
         </div>

         <div
            className={`${styles.notification} ${styles.addReminder}`}
            onClick={() => {
               window.open('..', '_blank')
            }}
         >
            <div>
               <span className="material-icons-sharp"></span>
               <h3>View More...</h3>
            </div>
         </div>
      </div>
   )
}

export default Reminders
