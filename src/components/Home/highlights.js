import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from 'react-bootstrap';
import Img from "gatsby-image";

const Highlights = () => {
    const { biomagJson } = useStaticQuery(graphql`
    {
        biomagJson {
            highlights {
                background
                highlightsTitle
                highlightsSubtitile
                highlightsImage {
                    childImageSharp{
                            fluid{
                                ...GatsbyImageSharpFluid
                            }
                        }
                }
                highlights {
                    id
                    highlightsNumber
                    highlightsHeading
                    highlightsDescription 
                }
            }
        }
    }
    `)
    const data = biomagJson.highlights;
    return (
        <div id="highlights" style={{
            background: `url("${data.background}") no-repeat fixed center`
        }}>
            <Container className="text-left">
                < Row >
                    <Col md={7}>
                        <div className="title">
                            <h4>{data.highlightsTitle}</h4>
                            <h1>{data.highlightsSubtitile}</h1><br />
                            <hr />
                        </div>
                        {data.highlights.map((item, index) => {
                            return (
                                <Row key={index}>
                                    <Col md={1} className="highlight-number"><p>{item.highlightsNumber}</p></Col>
                                    <Col md={11} className="highlight-text text-md-left text-center">
                                        <h4>{item.highlightsHeading}</h4>
                                        <p>{item.highlightsDescription}</p>
                                    </Col>
                                </Row>
                            )
                        })}

                    </Col>
                    <Col md={4} >
                        <Img fluid={data.highlightsImage.childImageSharp.fluid} className="highlightsImage" />
                    </Col>
                </Row>
            </Container>

        </div >
    )
}

export default Highlights
