import Title from '../../../../components/title/Title'
import styles from './OurLeaders.module.scss'
import data from '../../assets/leaders.json'
import useHorizontalTab from '../../../../hooks/useHorizontalTab/useHorizontalTab'

const OurLeaders = () => {
  const { HorizontalScroll, activeTab, activeIndex } = useHorizontalTab(data)
  return (
    <>
      <div
        id='members'
        className={styles.container}
      >
        <div className={styles.contentWrapper}>
          <Title
            mainTitle={`${data[activeTab].name}`}
            subTitle='of the CSE Society'
          />
          <HorizontalScroll />
          <div className={styles.members}>
            {data[activeTab]['data'][activeIndex].map((val, index) => (
              <div
                key={index}
                className={styles.member}
              >
                <div className={styles.name}>{val.name}</div>
                {val?.grad_year ? (
                  <div className={styles.batch}>Batch- {val?.grad_year}</div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default OurLeaders
