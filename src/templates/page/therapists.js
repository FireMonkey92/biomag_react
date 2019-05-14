import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import { graphql } from "gatsby";
import Disqus from "disqus-react";

//importing Components
import Layout from "../../layout/layout";
import SEO from "../../components/seo";
import Therapist from "../../components/therapist-widget";
import Filters from "../../components/Filters";

//importing Config file
import { DisqusConfig } from "../../config";

import { isBrowser } from "../../helpers";

class Therapists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: isBrowser() ? window.location.href : "/",
      therapistDetail: this.props.data.biomagJson.therapist.therapistDetail,
      therapistDescription: this.props.data.biomagJson.therapist
        .therapistDescription,
      filterTherapistDescription: this.props.data.biomagJson.therapist
        .therapistDescription
    };
  }
  updateFilter = newData => {
    this.setState({ filterTherapistDescription: newData });
  };
  render() {
    return (
      <Layout>
        <SEO title="Therapists" />

        <Container className="py-5 pt-5" id="therapist">
          <Filters
            FilterDetails={this.state.therapistDetail}
            FilterName={
              this.props.data.biomagJson.therapist.therapistFilter + " Location"
            }
            FilterDataArray={this.state.therapistDescription}
            updateFilter={this.updateFilter}
          />

          <div>
            <Therapist
              className="therapist-column-alignments"
              therapistDescription={this.state.filterTherapistDescription}
            />
          </div>

          <div className="page-comment p-4 mb-4">
            <p>
              <b>
                Hello, Practitioner! Welcome to the team of qualified
                Biomagnetism Therapists. <br /> Would you like to be listed
                among one of them? <br />
                Then, comment your contact info and attach a photo and a scanned
                copy of your Biomagnetism Diploma from any certified mentor.
                It's as simple as that.
              </b>
            </p>
          </div>

          <div className="page-comment p-4">
            <p>
              Individual results will vary according to length and quality of
              training and the experience each Biomagnetism practitioner has
              developed over the years. Although the technique was developed by
              Isaac Goiz Duran MD, many well qualified mentors are helping to
              teach this technique around the world. Each therapist may apply it
              slightly differently as it has continued to evolve and grow over
              the years since its discovery October 10, 1988.
            </p>
          </div>

          {/* Disqus */}
          <div className="article mt-5">
            <Disqus.DiscussionEmbed
              shortname={DisqusConfig.shortname}
              config={{
                url: this.state.url,
                identifier: DisqusConfig.identifier,
                title:"biomag"
              }}
            />
          </div>
        </Container>
      </Layout>
    );
  }
}

Therapists.propTypes = {
  data: PropTypes.shape({
    biomagJson: PropTypes.shape({
      therapist: PropTypes.shape({
        therapistFilter: PropTypes.string,
        therapistDetail: PropTypes.array.isRequired,
        therapistDescription: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            therapistImg: PropTypes.object,
            therapistName: PropTypes.string.isRequired,
            therapistYear: PropTypes.string.isRequired,
            therapistCityDetails: PropTypes.array,
            therapistPhonenumber: PropTypes.string.isRequired,
            therapistGmail: PropTypes.string.isRequired,
            therapistWebsite: PropTypes.string.isRequired,
            therapistTooltip: PropTypes.string.isRequired,
            Filter: PropTypes.array.isRequired
          })
        ).isRequired,
      })
    })
  })
};

export const IndexTherapistList = graphql`
  {
    biomagJson {
      therapist {
        therapistFilter
        therapistDetail {
          id
          Filter
          name
        }
        therapistDescription {
          id
          therapistImg {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          therapistName
          therapistYear
          therapistCityDetails
          therapistPhonenumber
          therapistGmail
          therapistWebsite
          therapistTooltip
          Filter
        }
      }
    }
  }
`;
export default Therapists;
