import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function Template({ data, pageContext }) {
  const { markdownRemark: post, bannerImage: banner } = data
  
  return (
    <Layout>
      <Helmet title={`Blog - ${post.frontmatter.title}`} /> 
      <section className="blog">               
          <div className="single blog-post">
            <button title="Go Back to Previous Page" className="back" onClick={() => {window.history.go(-1); return false;}}>Back</button>            
            <h1>{post.frontmatter.title}</h1>
            <div className="blog-post__date">Published On: {post.frontmatter.date}</div>
            <div className="blog-post__tag">#{post.frontmatter.tag}</div>                
            <div className="blog-post__banner">              
              <Img fluid={banner.childImageSharp.fluid} />
            </div>              
            <div
              className="blog-post__content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!, $bannerImage: String!) {
    bannerImage: file(publicURL: { eq: $bannerImage }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxHeight: 400, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        thumbnail {
          publicURL
        }
        tag
      }
    }
  }
`