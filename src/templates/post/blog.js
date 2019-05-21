import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import _ from "lodash";
import Disqus from "disqus-react";
import Img from "gatsby-image";
import Layout from "../../layout/layout";
import DownloadButtons from '../../components/downloadButtons'
import { Row, Col, Container } from "react-bootstrap";
//importing Config file
import { DisqusConfig } from "../../config";

import { isBrowser } from "../../helpers";

class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: isBrowser() ? window.location.href : "/"
    };
  }
  render() {
    const { data, pageContext } = this.props;
    const singleBlog = _.filter(data.biomagJson.blog.blogDescription, [
      "path",
      pageContext.pageURL
    ]);
    let Blog = singleBlog[0];
    return (
      <Layout>
        <Container id="singleBlog">
          <Row className="justify-content-md-center">
            <Col md={8} className="mb-2">
              <h4 className="blog-detail-pageHeading">
                <strong>{Blog.blogName}</strong>
              </h4>
            </Col>
          </Row>
          <Row
            className="justify-content-md-center pt-2"
            style={{ minHeight: "73px" }}
          >
            <Col md={8}>
              <Row>
                <Col md={5} sm={12}>
                  <Row>
                    <Col sm={3} md={3}>
                      <Img
                        fluid={Blog.blogAuthorImg.childImageSharp.fluid}
                        className="blogAuthorImage"
                      />
                    </Col>
                    <Col sm={8}>
                      <span>{Blog.blogAdmin}</span>
                      <br />
                      <span className="blog-detailpage-date">
                        {Blog.blogDate}
                      </span>
                    </Col>
                  </Row>
                </Col>

                <Col md={7} className="p-0">
                  <ul>
                    {Blog.blogTags.length > 0 ? (
                      Blog.blogTags.map((item, index) => {
                        return (
                          <li key={index} className="blog-tags">
                            {item}
                          </li>
                        );
                      })
                    ) : (
                        <li />
                      )}
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md={8} className="blog-detailpage-content">
              <div dangerouslySetInnerHTML={{ __html: Blog.fullDescription }} />
            </Col>
          </Row>
          {/* Download Buttons */}
          <DownloadButtons />
          {/* Disqus */}
          <Row className="justify-content-md-center pt-2">
            <Col md={8}>
              <div className="article mt-5">
                <Disqus.DiscussionEmbed
                  shortname="Beyondbiomag"
                  config={{
                    url: this.state.url,
                    identifier: DisqusConfig.identifier,
                    title: "biomag"
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    biomagJson: PropTypes.shape({
      blog: PropTypes.shape({
        blogDescription: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string,
            blogName: PropTypes.string,
            Filter: PropTypes.array,
            blogAdmin: PropTypes.string,
            fullDescription: PropTypes.string,
            blogDate: PropTypes.string,
            blogAuthorImg: PropTypes.object,
            blogTags: PropTypes.array,
            path: PropTypes.string
          })
        )
      })
    })
  })
};

export default BlogPage;
export const query = graphql`
  query getSingleBlog {
    biomagJson {
      blog {
        blogDescription {
          id
          blogName
          Filter
          blogAdmin
          fullDescription
          blogDate
          blogAuthorImg {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          blogTags
          path
        }
      }
    }
  }
`;
