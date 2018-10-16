// @flow
import React, { Component } from "react";
import { Nav, NavItem } from "react-bootstrap";

class Navbar extends Component<Props, State> {
  render() {
    return (
      <div>
        <Nav bsStyle="pills" activeKey={1}>
          <NavItem href="/crud" title="CRUD Example">
            CRUD Example
          </NavItem>
          <NavItem eventKey={2} title="API Calls Using Axios" href="/api">
            API Example
          </NavItem>
          <NavItem eventKey={3} href="/react-icons">
            React Icons
          </NavItem>
          <NavItem eventKey={3} href="/magic-leap-components">
            MagicLeap Dumb Components
          </NavItem>
        </Nav>
      </div>
    );
  }
}
export default Navbar;
