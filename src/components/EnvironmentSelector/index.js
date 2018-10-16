// @flow
import React, { Component } from "react";
import styles from "./index.module.css";
import { Col, Row, Panel, Image } from "react-bootstrap";
import {
  env_pc_browser,
  env_pc_os,
  env_mobile_browser,
  env_mobile_model
} from "../../common/default";
import Select from "react-select";
import phone_2 from "../../images/phone_2.svg";
import computer from "../../images/computer.svg";

type Props = {};
type State = {};
class Environmentselector extends Component<Props, State> {
  handleChange() {
    alert("Option Has been Selected");
  }
  render() {
    return (
      <div>
        <Panel className={styles.testContainer}>
          <Panel.Body>
            <Row>
              <Col md={1}>
                <span />
              </Col>
              <Col md={4}>
                <span className={styles.envHeading}>Environment</span>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col md={1}>
                <Image src={computer} />
              </Col>
              <Col md={5}>
                <Select
                  className={styles.selectClass}
                  options={env_pc_browser}
                  isMulti="true"
                  placeholder="Select A Browser"
                  onBlur={this.handleChange}
                />
              </Col>
              <Col md={5}>
                <Select
                  className={styles.selectClass}
                  options={env_pc_os}
                  isMulti="true"
                  placeholder="Select An OS"
                  onBlur={this.handleChange}
                />
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col md={1}>
                <Image className={styles.phoneEnvIcon} src={phone_2} />
              </Col>

              <Col md={5}>
                <Select
                  className={styles.selectClass}
                  options={env_mobile_browser}
                  isMulti="true"
                  placeholder="Select A Mobile Browser"
                  onBlur={this.handleChange}
                />
              </Col>
              <Col md={5}>
                <Select
                  className={styles.selectClass}
                  options={env_mobile_model}
                  isMulti="true"
                  placeholder="Select A Mobile Platform"
                  onBlur={this.handleChange}
                />
              </Col>
            </Row>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}
export default Environmentselector;
