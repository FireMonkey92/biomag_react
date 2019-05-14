import React from 'react'
import Img from "gatsby-image";
import PropTypes from "prop-types"
import { Col } from "react-bootstrap";

const PractitionerWidgets = ({ fixed, heading, content }) => {
    return (
        <div className="PractitionerWidgets">
            <Col xs={4} className="p-0">
                <Img fixed={fixed} className="Practitioner_icon" />
            </Col>
            <h6 className="feature-title">{heading}</h6>
            <h6 className="grey-text">{content}</h6>
        </div>
    )
}


PractitionerWidgets.propTypes = {
    fluid: PropTypes.object.isRequired,
    heading: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

PractitionerWidgets.defaultProps = {
    fluid: {},
    heading: '',
    content: ''
}
export default PractitionerWidgets
