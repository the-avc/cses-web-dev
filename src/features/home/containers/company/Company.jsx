import styles from './Company.module.scss'

const Company = () => {
  return (
    <div className={styles['company-list']}>
      <div className={styles['text-content']}>
        <h2 className={styles['title']}>
          World-class talent
          <br /> is just one step <br /> away
        </h2>
        <p className={styles['description']}>
          Learn from and collaborate with some of the brightest minds in the
          field.
        </p>
        <div className={styles['stats-container']}>
          <div className={styles['stat-item']}>
            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_179_1148)">
                <path fillRule="evenodd" clipRule="evenodd" d="M29.9982 10.7812H9.99819V14.1145H24.3086L9.30859 29.1147L11.6656 31.4716L26.6649 16.4725V30.7812H29.9982V10.7812Z" fill="#00EB8D" />
              </g>
              <defs>
                <clipPath id="clip0_179_1148">
                  <rect width="40" height="40" fill="white" transform="translate(0 0.78125)" />
                </clipPath>
              </defs>
            </svg>
            <div className={styles['stat-value']}>
              750+ <span>members</span>
            </div>
          </div>
        </div>
      </div>
      <img
        loading='lazy'
        src={'logo/company.logo.jpg'}
        className={styles['side-image']}
        alt='Talented people illustration'
      />
    </div>
  )
}

export default Company