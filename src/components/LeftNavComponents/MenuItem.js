// @flow
import React, { Component } from "react";

import { Image } from "react-bootstrap";

import styles from "./index.module.css";

const dashboardIcon = require(`../../images/dashboard.svg`);
const realTimeIcon = require(`../../images/real-time.svg`);
const visualIcon = require(`../../images/visual.svg`);
const robotIcon = require(`../../images/robot.svg`);
const testlogsIcon = require(`../../images/testlogs.svg`);
const issuetrackerIcon = require(`../../images/issuetracker.svg`);
const settingsIcon = require(`../../images/24.svg`);

const dashboardIconActive = require(`../../images/dashboard-active.svg`);
const realTimeIconActive = require(`../../images/realtime-active.svg`);
const visualIconActive = require(`../../images/visual-active.svg`);
const robotIconActive = require(`../../images/robot-active.svg`);
const testlogsIconActive = require(`../../images/testlogs-active.svg`);
const issuetrackerIconActive = require(`../../images/issuetracker-active.svg`);
const settingsIconActive = require(`../../images/2.svg`);

function ShowIcons(props) {
  switch (props.icon) {
    case "dashboard":
      // console.log("dashboard");
      return (
        <Image
          className={props.iconClass}
          src={props.active ? dashboardIconActive : dashboardIcon}
        />
      );

    case "realTime":
      // console.log("timeline clicked");
      return (
        <Image
          className={props.iconClass}
          src={props.active ? realTimeIconActive : realTimeIcon}
        />
      );

    case "visual":
      // console.log("analytics clicked");
      return (
        <Image
          className={props.iconClass}
          src={props.active ? visualIconActive : visualIcon}
        />
      );

    case "robot":
      // console.log("logs clicked");
      return (
        <Image
          className={props.iconClass}
          src={props.active ? robotIconActive : robotIcon}
        />
      );

    case "testlogs":
      // console.log("timeline clicked");
      return (
        <Image
          className={props.iconClass}
          src={props.active ? testlogsIconActive : testlogsIcon}
        />
      );

    case "issuetracker":
      // console.log("analytics clicked");
      return (
        <Image
          className={props.iconClass}
          src={props.active ? issuetrackerIconActive : issuetrackerIcon}
        />
      );

    case "24":
      // console.log("logs clicked");
      return (
        <Image
          className={props.iconClass}
          src={props.active ? settingsIconActive : settingsIcon}
        />
      );

    default:
      // console.log("default clicked");
      return null;
  }
}

class MenuItem extends Component {
  localHandleLeftNavClick = () => {
    const { handleNavClick, data } = this.props;
    handleNavClick(data.text);
  };

  render() {
    const { data, currentLeftTab } = this.props;

    const menuClass =
      data && data.text === currentLeftTab
        ? `${styles.menuItem} ${styles.selected}`
        : `${styles.menuItem}`;

    return (
      <div className={menuClass} onClick={this.localHandleLeftNavClick}>
        <span className={`${styles.menuItemIcons}`}>
          <ShowIcons
            icon={data.icon}
            active={currentLeftTab === data.text}
            iconClass={`${styles.menuItemIconsImage}`}
          />
        </span>

        <span
          className={`${styles.menuItemText} ${styles.font11} ${
            styles.fontHelvetica
          }`}
        >
          {data.text}
        </span>
      </div>
    );
  }
}
export default MenuItem;
