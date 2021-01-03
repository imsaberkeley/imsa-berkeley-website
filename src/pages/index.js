import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { Container } from '../components/elements'
import Jumbotron from '../components/jumbotron'
import Footer from '../components/Footer'

import Layout from '../components/layout'
import { rhythm } from '../utils/typography'
import { Grid, Row, Col } from 'react-flexbox-grid'
// import styles from '../../styles/home.module.css'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const nodes = get(this, 'props.data.allMarkdownRemark.edges')
    const publicNodes = nodes.filter(n => !get(n, 'node.frontmatter.draft'))

    const posts = publicNodes.filter(
      n => !get(n, 'node.fields.slug').startsWith('/events/')
    )
    const events = publicNodes.filter(n =>
      get(n, 'node.fields.slug').startsWith('/events/')
    )

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Jumbotron />
        <div style={{
          margin: '60px 10%',
          fontFamily: 'Crimson Text',
          textAlign:'justify'
        }}>
          <h2 style={{
          fontFamily: 'Crimson Text',
        }}>About IMSA</h2>
          <p>
            The Information Management Student Association (IMSA) is the
            official organization representing MIMS students at the
            I&nbsp;School, UC Berkeley. IMSA acts as the collective voice of the
            MIMS students and provides a point of contact for any needs of the
            students. IMSA’s primary goal is to ensure that all students are
            getting the most out of their time at the School. This involves all
            facets of student life ranging from careers and academics to social
            and extracurricular activities. Furthermore, IMSA advocates for MIMS
            students regarding school administration and facility matters, and
            coordinates all events that require a joint student-administration
            effort. Finally and most importantly, we strive to ensure that
            everyone feels part of the I&nbsp;School family!
          </p>
        </div>
        <Footer />
        {/* <Container>
          <Grid fluid>
            <Row>
              <Col xs={12} md={8}>
                <h2>News</h2>
                {posts.map(({ node }) => {
                  const title = get(node, 'frontmatter.title') || node.fields.slug
                  return (
                    <div key={node.fields.slug}>
                      <h3
                        style={{
                          marginBottom: rhythm(1 / 4),
                        }}
                      >
                        <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                          {title}
                        </Link>
                      </h3>
                      <small>{node.frontmatter.date}</small>
                      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    </div>
                  )
                })}
              </Col>
              <Col xs={12} md={4}>
                <h2>Events</h2>
                {events.map(({ node }) => {
                  const title = get(node, 'frontmatter.title') || node.fields.slug
                  return (
                    <div key={node.fields.slug}>
                      <h3
                        style={{
                          marginBottom: rhythm(1 / 4),
                        }}
                      >
                        <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                          {title}
                        </Link>
                      </h3>
                      <small>{node.frontmatter.date}</small>
                    </div>
                  )
                })}
              </Col>
            </Row>
          </Grid>

        </Container> */}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            category
          }
        }
      }
    }
  }
`
