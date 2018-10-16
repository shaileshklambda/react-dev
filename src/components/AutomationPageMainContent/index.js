// @flow
import React, { Component } from "react";

import { Row, Col, Nav, NavItem } from "react-bootstrap";

import styles from "./index.module.css";

import TimelineTab from "../TimelineTab";
import AutomationLogsTab from "../AutomationLogsTab";
import AnalyticsTab from "../AnalyticsTab";
import TimelineTabTopRightNav from "../TimelineTabTopRightNav";

function RenderTabContent(props) {
  switch (props.curTabIndex) {
    case "1":
      return <TimelineTab />;

    case "2":
      return <AnalyticsTab />;

    case "3":
      return <AutomationLogsTab />;

    default:
      return null;
  }
}

class AutomationPageMainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTabIndex: "1"
    };
  }

  componentWillMount = () => {
    // need to call all the APIs here itself
  };

  handleSelect = event => {
    this.setState({
      curTabIndex: event
    });
  };

  render() {
    return (
      <Row>
        <Col>
          <div className={`${styles.mainContent}`}>
            <Nav
              bsStyle="tabs"
              activeKey={this.state.curTabIndex}
              onSelect={this.handleSelect}
              className={`${styles.automationSubNav}`}
            >
              <NavItem
                eventKey="1"
                title="Timeline"
                className={`${styles.automationSubNavItems} ${styles.font12} ${
                  styles.fontLato
                }`}
              >
                Timeline
              </NavItem>

              <NavItem
                eventKey="2"
                title="Analytics"
                className={`${styles.automationSubNavItems} ${styles.font12} ${
                  styles.fontLato
                }`}
              >
                Analytics
              </NavItem>

              <NavItem
                eventKey="3"
                title="Automation Logs"
                className={`${styles.automationSubNavItems} ${styles.font12} ${
                  styles.fontLato
                }`}
              >
                Automation Logs
              </NavItem>

              {this.state.curTabIndex === "1" && <TimelineTabTopRightNav />}
            </Nav>
            <RenderTabContent curTabIndex={this.state.curTabIndex} />
          </div>
        </Col>
      </Row>
    );
  }
}

export default AutomationPageMainContent;
