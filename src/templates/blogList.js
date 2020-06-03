import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default class BlogList extends React.Component {
  render() {
    const { edges: posts } = this.props.data.allMarkdownRemark
    return (
      <Layout>          
         {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="blog-post-preview" key={post.id}>
                <h1>
                  <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                </h1>
                <h2>{post.frontmatter.date}</h2>
                <p>{post.excerpt}</p>
              </div>
            )
          })}
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListNewQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {        
        edges {
            node {
                excerpt(pruneLength: 250)
                id
                frontmatter {
                path  
                title
                date(formatString: "MMMM DD, YYYY")
                }
            }
        }
    }
  }
`