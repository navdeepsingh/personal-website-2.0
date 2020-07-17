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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Navdeep Singh - Full Stack Developer`,
        short_name: `Navdeep Singh`,
        description: `This website is the personal virtual space of Navdeep Singh where he share his learnings and announcements, rather its general, life or technical.`,
        start_url: `/`,
        background_color: `#153649`,
        theme_color: `#153649`,
        display: `standalone`,
        icon: `favicons/nav-logo-192x192.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `/favicons/nav-logo-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/nav-logo-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },  
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
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/static/assets`,
              name: "markdown-assets",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-128599461-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true
      },
    },
  ],
}