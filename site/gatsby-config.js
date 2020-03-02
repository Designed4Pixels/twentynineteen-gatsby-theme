module.exports = {
  siteMetadata: {
    title: `Twenty Nineteen Starter`,
    description: `Gatsby starter site for Twenty Nineteen Gatsby Theme.`,
    author: `@muhsinlk`,
    wordPressUrl: `wpcs.proteus-systems.co.uk`
  },
  __experimentalThemes: [
    {
      resolve: "gatsby-theme-twentynineteen",
      options: {
        wordPressUrl: `wpcs.proteus-systems.co.uk`
      }
    }
  ]
};