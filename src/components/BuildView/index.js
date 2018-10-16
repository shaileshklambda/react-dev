// @flow
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import styles from "./index.module.css";

import { Panel, PanelGroup } from "react-bootstrap";

import BuildViewtable from "../BuildViewtable";
// import TimelineData from "../AutomationPageComponents/timelineData";

import {
  calculateSummary,
  getGlobalBuildStatus,
  extractTimeFromDateTimestamp
} from "../../utility/utilityFunctions";

type Props = {
  buildData: Object
};
type State = {};
const BuildView = props => (
  <div>
    {props.buildData &&
      props.buildData.builds &&
      props.buildData.builds.map((item, index) => {
        return (
          <PanelGroup
            accordion={true}
            key={index}
            id="build_view_accordion"
            className={`${styles.buildPanelGroup}`}
          >
            <Panel eventKey={index} className={`${styles.panelMain}`}>
              <Panel.Heading className={`${styles.panelHeading}`}>
                <Panel.Title toggle className={`${styles.panelTitle}`}>
                  <div className={`${styles.buildDataWrapper}`}>
                    <div>
                      <div className={`${styles.font12}`}>{item.date}</div>
                      <div className={`${styles.font10} ${styles.time}`}>
                        {extractTimeFromDateTimestamp(item.date)}
                      </div>
                    </div>

                    <div>
                      <div className={`${styles.font12}`}>{item.name}</div>
                      <div className={`${styles.font10} ${styles.startedBy}`}>
                        Started 24m ago by Fiona Davis
                      </div>
                    </div>

                    <div className={`${styles.font11} ${styles.buildSummary}`}>
                      {item.tests ? calculateSummary(item.tests) : "N/A"}
                    </div>

                    <div
                      className={`${styles.font12} ${styles.globalBuildStatus}`}
                    >
                      {item.tests ? getGlobalBuildStatus(item.tests) : "N/A"}
                    </div>
                  </div>
                </Panel.Title>
              </Panel.Heading>
              <Panel.Collapse>
                <Panel.Body className={`${styles.panelBody}`}>
                  <BuildViewtable data={item} />
                </Panel.Body>
              </Panel.Collapse>
            </Panel>
          </PanelGroup>
        );
      })}
  </div>
);

const mapStateToProps = state => {
  return {
    buildData: state.timeline.timeline.data
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuildView);
