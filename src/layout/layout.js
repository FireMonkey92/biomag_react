import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer";

const Layout = ({ children, pageContext }) => {
    const data = useStaticQuery(graphql`
            query layoutQuery{
                navbarJson {
                    headerMenu {
                        logoImage{
                            childImageSharp {
                                fixed(width: 100) {
                                  aspectRatio
                                  width
                                  height
                                  src
                                  srcSet
                                  originalName
                                }
                              }
                        }
                        highlights
                        ContactUs
                        home
                        Products {
                            ProductsList
                            href
                            class
                        }
                        homeMenu {
                            id
                            navItem
                            path
                        }
                    }
                }
                biomagJson {
                    footer {
                        copyright
                        privacypolicyTitle
                        createdBy
                        ConsumerReviewDisclaimer
                        NonMedicalDeviceDisclaimer
                    }
                }
            }`)
    return (
        <>
            <Header data={data.navbarJson.headerMenu} pageContext={pageContext} />
            <div>
                <main>{children}</main>
            </div>
            <Footer data={data.biomagJson}/>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default Layout
