require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Cevher Veli Karakoç`,
    siteTitleAlt: `Cevher Veli Karakoç`,
    siteLanguage: `en`,
    author: `@cevherkarakoc`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emma`,
      options: {
        // basePath defaults to `/`
        basePath: `/`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cevher Veli Karakoç`,
        short_name: `ceveka`,
        description: `My portfolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#b83280`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
