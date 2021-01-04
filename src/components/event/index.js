import React from 'react'
import styles from './event.module.css'

function Event(props) {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{props.name}</div>

      <div className={styles.photo}>
        <img className={styles.image} src={props.url} />
      </div>

      <div className={styles.description}>{props.description}</div>

      <div className={styles.decoration2} />
    </div>
  )
}

export default Event
