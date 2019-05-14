import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import Img from "gatsby-image";
import Slider from "react-slick";

const BannerSlider = () => {
  const { biomagJson } = useStaticQuery(graphql`
    {
      biomagJson {
        banners {
          bannerBackgroundImage {
            childImageSharp {
              id
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          bannerButtonValue
          banner {
            bannerTitle
            bannerTitleAnimationClass
            bannerHandImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            bannerHandImageAnimationClass
            appStoreButton {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            appStoreButtonLink
            target
            playStoreButton {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            playStoreButtonLink
            appStoreButtonStyle
            altTag
            id
          }
        }
      }
    }
  `);
  const carouselItems = biomagJson.banners.banner;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const renderButtonImage = image => {
    if (image !== null && image !== "undefined") {
      return <Img className="app-button m-0" fluid={image.childImageSharp.fluid} />;
    }
  };

  return (
    <div id="carousel-slider">
      <Container>
        <div className="carousel slide carousel-fade">
          <div className="carousel-inner" />
          <Slider {...settings}>
            {carouselItems.map((item, index) => {
              const APPSTORELINK = item.appStoreButtonLink,
                PLAYSTORELINK = item.playStoreButtonLink;
              return (
                <div className="carousel-item" key={index}>
                  <Row>
                    <Col lg={6}>
                      <div className={item.bannerTitleAnimationClass}>
                        <h1 className="big-title">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item.bannerTitle
                            }}
                          />
                        </h1>
                        <Row className="banner-app-links">
                          <Col sm={4} xs={4} className="banner-app-button1 p-0">
                            <a
                              href={APPSTORELINK}
                              target={item.target}
                              rel="noopener noreferrer"
                              className={
                                APPSTORELINK === ""
                                  ? "disabled-link"
                                  : item.appStoreButtonStyle
                              }
                              onClick={e => {
                                if (APPSTORELINK === "") e.preventDefault();
                              }}
                            >
                              <Img
                                className="app-button m-0"
                                fluid={
                                  item.appStoreButton.childImageSharp.fluid
                                }
                              />
                            </a>
                          </Col>
                          <Col sm={4} xs={4} className="banner-app-button2 p-0">
                            <a
                              href={PLAYSTORELINK}
                              target={item.target}
                              rel="noopener noreferrer"
                              className={
                                PLAYSTORELINK === "" ? "disabled-link" : ""
                              }
                              onClick={e => {
                                if (PLAYSTORELINK === "") e.preventDefault();
                              }}
                            >
                              {renderButtonImage(item.playStoreButton)}
                            </a>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }}>
                      <Img
                        className={item.bannerHandImageAnimationClass}
                        alt={item.altTag}
                        fluid={item.bannerHandImage.childImageSharp.fluid}
                      />
                    </Col>
                  </Row>
                </div>
              );
            })}
          </Slider>
        </div>
      </Container>
    </div>
  );
};
export default BannerSlider;
