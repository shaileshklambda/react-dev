// @flow
import React, { Component } from "react";
//import styles from "./index.module.css";
import HelpMenuComponent from "../HelpMenuComponent";
import AccesskeyPopover from "../AccessKeyPopover";
import EnvIcons from "../EnvIcons";
import Barchart from "../BarChart";
import VideoComponent from "../VideoComponent";
import DebuggerTab from "../DebuggerTab";
import TestDetails from "../TestDetails";
import Counter from "../Counter";
import { Row, Col } from "react-bootstrap";
import {
  chartPref,
  env,
  videoJsOptions,
  debuggerData,
  counterData
} from "../../common/default";
type Props = {
  sampleData: Object,
  envInfo: Object,
  chartPref: Object,
  debuggerData: Object,
  title: String,
  count: String
};
class Mlcomp extends Component<Props> {
  render() {
    return (
      <div>
        <Row>
          <Col md={4}>
            <HelpMenuComponent />
          </Col>
          <Col md={4}>
            <AccesskeyPopover />
          </Col>
          <Col md={4}>
            <EnvIcons
              envInfo={this.props.envInfo ? this.props.envInfo : null}
            />
          </Col>
          <Col md={8}>
            {this.props.chartPref &&
            Object.keys(this.props.chartPref).length > 0 ? (
              <Barchart
                pref={this.props.chartPref ? this.props.chartPref : {}}
              />
            ) : null}
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <VideoComponent {...this.props.videoOptions} />
          </Col>
          <Col md={6}>
            <DebuggerTab {...this.props.debuggerData} />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <TestDetails />
          </Col>
          <Col md={6}>
            <Counter counter={this.props.counterData} />
          </Col>
        </Row>
      </div>
    );
  }
}
Mlcomp.defaultProps = {
  envInfo: env,
  chartPref: chartPref,
  videoOptions: videoJsOptions,
  debuggerData: debuggerData,

  counterData: counterData
};
export default Mlcomp;
