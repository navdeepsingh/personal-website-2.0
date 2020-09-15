import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default class BlogList extends React.Component {
  render() {
    const { edges: posts } = this.props.data.allMarkdownRemark
    const { group: tags } = this.props.data.tags
    const { prev, next } = this.props.pageContext
    return (
      <Layout>
        <section className="blog">
          <div>
            <h1>My Blog</h1>
            <p>
              My personal space to write down my learnings about life, general
              and technical subjects.
            </p>
          </div>
          <div>
            <ul className="tags-list">
              {tags.map((tag, index) => {
                return (
                  <li key={index}>
                    <Link to={`tags/${tag.fieldValue}`}>#{tag.fieldValue}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="blog-listing">
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => {
                return (
                  <div className="blog-post" key={post.id}>
                    <h1>
                      <Link to={post.frontmatter.path}>
                        {post.frontmatter.title}
                      </Link>
                    </h1>
                    <div className="blog-post__date">
                      Published On: {post.frontmatter.date}
                    </div>
                    <div className="blog-post__tag">
                      #{post.frontmatter.tag}
                    </div>
                    <p>{post.excerpt}</p>
                  </div>
                )
              })}
          </div>
          <div className="pagination">
            {prev && (
              <Link to={`${prev}`} class="prev" rel="prev">
                Previous
              </Link>
            )}
            {next && (
              <Link to={`${next}`} class="next" rel="next">
                Next
              </Link>
            )}
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
