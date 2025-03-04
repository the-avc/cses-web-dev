import styles from "./UpcomingEvents.module.scss";

const Event = ({ event, name }) => {

  return (
    <div className={styles.upcomingEvent}>
      <div className={styles.eventTitle}>{event.title}</div>
      <div className={styles.prizeInfo}>Prizes worth {event.prize}</div>
      <div className={styles.eventDate}>Date: {event.date}</div>
      <div className={styles.eventDescription}>{event.description}</div>

      <div className={styles.ruleInfo}>
        <h3>Rules:</h3>
        <ul>
          {event.rules.map((rule, idx) => (
            <li key={idx}>{rule}</li>
          ))}
        </ul>
        <a
          href={event.rulebook}
          className={styles.ruleLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read the document for more details
        </a>
      </div>

      <div className={styles.contactDetails}>
        {event.contact.map((person, idx) => (
          <div key={idx} className={styles.contact}>
            Contact: {person.name} ({person.contact})
          </div>
        ))}
      </div>
      <div className={styles.footer}>by {name} </div>
    </div>
  );
};

export default Event;
