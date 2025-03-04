import Event from "./Event.jsx"
import ComponentTitle from "@/components/title/Title.jsx"

import styles from "./UpcomingEvents.module.scss"
const UpcomingEvents = ({ eventsData, name }) => {
  if (!eventsData || eventsData.length === 0) {
    return null
  }

  return (
    <div className={styles.eventsWrapper}>
      <div className={styles.eventHeader}>
        <ComponentTitle mainTitle='Upcoming' subTitle='Events' />
      </div>
      {eventsData.map((event, index) => (
        <Event key={index} event={event} name={name} />
      ))}
    </div>
  )
}

export default UpcomingEvents
