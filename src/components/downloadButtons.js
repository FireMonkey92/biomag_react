import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Row, Col, Container } from "react-bootstrap";
const DownloadButtons = () => {
  const { biomagJson } = useStaticQuery(graphql`
    {
      biomagJson {
        BoimagDownloadButtons {
          Biomag3DAppleDownload {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          Biomag3DAppleDownloadLink
          Biomag3DAndroidDownload {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          Biomag3DAndroidDownloadLink
          target
        }
      } 
    }
  `);
  const DownLoadButtons = biomagJson.BoimagDownloadButtons;
  return (
    <Container id="downloadbuttons">
      <Row className="banner-app-links mb-3 mt-3">
        <Col sm={3} xs={12} md={2} className="p-1 ml-auto">
          <a
            href={DownLoadButtons.Biomag3DAppleDownloadLink}
            target={DownLoadButtons.target}
            rel="noopener noreferrer"
          >
            <Img
              className="app-button m-0"
              fluid={DownLoadButtons.Biomag3DAppleDownload.childImageSharp.fluid}
            />
          </a>
        </Col>
        <Col sm={3} xs={12} md={2} className="p-1 mr-auto">
          <a
            href={DownLoadButtons.Biomag3DAndroidDownloadLink}
            target={DownLoadButtons.target}
            rel="noopener noreferrer"
          >
            <Img
              className="app-button m-0"
              fluid={DownLoadButtons.Biomag3DAndroidDownload.childImageSharp.fluid}
            />
          </a>
        </Col>

      </Row>
    </Container>
  )
};
export default DownloadButtons;
