const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogPost.js`)
  const blogTagTemplate = path.resolve("src/templates/blogTag.js")

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const blogPosts = result.data.postsRemark.edges;
  blogPosts.forEach(edge => {
    createPage({
      path: edge.node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })

  // Extract tag data from query
  const blogTags = result.data.tagsGroup.group
  // Make tag pages
  blogTags.forEach(tag => {
    createPage({
      path: `/tags/${tag.fieldValue}/`,
      component: blogTagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}