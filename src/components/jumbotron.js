import React from 'react'
import { Link } from 'gatsby'
import bg from "./southhall-bg.png"
import { Container, PullRight } from '../components/elements'

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
      <Container> 
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
      </Container>
    </div>
  </div>
)

export default Jumbotron
