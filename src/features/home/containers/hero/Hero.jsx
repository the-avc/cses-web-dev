import styles from './hero.module.scss'
import circleOutlined from '../../assets/circles.svg'
import Button from '../../../../components/button/Button'

const Hero = () => {
  const buttons = [{ text: 'members' }, { text: 'initiatives' }]

  return (
    <div className={styles['bg-container']}>
      <div className={styles['bg-header']}>
        <img
          src={'logo/outline.jpeg'}
          alt='Outline'
          className={styles['header-outline']}
        />
      </div>
      <div className={styles['bg-header-phone']}>
        <img
          src='/iit-ism-phone.png'
          alt='Outline'
          className={styles['header-outline-phone']}
        />
      </div>
      <img
        src={circleOutlined}
        alt='Circles'
        className={styles['circles-img']}
      />
      <header className={styles['hero-header']}>
        <div className={styles['content']}>
          <h1 className={styles['title']}>
            A platform for CSE <br /> Students to learn,
            <br /> compete, and contribute
          </h1>
          <img
            src={'logo/iit-ism.png'}
            alt='IIT ISM Dhanbad logo'
            className={styles['logo']}
          />
        </div>

        <div className={styles['btn-group']}>
          {buttons.map((button, index) => (
            <Button
              key={index}
              text={button.text.toUpperCase()}
            />
          ))}
        </div>
      </header>
    </div>
  )
}

export default Hero
