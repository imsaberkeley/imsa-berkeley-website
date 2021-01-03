import React from './node_modules/react'
import { Link } from './node_modules/gatsby'
import bg from "./southhall-bg.png"
import { Container, PullRight } from './elements'
import styles from './jumbotron.module.css'

const Jumbotron = ({ siteTitle }) => (
  <div
  >
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        width: '100vw',
        minHeight: '100vh'
      }}
    >
    <div style={{
        float:'right',
        margin:'10% 10%',
        fontFamily: 'Crimson Text',
        maxWidth: '320px',
        textAlign:'center'

        
      }}>
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
