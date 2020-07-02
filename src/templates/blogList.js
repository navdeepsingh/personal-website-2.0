import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default class BlogList extends React.Component {
  render() {
    const { edges: posts } = this.props.data.allMarkdownRemark;
    const { group: tags } = this.props.data.tags;
    const { prev, next } = this.props.pageContext;  
    return (
      <Layout> 
        <section className="blog">
          <div>
            <ul className="tags-list">
            {
              tags.map(tag => {
                return <li>
                        <Link to={`tags/${tag.fieldValue}`}>#{tag.fieldValue}</Link>
                      </li>
              })
            }
            </ul>
          </div>
         {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className="blog-post" key={post.id}>
                <h1>
                  <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                </h1>
                <div className="blog-post__date">Published On: {post.frontmatter.date}</div>
                <div className="blog-post__tag">#{post.frontmatter.tag}</div>                
                <p>{post.excerpt}</p>
              </div>
            )
          })}
          <div className="pagination">
            <div>
              {prev && <Link to={`${prev}`} rel="prev"> ← Last </Link>}
            </div>

            <div style={{ justifySelf: 'flex-end' }}>
              {next && <Link to={`${next}`} rel="next"> Next → </Link>}
            </div>
          </div>
          </section>
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListNewQuery($skip: Int!, $limit: Int!) {
    tags: allMarkdownRemark {
      group(field: frontmatter___tag) {      
        totalCount
        fieldValue        
      }
    }
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
                  tag
                }
            }
        }
    }
  }
`