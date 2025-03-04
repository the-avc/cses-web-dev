import styles from './InitiativeList.module.scss'
import Navitem from '../../../../components/Navitem'

const InitiativeList = ({ initiatives }) => {
  return (
    <div className={styles.wrapper}>
      {initiatives.map((initiative, index) => (
        <div
          className={styles.initiative}
          key={index}
        >
          <Navitem text={initiative} />
        </div>
      ))}
    </div>
  )
}

export default InitiativeList
