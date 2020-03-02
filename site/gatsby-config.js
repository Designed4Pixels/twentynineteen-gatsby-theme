module.exports = {
  siteMetadata: {
    title: `Twenty Nineteen Starter`,
    description: `Gatsby starter site for Twenty Nineteen Gatsby Theme.`,
    author: `@muhsinlk`,
    wordPressUrl: `https://app-111.com`
  },
  __experimentalThemes: [
    {
      resolve: "gatsby-theme-twentynineteen",
      options: {
        wordPressUrl: `https://app-111.com`
      }
    }
  ]
};