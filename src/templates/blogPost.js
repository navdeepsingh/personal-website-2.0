import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <section>
        <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
        <small>{post.frontmatter.tag}</small>
        <div className="blog-post">
          <h1>{post.frontmatter.title}</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        thumbnail {
          relativePath
        }
        tag
      }
    }
  }
`