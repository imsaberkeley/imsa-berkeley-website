import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { Container } from '../components/elements'
import Jumbotron from '../components/jumbotron'

import Layout from '../components/layout'
import { rhythm } from '../utils/typography'
import { Grid, Row, Col } from 'react-flexbox-grid';

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const nodes = get(this, 'props.data.allMarkdownRemark.edges')
    const publicNodes = nodes.filter(n => (!get(n, 'node.frontmatter.draft')))

    const posts = publicNodes.filter(
      n => (!get(n, 'node.fields.slug').startsWith('/events/') )
    )
    const events = publicNodes.filter(
      n => (get(n, 'node.fields.slug').startsWith('/events/') )
    )

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Jumbotron />
        <Container>
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

        </Container>
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
            draft
          }
        }
      }
    }
  }
`
