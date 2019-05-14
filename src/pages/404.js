import React, { Component } from 'react';
import Link from 'gatsby-link';
import Layout from "../layout/layout"
import SEO from "../components/seo"
// import { isBrowser } from '../helpers';

class ErrorPage extends Component {
  // componentDidMount() {
  //   if (isBrowser()) {
  //     document.querySelector('.header').style.display = 'none';
  //     document.querySelector('.footer').style.display = 'none';
  //   }
  // }

  // componentWillUnmount() {
  //   if (isBrowser()) {
  //     document.querySelector('.header').style.display = '';
  //     document.querySelector('.footer').style.display = '';
  //   }
  // }

  render() {
    return (
      <Layout>
        <SEO title="404: Not found" />
        <main className="main-container">
          <div className="error-page-container">
            <div className="error-block">
              <div className="error-block_image" />
              <div className="error-block_head-text">Error 404</div>
              <div className="error-block_descr">Sorry, Page not found</div>
              <div className="error-block_info">The link you followed probably broken or the page has been removed</div>
              <div className="error-block_button">
                <Link className="btn btn-common" to="/"><span>Back to home</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    );
  }
}

export default ErrorPage;
