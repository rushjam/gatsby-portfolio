import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color:blue
`


const BlogPage = ({ data }) => {
  return (
    <div>
      <BlogLink to="/">Rushik's Blog</BlogLink>
      <h4>{data.allMarkdownRemark.totalCount}</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div className={node.id}>
          <BlogLink to={`/blog${node.fields.slug}`}>
            <BlogTitle>
              {node.frontmatter.title} - {node.frontmatter.date}
            </BlogTitle>
          </BlogLink>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  )
}

export default BlogPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }
  }
`
