// @flow
import React, { Component } from "react";

import { Navbar, NavItem, Nav, Row, Col, Image } from "react-bootstrap";

import styles from "./index.module.css";

const lambdaLogo = require("../../images/logo.svg");
const upgradeIcon = require("../../images/upgrade.svg");
const faqIcon = require("../../images/faq-icon.svg");
const helplineIcon = require("../../images/helpline.svg");
const userIcon = require("../../images/user.svg");

class TopNav extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Navbar fluid className={`${styles.topNavBar}`}>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">
                  <Image
                    src={lambdaLogo}
                    responsive
                    className={`${styles.brandLogo}`}
                  />
                </a>
              </Navbar.Brand>

              <Navbar.Toggle />
            </Navbar.Header>

            <Navbar.Collapse>
              <Nav
                pullRight
                className={`${styles.menuWrapper} ${styles.font10}`}
              >
                <NavItem
                  eventKey={1}
                  href="#"
                  className={`${styles.tunnelNavItem} ${styles.fontLato}`}
                >
                  <span className={`${styles.tunnelStatus}`}>
                    <span className={`${styles.icon} ${styles.active}`} />
                    <span>Tunnel Active: </span>
                    <span className={`${styles.count}`}>2</span>
                  </span>
                </NavItem>

                <NavItem
                  eventKey={2}
                  href="#"
                  className={`${styles.fontHelvetica}`}
                >
                  <span className={`${styles.menuItemIcon}`}>
                    <Image src={upgradeIcon} />
                  </span>
                  <span>Upgrade</span>
                </NavItem>

                <NavItem
                  eventKey={3}
                  href="#"
                  className={`${styles.fontHelvetica}`}
                >
                  <span className={`${styles.menuItemIcon}`}>
                    <Image src={faqIcon} />
                  </span>
                  <span>FAQ</span>
                </NavItem>

                <NavItem
                  eventKey={4}
                  href="#"
                  className={`${styles.fontHelvetica}`}
                >
                  <span className={`${styles.menuItemIcon}`}>
                    <Image src={helplineIcon} />
                  </span>
                  <span>24*7 Support</span>
                </NavItem>

                <NavItem
                  eventKey={5}
                  href="#"
                  className={`${styles.fontHelvetica}`}
                >
                  <span className={`${styles.menuItemIcon}`}>
                    <Image src={userIcon} />
                  </span>
                  <span>James</span>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    );
  }
}
export default TopNav;
