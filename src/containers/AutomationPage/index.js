// @flow
import React, { Component } from "react";

import { Grid } from "react-bootstrap";

import LeftNav from "../../components/LeftNav";
import AutomationPageContentWrapper from "../../components/AutomationPageContentWrapper";

class AtomationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLeftTab: `Automation`,
      navOpen: true
    };
  }

  handleNavClick = nav => {
    this.setState({
      currentLeftTab: nav
    });
  };

  toggleNav = show => {
    this.setState({
      navOpen: show
    });
  };

  render() {
    return (
      <Grid fluid>
        <LeftNav
          currentLeftTab={this.state.currentLeftTab}
          handleNavClick={this.handleNavClick}
          toggleNav={this.toggleNav}
          navOpen={this.state.navOpen}
        />

        <AutomationPageContentWrapper
          currentLeftTab={this.state.currentLeftTab}
          navOpen={this.state.navOpen}
        />
      </Grid>
    );
  }
}

export default AtomationPage;
