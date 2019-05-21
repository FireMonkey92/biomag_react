import React, { Component } from "react";
import { Link } from "gatsby";
import { Container, NavDropdown, Navbar, Nav } from "react-bootstrap";
import PropTypes from "prop-types";
import Img from "gatsby-image";
// import { screenWidth } from "../helpers";

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      pageContext: this.props.pageContext,
    };
  }
  s
  componentDidMount() {
    window.addEventListener("scroll", () => {
      let header = document.getElementById("navheader");
      if (this.state.pageContext.pageType === "Landing Page") {
        if (window.scrollY <= 100) {
          header.classList.add("nav-transparent");
          header.classList.remove("nav-colored");
        } else {
          header.classList.remove("nav-transparent");
          header.classList.add("nav-colored");
        }
      }
      else {
        header.classList.remove("nav-transparent");
        header.classList.add("nav-colored");
      }
    });
  }
  renderPrimaryNavbar = data => {
    return (
      <>
        <Nav>
          <Link to={`/#highlights`}>{data.highlights}</Link>
        </Nav>
        <NavDropdown title="Products" id="basic-nav-dropdown">
          {data.Products.map((item, index) => {
            return (
              <NavDropdown.Item key={index} href={`/#${item.href}`}>
                {item.ProductsList}
                <hr />
              </NavDropdown.Item>
            );
          })}
        </NavDropdown>
        <Nav>
          <Link to={`/#contact-us`}> {data.ContactUs}</Link>
        </Nav>
      </>
    );
  };
  renderSecondaryNavbar = data => {
    return <Link to={`/`}>{data.home}</Link>;
  };
  render() {
    const { data, pageContext } = this.state;
    return (
      <header>
        <Navbar
          id="navheader"
          expand="md"
          fixed="top"
          className={pageContext.pageType === "Landing Page" ? "nav-transparent" : "nav-colored"}
        >
          <Container>
            <Link to="/">
              <Img
                fixed={data.logoImage.childImageSharp.fixed}
                alt="logo"
                className="logo"
              />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                {pageContext.pageType === "Landing Page"
                  ? this.renderPrimaryNavbar(data)
                  : this.renderSecondaryNavbar(data)}
                {data.homeMenu.map((item, index) => {
                  return (
                    <Nav key={index}>
                      <Link to={item.path}>{item.navItem}</Link>
                    </Nav>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
Header.propTypes = {
  pageContext: PropTypes.shape({
    pageType: PropTypes.string.isRequired
  })
};
Header.defaultProps = {
  pageContext: {
    pageType: ""
  }
};
export default Header;
