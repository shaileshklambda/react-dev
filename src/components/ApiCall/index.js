// @flow
import React, { Component } from "react";
import styles from "./index.module.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { itemsFetchData } from "../../redux/reducers/apiReducer";
import { ButtonToolbar, Button } from "react-bootstrap";
import { Row, Col, ListGroup, ListGroupItem, Panel } from "react-bootstrap";
type Props = {
  fetchData: () => *,
  items: [],
  hasError: boolean,
  isLoading: boolean,
  url: String
};
type State = {};
class Apicall extends Component<Props, State> {
  getDataFromApi = () => {
    // let url = process.env.REACT_APP_API_URL;

    this.props.itemsFetchData();
  };

  render() {
    let themeClass = null;
    if (this.props.themeClass) {
      themeClass = this.props.themeClass;
    }

    if (this.props.hasError) {
      return (
        <div>
          <p>Sorry! There was an error loading the items</p>
          <Button bsStyle="danger" onClick={this.getDataFromApi}>
            Retry
          </Button>
        </div>
      );
    }

    if (this.props.isLoading) {
      return (
        <div>
          <p>Loading ...</p>
          <Button bsStyle="warning" onClick={this.getDataFromApi}>
            Re-Request
          </Button>
        </div>
      );
    }
    return (
      <div>
        <Panel className={styles.panelClass}>
          <h2 className={themeClass ? themeClass : null}>
            API Calls with Redux, Axios
          </h2>

          <ButtonToolbar>
            <Button bsStyle="success" onClick={this.getDataFromApi}>
              Fetch Data From Sample API
            </Button>
          </ButtonToolbar>
          <Panel.Body>
            <ListGroup>
              {this.props.items && this.props.items.builds
                ? this.props.items.builds.map(item => (
                    <ListGroupItem key={item.id}>
                      <Row key={item.id}>
                        <Col md={4} key={item.id + "1"}>
                          {item.name}
                        </Col>
                        <Col md={4} key={item.id + "2"}>
                          {item.date}
                        </Col>
                      </Row>
                    </ListGroupItem>
                  ))
                : "Sorry!!No Data Here."}
            </ListGroup>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.apiReducer.data,
    hasError: state.itemsHaveError,
    isLoading: state.itemsAreLoading
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ itemsFetchData }, dispatch);
// return {
//   fetchData: url => dispatch(itemsFetchData(url))
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Apicall);
