import React from 'react'
import { Link } from 'gatsby'
import logo from './imsa-logo.png'
import { PullRight, NavItem } from './elements'

const Header = ({ siteTitle }) => (
  <div>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '40px auto',
        width: '90%',
        fontFamily: 'Crimson Text',
      }}
    >
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <img src={logo} alt="Logo" height="30px" style={{marginBottom:'0'}}/>
      </Link>

      <div style={{ display: 'flex', justifyContent: 'flex-end', flex: '1' }}>
        {/* <NavItem>
          News
        </NavItem> */}
        <NavItem>About</NavItem>
        <NavItem>
          <Link
            to="/chairs"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Chairs
          </Link>
        </NavItem>
        <NavItem>Contact</NavItem>
        {/* <NavItem>
          <a
            href="https://goo.gl/forms/6CMhcfKIApIOwEuq1"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
          Feedback
          </a>
        </NavItem> */}
      </div>
    </div>
  </div>
)

export default Header
