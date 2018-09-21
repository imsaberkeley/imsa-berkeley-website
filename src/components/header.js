import React from 'react'
import { Link } from 'gatsby'
import logo from "./imsa-logo.png"
import { PullRight, NavItem } from './elements'

const Header = ({ siteTitle }) => (
  <div
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <PullRight>
        <NavItem>
          News
        </NavItem>
        <NavItem>
          Events
        </NavItem>
        <NavItem>
          <Link
            to="/about"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
          Chairs
          </Link>
        </NavItem>
        <NavItem>
          <a
            href="https://goo.gl/forms/6CMhcfKIApIOwEuq1"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
          Feedback
          </a>
        </NavItem>
      </PullRight>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt="Logo" height="30"/>
        </Link>
      </h1>
      
    </div>
  </div>
)

export default Header
