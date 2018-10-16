// @flow
import React, { Component } from "react";

import styles from "./index.module.css";

import MenuWrapper from "../LeftNavComponents/MenuWrapper";

class LeftNav extends Component {

  render() {

    const { currentLeftTab, handleNavClick, navOpen } = this.props;

    return (
      <div className={`${styles.leftNav}`}>
        <MenuWrapper 
          currentLeftTab={currentLeftTab}
          handleNavClick={handleNavClick}
          navOpen={navOpen}
        />
      </div>
    );
  }
}

export default LeftNav;
