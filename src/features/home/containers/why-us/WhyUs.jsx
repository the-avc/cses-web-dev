import styles from './WhyUs.module.scss'
import InfoCard from '../../components/card/Card'
import cards from '../../assets/cardData.json'
import Title from '../../../../components/title/Title'

const WhyUs = () => {
  const name = 'CSE Society'
  const description = `The Computer Science and Engineering Society(CSES) is a state of the art initiative by the Department of Computer Science and Engineering, IIT(ISM), Dhanbad  commenced in the year 2011. The society serves as the harbringer of academic excellence coupled with a variety of extracurricular diasporas. We, at the CSE Society, aim to ensure that no one should remain ignorant of the vast opportunities prevailing in the tech world and thus strive to bring out the best in everyone, patronizing every kind of unique talents and novel ideas. Welcoming one and all aboard on the abode of knowledge.`
  return (
    <div
      id='about'
      className={styles['section']}
    >
      <Title
        mainTitle='What is'
        subTitle={name + '?'}
      />
      <p className={styles['description']}>{description}</p>
      <div className={styles['cardContainer']}>
        {cards.map((card, index) => (
          <InfoCard
            key={index}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
            isDarkText={card.isDarkText}
          />
        ))}
      </div>
    </div>
  )
}

export default WhyUs
