// @flow
import React, { Component } from "react";

import { Image } from "react-bootstrap";

import styles from "./index.module.css";

const hamburgerIcon = require("../../images/shape.svg");

class NavHeader extends Component {
  render() {
    return (
      <div className={`${styles.menuHeader}`}>
        <span className={`${styles.menuHeaderIcon}`}>
          <Image
            className={`${styles.menuItemIconsImage}`}
            src={hamburgerIcon}
          />
        </span>

        <span
          className={`${styles.menuItemText} ${styles.font12} ${
            styles.fontHelvetica
          }`}
        >
          Menu
        </span>
      </div>
    );
  }
}

export default NavHeader;
