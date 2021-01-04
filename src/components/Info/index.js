import React from 'react'
import styles from './info.module.css'

function Info(props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Contact Information</div>

      <div className={styles.content}>
        <div className={styles.email}>
          • For any feedback, questions, or proposals, please contact us
          at&nbsp;
          <a className={styles.link} href="mailto:imsa@ischool.berkeley.edu">
            imsa@ischool.berkeley.edu
          </a>
        </div>

        <div className={styles.social}>
          • Follow us on -
          <br />
          IG:&nbsp;
          <a
            className={styles.link}
            href="https://www.instagram.com/imsa_berkeley/?hl=en"
          >
            @imsa_berkeley
          </a>
        </div>
        <div className={styles.ischool}>
          • To learn more about the Information school at UC berkeley, please visit&nbsp;
          <a className={styles.link} href="https://www.ischool.berkeley.edu/">
            https://www.ischool.berkeley.edu/
          </a>
        </div>
      </div>
    </div>
  )
}

export default Info
