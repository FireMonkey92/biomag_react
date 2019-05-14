import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useStaticQuery, graphql } from "gatsby"


const Counter = () => {
    const { biomagJson } = useStaticQuery(
        graphql`{
            biomagJson {
                counter{
                    background
                    counter {
                        counterNumber
                        counterPoints
                    }
                }
            }
        }   
        `)
    return (
        <div id="fact-biomag3d" style={{ background: `url("${biomagJson.counter.background}") no-repeat fixed ` }}>
            <Container >
                <Row >
                    <Col md={6} className="m-auto">
                        <Row className="ml-5">
                            {biomagJson.counter.counter.map((item, index) => {
                                return (
                                    <Col md={6} key={index}>
                                        <span>{item.counterNumber}</span>
                                        <hr />
                                        <h4>{item.counterPoints}</h4>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Counter
