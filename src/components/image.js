import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => (
    <StaticQuery
        query={graphql`
            query {
                placeholderImage: file(relativePath: { eq: "Biomag-Logo-Big.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 900) {
                            src
                            originalName    
                        }
                    }
                }
            }
        `}
        render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
    />
)
export default Image
