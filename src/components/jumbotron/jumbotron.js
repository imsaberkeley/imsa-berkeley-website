import React from 'react'
import { Link } from 'gatsby'
import bg from "./southhall-bg.png"
import { Container, PullRight } from '../elements'
import styles from './jumbotron.module.css'

const Jumbotron = ({ siteTitle }) => (
  <div
  >
    <div className={styles.background}
      style={{
        backgroundImage: `url(${bg})`,
        
      }}
    >
    <div className={styles.welcome} >
        <h1 style={{
        fontFamily: 'Crimson Text',

        
      }}>Welcome to IMSA</h1>
        <p>The Information Management Student Association at UC Berkeley</p> </div>
      {/* <Container> 
        <PullRight>
          <div style={{ 
            maxWidth: '300px',
            padding: '80px 20px'
          }}>
            <h1 style={{ 
              margin: 0,
              fontSize: '3em'
            }}>
              Hub for <nobr>all things</nobr> <nobr>I School</nobr>
            </h1>
            <p>Information Management Student Association (IMSA)</p>
          </div>
        </PullRight>
      </Container> */}
    </div>
  </div>
)

export default Jumbotron
