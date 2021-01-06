import React from 'react'
import { Link } from 'gatsby'
import logo from './imsa-logo.png'
import { PullRight, NavItem } from './elements'

const Footer = () => (
  <React.Fragment>
    <div
      style={{
        backgroundColor: 'black',
        height: '120px',
        width: '100%',
        fontFamily: 'Crimson Text',
        textAlign: 'center',
        fontSize: '10px',
        lineHeight: '120px',
      }}
    >
      © 2020 IMSA
    </div>
  </React.Fragment>
)

export default Footer
