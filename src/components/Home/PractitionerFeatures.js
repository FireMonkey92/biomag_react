import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image'
import PractitionerWidgets from './PractitionerWidgets';
const PractitionerFeatures = () => {
    const { biomagJson } = useStaticQuery(
        graphql`
       {
        biomagJson {
            PractitionerFeatures {
                PractitionerTitle
                PractitionerImage {
                    childImageSharp{
                        fluid{
                             ...GatsbyImageSharpFluid
                        }
                    }
                }
                practitionerAppButtonImgLink
                practitionerAppcomingsoonButton {
                    childImageSharp{
                        fluid{
                             ...GatsbyImageSharpFluid
                        }
                    }
                }
                PractitionerWidgets{
                    id
                    PractitionerIcon {
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
                    PractitionerHeading
                    PractitionerDescription
                }
            }
        }
    }
    `
    )
    const data = biomagJson.PractitionerFeatures;
    return (
        <div id="app-practitioner">
            <Container className="text-center" >
                <Row>
                    <Col className="p-0">
                        <h2 className="section-heading"> {data.PractitionerTitle}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} sm={4} md={2} className="m-auto">
                        <a href={data.practitionerAppButtonImgLink} target="_blank" rel="noopener noreferrer" className={data.practitionerAppButtonImgLink===""?"disabled-link":""} onClick={(e)=>{if(data.practitionerAppButtonImgLink==="")e.preventDefault()}}>
                        <Img fluid={data.practitionerAppcomingsoonButton.childImageSharp.fluid} />
                        </a>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md={6}>
                        <Row>
                            {data.PractitionerWidgets.map((item, id) => {
                                return (
                                    <Col md={6} sm={12} key={id} >
                                        <PractitionerWidgets
                                            fixed={item.PractitionerIcon.childImageSharp.fixed}
                                            heading={item.PractitionerHeading}
                                            content={item.PractitionerDescription} />
                                    </Col>
                                )
                            })}
                        </Row>
                    </Col>
                    <Col md={6}>
                        <Img fluid={data.PractitionerImage.childImageSharp.fluid} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default PractitionerFeatures
