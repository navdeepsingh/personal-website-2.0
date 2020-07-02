import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function Template({ data, pageContext }) {
  const { markdownRemark: post, bannerImage: banner } = data
  
  return (
    <Layout>
      <section>
        <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />        
        <div className="blog">
          <div className="blog-post">            
            <h1>{post.frontmatter.title}</h1>
            <div className="blog-post__date">Published On: {post.frontmatter.date}</div>
            <div className="blog-post__tag">#{post.frontmatter.tag}</div>                
            <div className="blog-post__banner">              
              <Img fluid={banner.childImageSharp.fluid} />
            </div>              
            <p
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

          </div>
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