module.exports = {
    siteMetadata: {
        title: `Beyond Bio-magnetism,Biomagnetic Pair Therapy, Dr.Luis Garcia - 3D App`,
        description: `The App provides a various Anatomical Bio magnetism Pairs which may be of therapeutic benefit. Biomagnetism therapy is a natural traditional healing process, which supports a normal response to a number of health concerns using pairs of magnets of medium intensity specifically placed.`,
        author: `Helensys Inc`,
        keyword: 'Lyme Diseases, biomagnetic therapy, biomagnetic pair therapy, magnetic therapy, biomagnetism practitioners, medical biomagnetism, magnetic therapy products, biomagnetic treatments, biomag therapy, Anatomical Biomagnetism pairs, biomagnetic healing, Biomagnetism Apps,healthcare apps,biomag 3D apps, biomagnetic pair therapy practitioners, lymes disease treatment, chronic lyme disease, Multi-Pathogen Syndrome, Fungus on the Hands, Fungus treatments, Measles on the Legs, borrelia burgdorferi symptoms, biomag therapists, biomagnetism therapists',
        url: 'https://www.beyondbiomag.io/'
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-json`,
        `gatsby-plugin-sharp`,
        'gatsby-plugin-less',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                typeName: `Json`,
                path: `${__dirname}/src/data`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Beyond-Biomagnetism`,
                short_name: `Beyond-Biomagnetism`,
                start_url: `/ `,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/assets/images/Beyond-Biomag-Logo.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        `gatsby-plugin-offline`,
    ],
}
