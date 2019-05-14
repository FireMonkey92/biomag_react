import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image'
import PractitionerWidgets from "./PractitionerWidgets";

const OurApp = () => {
    const { biomagJson } = useStaticQuery(graphql`
    {
        biomagJson {
            ourApps {
            ourAppImage {
               childImageSharp{
                        fluid{
                             ...GatsbyImageSharpFluid
                        }
                    }
            }
            ourAppContent
            ourAppHeading
            ourAppDevices {
                id
                ourAppDevicesImage {
                   childImageSharp{
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
                ourAppDevicesHeading
                ourAppDevicesDescription
            }
            }
        }
    }
    `)
    const data = biomagJson.ourApps;
    return (
        <div id="ourApp" className="py-5">
            <Container className="text-center pt-5">
                <Row className="m-auto">
                    <Col md={{ span: 10, offset: 1 }}>
                        <Row>
                            {data.ourAppDevices.map((item, id) => {
                                return (
                                    <Col md={4} sm={12} key={id} >
                                        <PractitionerWidgets
                                            fixed={item.ourAppDevicesImage.childImageSharp.fixed}
                                            heading={item.ourAppDevicesHeading}
                                            content={item.ourAppDevicesDescription} />
                                    </Col>
                                )
                            })}
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <Img fluid={data.ourAppImage.childImageSharp.fluid} />
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 8, offset: 2 }} className="text-left">
                        <h4 className="pl-4 ourappHeading"> {data.ourAppHeading}</h4>
                        <h6 dangerouslySetInnerHTML={{ __html: data.ourAppContent }} className="ourAppContent" />
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default OurApp
