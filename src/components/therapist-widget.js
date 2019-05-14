import React from "react";
import Img from "gatsby-image";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";

const Therapist = ({ therapistDescription }) => {

    return (
        <Row className="pt-3 px-2">
            {therapistDescription.map((therapist) => {
                return (
                    <Col md={4} key={therapist.id} className="therapistpage-leftalign">
                        <Row>
                            <Col md={2} className="col-2 px-0">
                                <Row>
                                    {/* Avator */}
                                    <Col md={12} className="">
                                        <Img className="img-fluid" fluid={therapist.therapistImg.childImageSharp.fluid} />
                                    </Col>
                                    {/* Tooltip */}
                                    <Col md={12} className=" tooltip">
                                        <OverlayTrigger
                                            key="right"
                                            placement="right"
                                            style={{ 'white-space': 'nowrap' }}
                                            overlay={<Tooltip id={`tooltip-right`} ><span className="tooltiptext" dangerouslySetInnerHTML={{ __html: therapist.therapistTooltip }} /></Tooltip>}>
                                            <div>
                                                <img src="https://www.beyondbiomag.io/images/specialization.png" className="img-fluid therapist-image-clients" alt="" />
                                            </div>
                                        </OverlayTrigger>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={10} className="col-10 therapist-contact-details">
                                <Row className="row">
                                    <Col md={12} className="col-12">
                                        <h5 className="therapistHeading">
                                            {therapist.therapistName}
                                        </h5>
                                    </Col>
                                    <Col md={12} className="col-12">
                                        <p className="therapistYear">{therapist.therapistYear}</p>
                                        {therapist.therapistCityDetails.map((item, index) => {
                                            return (<p key={index} className="therapistHeadingDetails">{item}</p>);
                                        })}
                                    </Col>
                                    <Col md={12} className="col-12">
                                        <p className="therapistPhonenumber" dangerouslySetInnerHTML={{ __html: therapist.therapistPhonenumber }} />
                                    </Col>
                                    <Col md={12} className="col-12">
                                        <p className="therapistGmail" dangerouslySetInnerHTML={{ __html: therapist.therapistGmail }} />
                                    </Col>
                                    <Col md={12} className="col-12">
                                        <p className="therapistWebsite" dangerouslySetInnerHTML={{ __html: therapist.therapistWebsite }} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                );
            })}
        </Row>
    );
};
export default Therapist;
