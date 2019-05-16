import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import Img from "gatsby-image";
//components
import PractitionerWidgets from "./PractitionerWidgets";

const Biomag3DFeatures = () => {
  const { biomagJson } = useStaticQuery(graphql`
    {
      biomagJson {
        Biomag3DFeatures {
          Biomag3DTitle
          Biomag3DAppleDownloadLink
          Biomag3DAndroidDownloadLink
          target
          Biomag3DImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          Biomag3DAppleDownload {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          Biomag3DAndroidDownload {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          Biomag3DWidgets {
            Biomag3DIcon {
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
            Biomag3DHeading
            Biomag3DDescription
            id
          }
        }
      }
    }
  `);
  const data = biomagJson.Biomag3DFeatures;
  return (
    <div id="app-biomag3d">
      <Container>
        <Row>
          <Col>
            <h1 className="section-heading"> {data.Biomag3DTitle}</h1>
          </Col>
        </Row>
        <Row className="Biomag3DFeaturesBotton mb-5">
          <Col xs={4} sm={3} md={2} className="p-0 ml-auto">
            <a href={data.Biomag3DAppleDownloadLink} target={data.target}>
              <Img fluid={data.Biomag3DAppleDownload.childImageSharp.fluid} />
            </a>
          </Col>
          <Col xs={4} sm={3} md={2} className="p-0 mr-auto">
            <a href={data.Biomag3DAndroidDownloadLink} target={data.target}>
              <Img fluid={data.Biomag3DAndroidDownload.childImageSharp.fluid} />
            </a>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={4}>
            <Img fluid={data.Biomag3DImage.childImageSharp.fluid} />
          </Col>
          <Col md={8}>
            <Row className='mt-4'>
              {data.Biomag3DWidgets.map((item, id) => {
                return (
                  <Col md={6} sm={12} key={id}>
                    <PractitionerWidgets
                      fixed={item.Biomag3DIcon.childImageSharp.fixed}
                      heading={item.Biomag3DHeading}
                      content={item.Biomag3DDescription}
                    />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Biomag3DFeatures;
