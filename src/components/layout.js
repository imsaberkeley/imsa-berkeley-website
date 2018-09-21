import React from 'react'
import { Link } from 'gatsby'
import Header from './header'
import { rhythm, scale } from '../utils/typography'
import './layout.css'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      //
    } else {
      //
    }
    return (
      <div>
        <Header />
        {children}
      </div>
    )
  }
}

export default Template
