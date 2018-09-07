module.exports = {
  siteMetadata: {
    title: 'Harmony Laser',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-125437652-1',
        head: true
      }
    }
  ],
}
