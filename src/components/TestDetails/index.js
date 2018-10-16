// @flow
import React, { Component } from "react";
import styles from "./index.module.css";
import { Row, Col, Image } from "react-bootstrap";
import { testDetails, videoJsOptions } from "../../common/default";
import VideoComponent from "../VideoComponent";

type Props = {
  test_details: Object,
  videoJsOptions: Object
};
type State = {};
class Testdetails extends Component<Props, State> {
  render() {
    /*
      Props Assigned to Variable
    */
    let test_details = this.props.test_details;
    return (
      <Col md={12} xs={12}>
        <div>
          <Row>
            <Col md={7} xs={7}>
              <Row>
                {/* Heading for The Test with Test ID*/}
                <Col md={12} xs={12} className={styles.headingParent}>
                  <Col md={12} xs={12}>
                    <span className={styles.testHeading}>
                      {test_details.heading ? test_details.heading : "N/A"}
                    </span>
                    <span className={styles.highlightedText}>
                      {" "}
                      {test_details.testId ? test_details.testId : "N/A"}
                    </span>
                  </Col>
                </Col>
              </Row>
              <Row>
                {/* Test Details Start*/}
                <Col md={12} xs={12}>
                  <Col md={6} xs={6}>
                    {/* Test Details about Tester*/}
                    <span className={styles.innerContent}>
                      <p>
                        <strong>Tester: </strong>
                        {test_details.tester ? test_details.tester : "N/A"}
                      </p>
                    </span>
                  </Col>
                  {/* Test Details about Tool*/}

                  <Col md={6} xs={6}>
                    <span className={styles.innerContent}>
                      <p>
                        <strong>CI Tool: </strong>{" "}
                        {test_details.ci_tool ? test_details.ci_tool : "N/A"}
                      </p>
                    </span>
                  </Col>
                </Col>
                <Col md={12} xs={12}>
                  {/* Test Details about Inner Content*/}
                  <Col md={6} xs={6}>
                    <span className={styles.innerContent}>
                      <p>
                        <strong>Local Tunnel: </strong>{" "}
                        {test_details.local_tunnel
                          ? test_details.local_tunnel
                          : "N/A"}
                      </p>
                    </span>
                  </Col>
                  {/* Test Details about Issue Count*/}
                  <Col md={6} xs={6}>
                    <span className={styles.innerContent}>
                      <p>
                        <strong>No. of Issues: </strong>{" "}
                        {test_details.issues_count
                          ? test_details.issues_count
                          : "N/A"}
                      </p>
                    </span>
                  </Col>
                </Col>
                <Col md={12} xs={12}>
                  {/* Test Details about Start Time*/}
                  <Col md={6} xs={6}>
                    <span className={styles.innerContent}>
                      <p>
                        <strong>Start Time: </strong>{" "}
                        {test_details.start_time
                          ? test_details.start_time
                          : "N/A"}
                      </p>
                    </span>
                  </Col>
                  {/* Test Details about End Time*/}
                  <Col md={6} xs={6}>
                    <span className={styles.innerContent}>
                      <p>
                        <strong>End Time: </strong>{" "}
                        {test_details.end_time ? test_details.end_time : "N/A"}
                      </p>
                    </span>
                  </Col>
                </Col>
                <Col md={12} xs={12}>
                  {/* Test Details about Base URL*/}
                  <Col md={12} xs={12}>
                    <span className={styles.innerContent}>
                      <p>
                        <strong>Base Url: </strong>{" "}
                        {test_details.base_url ? test_details.base_url : "N/A"}
                      </p>
                    </span>
                  </Col>
                </Col>
                <Col md={12} xs={12}>
                  {/* Test Details about Environment*/}
                  <Col md={12} xs={12}>
                    <span className={styles.innerContent}>
                      <p>
                        <strong>Environment: </strong>{" "}
                        <Image
                          src={
                            test_details.environment
                              ? "icons/" + test_details.environment.os_icon
                              : ""
                          }
                        />{" "}
                        {test_details.environment
                          ? test_details.environment.os_version
                          : "N/A"}{" "}
                        |{" "}
                        <Image
                          src={
                            test_details.environment
                              ? "icons/" + test_details.environment.browser_icon
                              : ""
                          }
                        />{" "}
                        {test_details.environment
                          ? test_details.environment.browser_version
                          : "N/A"}{" "}
                        |{" "}
                        <Image
                          src={
                            test_details.environment
                              ? "icons/" + test_details.environment.screen_icon
                              : ""
                          }
                        />{" "}
                        {test_details.environment
                          ? test_details.environment.resolution
                          : "N/A"}
                      </p>
                    </span>
                  </Col>
                </Col>
              </Row>
            </Col>
            <Col md={4} xs={4}>
              {this.props.videoOptions ? (
                <VideoComponent {...this.props.videoOptions} />
              ) : (
                <span>Sorry Video Cannot Load</span>
              )}
            </Col>
          </Row>
        </div>
      </Col>
    );
  }
}
Testdetails.defaultProps = {
  test_details: testDetails,
  videoOptions: videoJsOptions
};
export default Testdetails;
