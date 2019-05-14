import React, { Component } from "react";
import _ from "lodash";
import { Modal, Row, Col } from "react-bootstrap";

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      activeSelectedFilterIndex: null,
      defaultSelectedAll: true
    };
  }
  // function that handles active state on selection of the filters  (adds Active class)
  handleClick(e, index) {
    this.setState({
      activeSelectedFilterIndex: index,
      defaultSelectedAll: false
    });
  }

  filterHandler = (e, item) => {
    this.modalClose();
    //FilterDataArray -> Array of object that we have to perform filter on. eg: blog , therapists
    //callback method used to pass the update props to parent components
    const { FilterDataArray, updateFilter } = this.props;
    let filter = _.filter(
      FilterDataArray,
      obj => _.indexOf(obj.Filter, item.Filter) !== -1
    );
    if (item === "all") {
      filter = FilterDataArray;
    }
    updateFilter(filter);
  };
  modalClose = () => this.setState({ modalShow: false });

  MyVerticallyCenteredModal = () => {
    return (
      <Modal
        show={this.state.modalShow}
        onHide={this.modalClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <li onClick={e => this.filterHandler(e, "all")}>
            <h6>All</h6>
          </li>
          {this.props.FilterDetails.map((item, index) => {
            return (
              <li key={index} onClick={e => this.filterHandler(e, item)}>
                <h6>{item.name}</h6>
              </li>
            );
          })}
        </Modal.Body>
      </Modal>
    );
  };
  render() {
    //FilterDetails -> Filter array
    //FilterName -> name of the filter
    const { FilterDetails, FilterName } = this.props;
    return (
      <div className="filter pt-3">
        <div className=" d-none d-md-block">
          <Row>
            <Col md={12}>
              <span className="blog-filter-name ">{FilterName}</span>
            </Col>
            <Col md={12}>
              <li onClick={e => this.filterHandler(e, "all")}>
                <span
                  className={this.state.defaultSelectedAll ? "selected" : " "}
                  onClick={() =>
                    this.setState({
                      defaultSelectedAll: true,
                      activeSelectedFilterIndex: null
                    })
                  }
                >
                  All
                </span>
              </li>
              {FilterDetails.map((item, index) => {
                return (
                  <li key={index} onClick={e => this.filterHandler(e, item)}>
                    <span
                      className={
                        this.state.activeSelectedFilterIndex === index &&
                        "selected"
                          ? "selected"
                          : " "
                      }
                      onClick={e => this.handleClick(e, index)}
                    >
                      {item.name}
                    </span>
                  </li>
                );
              })}
            </Col>
          </Row>
        </div>
        <div className="d-sm-block d-xs-block d-md-none d-lg-none text-center modal-display">
          <p onClick={() => this.setState({ modalShow: true })}>
            <span className="blog-filter-name ">{FilterName}</span>
          </p>
          <hr />
          {this.MyVerticallyCenteredModal()}
        </div>
      </div>
    );
  }
}

export default Filters;
