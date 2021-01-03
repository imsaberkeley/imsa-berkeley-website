import React from 'react'
import styles from './chair.module.css'
// import Radium from 'radium'

function Chair(props) {
  return (
    <div className={styles.outer}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.container}>
        <div className={styles.photo}>
          <img className={styles.image} src={props.url} />
        </div>
        <div className={styles.content}>
          <div className={styles.name}>{props.name}</div>
          <div className={styles.description}>{props.description}</div>
        </div>
      </div>
    </div>
  )
}

export default Chair
