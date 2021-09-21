module.exports = {
  siteMetadata: {
    siteTitle: "gatsby-starter-shopify",
    siteTitleDefault: "gatsby-starter-shopify by @GatsbyJS",
    siteUrl: "https://shopify-demo.gatsbyjs.com",
    hrefLang: "en",
    siteDescription:
      "A Gatsby starter using the latest Shopify plugin showcasing a store with product overview, individual product pages, and a cart.",
    siteImage: "/default-og-image.jpg",
    twitter: "@gatsbyjs",
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        // Use environemnt variables for production purpose of use🙈
        password: "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",
        storeUrl: "gatsby-storyblok.myshopify.com",
        shopifyConnections: ["collections"],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        // Use environemnt variables for production purpose of use🙈
        accessToken: "xXHIsS7PgmYPGoQoUWtVLgtt",
        version: 'draft',
        // languages: ['de', 'at'] // Optional parameter. Omission will retrieve all languages by default.
      }
    },
  ].filter(Boolean),
}