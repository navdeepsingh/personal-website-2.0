import React from "react"
import PropTypes from "prop-types"

// Components
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `#${tag}: ${totalCount} post${
    totalCount === 1 ? "" : "s"
  }`

  return (
    <Layout>
      <section>
        <div className="blog">
          <h1 className="tag-header">{tagHeader}</h1>
          {edges.map(({ node }) => {            
            const { title, path, date, tag} = node.frontmatter;
            return (              
              <div className="blog-post" key={node.id}>
                <h1>
                  <Link to={path}>{title}</Link>
                </h1>
                <div className="blog-post__date">Published On: {date}</div>
                <div className="blog-post__tag">#{tag}</div>                
                <p>{node.excerpt}</p>
              </div>
              )
            })}
        </div> 
      </section>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              path: PropTypes.string.isRequired
            })
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tag: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 250)
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