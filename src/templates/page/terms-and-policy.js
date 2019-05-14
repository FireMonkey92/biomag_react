import React from 'react'
import PropTypes from "prop-types";
import { graphql } from 'gatsby';
import { Container, Row, Col } from "react-bootstrap";
import Layout from '../../layout/layout';
import SEO from "../../components/seo";

const TermsAndPolicy = ({ data }) => {
    const d = data.biomagJson.privacypolicy;
    return (
        <Layout>
            <SEO title='Terms & Policy' />
            <section id="privacypolicy">
                <Container className="pt-5">
                    <Row>
                        <Col className="pt-5">
                            <div className="vmo-licence-title text-center">
                                <h1>{d.privacypolicyTitle}</h1>
                                <hr />
                            </div>
                            <Col md={12} className="mt-5">
                                <h4 className="vmo-licence-title">{d.privacypolicyMainHeading}</h4>
                                <div dangerouslySetInnerHTML={{ __html: d.privacypolicycontent }} />
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    )
}
TermsAndPolicy.propTypes = {
    data : PropTypes.shape({
        biomagJson : PropTypes.shape({privacypolicy: PropTypes.shape({
            privacypolicyTitle: PropTypes.string,
            privacypolicyMainHeading: PropTypes.string,
            privacypolicycontent : PropTypes.string
        })}).isRequired,
    }),
}

export default TermsAndPolicy;
export const query = graphql`
    query getTermsAndPolicy{
        biomagJson{
            privacypolicy {
                privacypolicyTitle
                privacypolicyMainHeading
                privacypolicycontent
            }
        }
    }
`;
