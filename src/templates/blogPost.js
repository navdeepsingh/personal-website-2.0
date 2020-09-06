import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

export default function Template({ data, pageContext }) {
  const { markdownRemark: post, bannerImage: banner, site } = data

  return (
    <Layout>
      <Helmet>
        <title>{`Blog - ${post.frontmatter.title}`}</title>
        <meta property="og:title" content={post.frontmatter.title} />
        <meta property="og:description" content={post.frontmatter.excerpt} />
        <meta property="og:url" content={site.siteMetadata.siteURL + post.frontmatter.path} />
        <meta property="og:image" content={site.siteMetadata.siteURL + post.frontmatter.thumbnail.publicURL} />
      </Helmet>
      <section className="blog">
        <div className="single blog-post">
          <Link to={`blog`} className="back" title="Go Back to Previous Page">Back</Link>
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
        fluid(maxHeight: 400, quality: 99) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    site: site {
      siteMetadata {
        siteURL
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 250)
      frontmatter {        
        date(formatString: "MMMM DD, YYYY")
        title
        thumbnail {
          publicURL
        }
        tag
        path
      }
    }
  }
`