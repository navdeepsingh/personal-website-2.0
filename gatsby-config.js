/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
      cmsConfig: `/static/admin/config.yml`,
  },
}

module.exports = {
  // previous setup
  plugins: [    
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          netlifyCmsPaths,
          {
            resolve: `gatsby-remark-images`,
            options: {
                maxWidth: 1026,
                linkImagesToOriginal: true,
            },
          },
          {
            resolve: `gatsby-plugin-netlify-cms`,
            options: {
                enableIdentityWidget: true,
            },
          },
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/blog`,
              name: "markdown-posts",
            },
          },
        ],
      },
    },
  ],
}