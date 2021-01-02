import React from 'react'
import styles from './chair.css'

function Chair(props) {
  return (
      <div
      style={{
        width:'50%',
        margin: '20px',
      }}
      >
      <div style={{
      fontSize: '36px',
      fontFamily: 'Crimson Text',
      borderBottom: '5px solid gold',
      }}
      >{props.title}</div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        margin: '20px',

      }}
    >
        
      <div
        style={{
          width: '300px',
        }}
      >
        <img
          style={{
            borderRadius: '50%',
            borderColor: 'yellow',
            margin:'0 auto',
            // border: '2px solid gold'
          }}
          src={props.url}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          flex: '1',
          margin: '0 0 0 40px'

        }}
      >
        <div
          style={{
            margin: '0 0 20px 0',
            fontSize: '36px',
            fontFamily: 'Crimson Text'
          }}
        >
          {props.name}
        </div>
        <div
          style={{
            textAlign:'justify',
            fontFamily: 'Crimson Text'
          }}
        >
          {props.description}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Chair
