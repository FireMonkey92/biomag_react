import React from "react";
import PropTypes from 'prop-types';
import Layout from "../../layout/layout";
import SEO from "../../components/seo";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Row, Col, Container } from "react-bootstrap";


const Training = ({ data }) => {
    const training = data.biomagJson.training;
    return (
        <Layout>
            <SEO title="Training" />
            <Container id="training">
                <Row className="justify-content-md-center">
                    <Col md={8}>
                        <h3
                            className="trainingPageHedclr pb-4" style={{ fontWeight: '900', fontSize: '23px' }}
                            dangerouslySetInnerHTML={{ __html: training.trainingHeading }}
                        />
                        <p className="mb-3" dangerouslySetInnerHTML={{ __html: training.trainingPara }}></p>
                        <Img className="img-fluid text-md-center" style={{ paddingBottom: '20px' }} fluid={training.trainingImage.childImageSharp.fluid} />
                        <p className="my-3" dangerouslySetInnerHTML={{ __html: training.trainingSubContent }} ></p>
                        <a href="http://usbiomag.com/registration/" target="_blank" rel="noopener noreferrer"><button style={{ fontWeight: "700" }} className="training-button">Reserve your seat</button></a>
                        <br />
                        <br />
                        <div className="trainingContent1" dangerouslySetInnerHTML={{ __html: training.trainingContent1 }} />
                        <Img fluid={training.trainingImageBottom.childImageSharp.fluid} className="img-fluid text-md-center" />
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

Training.propTypes = {
    data : PropTypes.shape({
        biomagJson : PropTypes.shape({training: PropTypes.shape({
            trainingImage: PropTypes.object,
            trainingPara: PropTypes.string,
            trainingButton : PropTypes.string,
            trainingSubContent : PropTypes.string,
            trainingHeading : PropTypes.string,
            trainingContent1 : PropTypes.string,
            trainingImageBottom : PropTypes.object,
        })}),
    }).isRequired,
}

export default Training;
export const query = graphql`
  query getTrainingDetails {
    biomagJson {
      training {
        trainingImage{
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
        }
        trainingPara
        trainingButton
        trainingSubContent
        trainingHeading
        trainingContent1
        trainingImageBottom{
             childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
        }
      }
    }
  }
`;
