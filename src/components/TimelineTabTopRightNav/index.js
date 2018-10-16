// @flow
import React, { Component } from "react";

import { Nav, NavItem } from "react-bootstrap";

import styles from "./index.module.css";

import {
  accessKeyPref,
  preferences as helpOptions
} from "../../common/default";
import PopOverComponent from "../PopOverComponent";

type Props = {
  preferences: Object,
  pref: Object
};

class TimelineTabTopRightNav extends Component<Props, State> {
  handleSelect(props) {
    console.log(props);
  }

  render() {
    return (
      <Nav
        bsStyle="pills"
        pullRight
        activeKey={1}
        onSelect={this.handleSelect}
        className={`${styles.topRightNav}`}
      >
        <NavItem eventKey={1} title="Test">
          <span className={`${styles.dotIcon} ${styles.active}`} />
          <span className={`${styles.status} ${styles.fontLato}`}>5/5</span>
        </NavItem>

        <NavItem eventKey={2} title="Test">
          <span className={`${styles.dotIcon} ${styles.inProgress}`} />
          <span className={`${styles.status} ${styles.fontLato}`}>2/5</span>
        </NavItem>

        <NavItem
          eventKey={4}
          title="Access Key"
          className={`${styles.iconGroup}`}
        >
          <PopOverComponent
            pref={this.props.preferences ? this.props.preferences : null}
          />
        </NavItem>

        <NavItem eventKey={5} title="Help">
          <PopOverComponent pref={this.props.pref ? this.props.pref : null} />
        </NavItem>
      </Nav>
    );
  }
}
TimelineTabTopRightNav.defaultProps = {
  preferences: accessKeyPref,
  pref: helpOptions
};
export default TimelineTabTopRightNav;
