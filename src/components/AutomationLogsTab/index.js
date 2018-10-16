// @flow
import React, { Component } from "react";
import TestDetails from "../TestDetails";
import DebuggerTab from "../DebuggerTab";
import { Row, Col, Image } from "react-bootstrap";
import { styles } from "ansi-colors";
import localStyles from "./index.module.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchTimeLineData } from "../../redux/actions/AutomationLog";
import { fetchNetworkData } from "../../redux/actions/Network";
import { sanitizeNetworkData } from "../../utility/sanitizeDebuggerData";
import { debuggerData, automationLogs } from "../../common/default";
import NoData from "../NoData";
import AutomationLogsTable from "../AutomationLogsTable";

type Props = {
  debuggerData: Object,
  automationLogs: Object
};
const filterIcon = require("../../images/filter-white.svg");

function filterTestData(data, buildID) {
  return data.builds.filter(item => `${item.id}` === `${buildID}`);
}

class AutomationLogsTab extends Component {
  state: State = {
    filters: {
      currentBuild: null
    }
  };
  componentWillMount = () => {
    // const { fetchTimeLineData } = this.props;
    // fetchTimeLineData();
    // Network Data Fetch From Action Creator
    const { fetchNetworkData } = this.props;
    fetchNetworkData();
  };

  componentWillReceiveProps = nextProps => {
    // if (
    //   nextProps.timelineData &&
    //   nextProps.timelineData.data
    //   // !this.props.timelineData.data
    // ) {
    //   this.setInitialFilterData(nextProps.timelineData.data);
    // }
  };

  setInitialFilterData = data => {
    // this.setState({
    //   filters: {
    //     currentBuild: data.builds[0].id
    //   }
    // });
  };

  render() {
    const { timelineData, networkData } = this.props; //Assignment Of Props Of Timeline Data
    console.log(timelineData);
    console.log(networkData);

    // Build Data For Default Opened Tab In Debugger
    // const debuggerDefaultdata = sanitizeNetworkData(timelineData);

    const debuggerDefaultdata = sanitizeNetworkData(networkData);

    // return <div>moinak</div>;

    // Build Timeline Data For Left Tab
    if (timelineData && timelineData.data) {
      const tableData = filterTestData(
        timelineData.data,
        //this.state.filters.currentBuild
        12
      );

      return (
        <div>
          <Col md={12} xs={12} className={localStyles.filterDiv}>
            <Col md={12}>
              <span className={localStyles.testingDetailsHead}>
                <button className={`${localStyles.filterBtn}`}>
                  <Image src={filterIcon} />
                  {""} Add Filter
                </button>
              </span>
            </Col>
          </Col>
          <Col md={5}>
            <AutomationLogsTable data={tableData} />
          </Col>

          <Col md={7}>
            <Row>
              <Col md={12} className={localStyles.parentDiv}>
                <Col md={7}>
                  <span className={localStyles.testingDetailsHead}>
                    Test Details
                  </span>
                </Col>
              </Col>

              <Col md={12} className={localStyles.parentDiv}>
                <TestDetails />
              </Col>
              <Col md={12} className={localStyles.parentDiv}>
                {/* <DebuggerTab
                  {...debuggerDefaultdata}
                  parent={this.props.debuggerData}
                /> */}
              </Col>
            </Row>
          </Col>
        </div>
      );
    } else {
      return <NoData />;
    }
  }
}
// AutomationLogsTab.defaultProps = {
//   debuggerData: debuggerData
//   //  automationLogs: automationLogs
// };
const mapStateToProps = state => {
  return {
    timelineData: state.timeline.timeline,
    networkData: state.debuggerReducer.debugger
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchNetworkData }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AutomationLogsTab);
