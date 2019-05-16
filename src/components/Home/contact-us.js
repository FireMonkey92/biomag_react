import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import { faFacebookF, faTwitter ,faLinkedin ,faInstagram} from "@fortawesome/free-brands-svg-icons"

const ContactUs = () => {
  const { biomagJson } = useStaticQuery(
    graphql`
      query {
        biomagJson {
          aboutUs {
            id
            title
            description
          }
          Youtube {
            id
            youtubeTitle
            youtubeLinks
            youtubeLinksDetails
          }
          contactUs {
            id
            title
            description
          }
        }
      }
    `
  );
  const aboutUs = biomagJson.aboutUs,
    youtube = biomagJson.Youtube,
    contactUs = biomagJson.contactUs;

  return (
    <section id="contact-us" style={{ backgroundColor: "#f4f5f6 !important" }}>
      <Container>
        <Row>
          <Col md={4} className="text-md-left">
              <h5>{aboutUs.title}</h5>
              <p style={{ textAlign: "justify" }}>{aboutUs.description}</p>
            <Col  md={12} sm={6} xs={6} className="buttonFlex" style={{ paddingLeft : "0px" , display : "flex"}}>
            <a href=" https://www.facebook.com/BeyondBiomag/" className="btn-fb">
            <FontAwesomeIcon icon={faFacebookF}/>
            </a>
            <a href=" https://twitter.com/BeyondBiomag" className="btn-tw">
            <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href=" https://www.linkedin.com/company/beyondbiomag" className="btn-li">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.instagram.com/beyondbiomag/" className="btn-ins">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
            </Col>
          </Col>
          <Col md={4} className="text-md-left youtube-quick-links">
           <h5 className="quick-links">{youtube.youtubeTitle}</h5>
           <p style={{ fontWeight: "700" , fontSize : "17px"}}>{youtube.youtubeLinks}</p>
           <p dangerouslySetInnerHTML={{__html : youtube.youtubeLinksDetails }}/>
          </Col>
          <Col md={4} className="text-md-left contact-us-page" >
            <h5>{contactUs.title}</h5>
            <p dangerouslySetInnerHTML={{__html : contactUs.description }}/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default ContactUs;
