// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { DEFAULT_VIEW } from "../../common/constants/TimelineConstants";
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Form,
  Image
} from "react-bootstrap";
import custom from "./multiselect.css";
// import TimelineTable from "../TimelineTable";
import BuildView from "../BuildView";
import TimelineTable from "../TimelineTable";
import NoData from "../NoData";
import {
  buildOptions,
  username,
  status,
  statusStyles,
  customStyles
} from "../../common/multiselect";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";

// import { fetchTimeLineData } from "../../redux/actions/TimeLine";

import styles from "./index.module.css";

const dateFilterIcon = require("../../images/filter.svg");
const menuHoverFilterIcon = require("../../images/menu-hover.svg");
const keysFilterIcon = require("../../images/keys.svg");

function filterTestData(data, buildID) {
  return data.builds.filter(item => `${item.id}` === `${buildID}`);
}
type Props = {};
type State = {};
class TimelineTab extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filters: {
        currentBuild: null
      },
      selectedOption: null
    };
  }

  state: State = {
    filters: {
      currentBuild: null
    },
    view: DEFAULT_VIEW,
    buildCheck: true,
    testCheck: false
  };

  componentWillMount = () => {
    const { timelineData } = this.props;
    if (timelineData.data) {
      this.setInitialFilterData(timelineData.data);
    }
  };

  componentWillReceiveProps = nextProps => {
    if (
      nextProps.timelineData &&
      nextProps.timelineData.data
      // !this.props.timelineData.data
    ) {
      this.setInitialFilterData(nextProps.timelineData.data);
    }
  };

  componentDidMount = () => {
    // if (testData && testData.builds && testData.builds.length) {
    //   this.setInitialFilterData(testData);
    // }
  };

  setInitialFilterData = data => {
    this.setState({
      filters: {
        currentBuild: data.builds[0].id
      }
    });
    //console.log(data.builds[0].tests[0].status);
    status = data.builds[0].tests[0].status;
    //console.log(status);
  };

  statusChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Status selected:`, selectedOption);
  };
  /*
    created: 15/10/2018@13: 40
    Handle a View On The Basis of View Select From Nav
    
  */
  handleView = e => {
    let view_value = e.target.value;
    if (view_value) {
      switch (view_value) {
        case "build_view":
          this.setState({ buildCheck: true });
          this.setState({ testCheck: false });

          break;
        case "test_view":
          this.setState({ testCheck: true });
          this.setState({ buildCheck: false });
          break;
        default:
          this.setState({ buildCheck: true });
          this.setState({ testCheck: false });
          break;
      }
      this.setState({ view: view_value });
    }
  };

  render() {
    const { timelineData } = this.props;
    //console.log(timelineData);

    if (timelineData && timelineData.data && this.state.filters.currentBuild) {
      const tableData = filterTestData(
        timelineData.data,
        this.state.filters.currentBuild
      );
      return (
        <div>
          <Form inline className={`${styles.filterBar} ${styles.fontLato}`}>
            <div className={`${styles.viewRadioButton}`}>
              <label>
                <input
                  type="radio"
                  name="radio"
                  value="build_view"
                  onClick={this.handleView}
                  checked={this.state.buildCheck}
                  onChange={() => {}}
                />
                <span
                  className={`${styles.labelText} ${styles.font12} ${
                    styles.fontLato
                  }`}
                >
                  Build View
                </span>
              </label>

              <label>
                <input
                  type="radio"
                  name="radio"
                  value="test_view"
                  onClick={this.handleView}
                  checked={this.state.testCheck}
                  onChange={() => {}}
                />
                <span
                  className={`${styles.labelText} ${styles.font12} ${
                    styles.fontLato
                  }`}
                >
                  Test View
                </span>
              </label>
            </div>

            <div className={`${styles.dateFilterButton}`}>
              <span
                className={`${styles.labelText} ${styles.font12} ${
                  styles.fontLato
                }`}
              >
                Date
              </span>
              <span className={`${styles.dateIcon}`}>
                <Image src={dateFilterIcon} />
              </span>
            </div>

            <FormGroup
              controlId="formControlsSelect1"
              className={`${styles.dropdownSelect}`}
            >
              <ControlLabel className="col-sm-3 form-lable">
                Username:{" "}
              </ControlLabel>
              <div className="col-sm-9">
                <div className="multiSelect-option2">
                  <ReactMultiSelectCheckboxes
                    options={username}
                    styles={customStyles}
                  />
                </div>
              </div>
            </FormGroup>

            <FormGroup
              controlId="builds"
              className={`${styles.dropdownSelect}`}
            >
              <ControlLabel className="col-sm-3 form-lable">
                Build:{" "}
              </ControlLabel>
              <div className="col-sm-9">
                <div className="multiSelect-option2">
                  <ReactMultiSelectCheckboxes
                    options={buildOptions}
                    styles={customStyles}
                  />
                </div>
              </div>
            </FormGroup>

            <FormGroup
              controlId="formControlsSelect3"
              className={`${styles.dropdownSelect}`}
            >
              <ControlLabel className="col-sm-4 form-lable">
                Status:{" "}
              </ControlLabel>
              <div className="col-sm-8">
                <div className="multiSelect-option">
                  <ReactMultiSelectCheckboxes
                    options={status}
                    styles={statusStyles}
                    onChange={this.statusChange}
                  />
                </div>
              </div>
            </FormGroup>

            <div className={`${styles.rightButtonGroup}`}>
              <span>
                <Image src={menuHoverFilterIcon} />
              </span>

              <span>
                <Image src={keysFilterIcon} />
              </span>
            </div>
          </Form>

          {/* <BuildView /> */}
          {/* <TimelineTable data={tableData} /> */}
          {this.state.view === "build_view" ? <BuildView /> : null}
          {this.state.view === "test_view" ? (
            <TimelineTable data={tableData} />
          ) : null}
        </div>
      );
    } else {
      return <NoData />;
    }
  }
}

const mapStateToProps = state => {
  return {
    timelineData: state.timeline.timeline
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimelineTab);
