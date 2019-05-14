import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import Layout from "../../layout/layout";
import SEO from "../../components/seo";
import BlogCard from "../../components/blog-card";
import Filters from "../../components/Filters";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FilterDetails: this.props.data.biomagJson.blog.blogDetail,
      blogDetails: this.props.data.biomagJson.blog.blogDescription,
      filterBlogDetails: this.props.data.biomagJson.blog.blogDescription
    };
  }
  updateFilter = newData => {
    this.setState({ filterBlogDetails: newData });
  };
  render() {
    return (
      <Layout>
        <SEO title="Blog" />
        <Row id="blog">
          <Container>
            <Filters
              FilterDetails={this.state.FilterDetails}
              FilterName={this.props.data.biomagJson.blog.Filter + " tags"}
              FilterDataArray={this.state.blogDetails}
              updateFilter={this.updateFilter}
            />
            <Row>
              {this.state.filterBlogDetails.map((blog, index) => {
                return (
                  <Col md={4} sm={12} key={index}>
                    <BlogCard blog={blog} />
                  </Col>
                );
              })}
            </Row>
            <div className="page-comment p-4 mt-5">
              <p>
                Individual results will vary according to length and quality of
                training and the experience each Biomagnetism practitioner has
                developed over the years. Although the technique was developed
                by Isaac Goiz Duran MD, many well qualified mentors are helping
                to teach this technique around the world. Each therapist may
                apply it slightly differently as it has continued to evolve and
                grow over the years since its discovery October 10, 1988.
              </p>
            </div>
          </Container>
        </Row>
      </Layout>
    );
  }
}
Blog.propTypes = {
  data: PropTypes.shape({
    biomagJson: PropTypes.shape({
      blog: PropTypes.shape({
        Filter: PropTypes.string,
        blogDetail: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string,
            Filter: PropTypes.string.isRequired
          })
        ),
        blogDescription: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string,
            blogImg: PropTypes.object,
            blogName: PropTypes.string,
            Filter: PropTypes.array,
            blogAdmin: PropTypes.string,
            blogReadmore: PropTypes.string,
            shortDescription: PropTypes.string,
            fullDescription: PropTypes.string,
            blogDate: PropTypes.string,
            blogTags: PropTypes.array,
            path: PropTypes.string
          })
        )
      })
    })
  })
};

export default Blog;

export const query = graphql`
  query getAllBlog {
    biomagJson {
      blog {
        Filter
        blogDetail {
          id
          name
          Filter
        }
        blogDescription {
          id
          blogImg {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          blogName
          Filter
          blogAdmin
          blogReadmore
          shortDescription
          fullDescription
          blogDate
          blogTags
          path
        }
      }
    }
  }
`;
