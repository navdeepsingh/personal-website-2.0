const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogListTemplate = path.resolve(`src/templates/blogList.js`)
  const blogPostTemplate = path.resolve(`src/templates/blogPost.js`)
  const blogTagTemplate = path.resolve(`src/templates/blogTag.js`)

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
            edges {
                node {
                    id
                    frontmatter {
                      date
                      path
                      title
                      thumbnail {                        
                        publicURL
                      }
                    }
                }
            }
        }
      tags: allMarkdownRemark {
        distinct(field: frontmatter___tag)
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  
  const blogPosts = result.data.postsRemark.edges
  const postsPerPage = 3;
  const numPages = Math.ceil(blogPosts.length / postsPerPage)

  // Make blog list pages with pagination
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        prev: i === 0 ? null : (i === 1 ? `/blog` : `/blog/${i}`),
        next: i === numPages-1 ? null : `/blog/${i + 2}`,
      },
    })
  })

  // Make blog posts pages
  blogPosts.forEach(({node}) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {
        bannerImage: node.frontmatter.thumbnail.publicURL 
      }, // additional data can be passed via context
    })
  })

  // // Extract tag data from query
  const blogTags = result.data.tags.distinct
  // Make tag pages
  blogTags.forEach(tag => {
    createPage({
      path: `/tags/${tag}/`,
      component: blogTagTemplate,
      context: {
        tag: tag,
      },
    })
  })
}