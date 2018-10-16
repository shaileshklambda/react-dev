// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import TopNav from "../TopNav";
import AutomationPageMainContent from "../AutomationPageMainContent";

import { fetchTimeLineData } from "../../redux/actions/TimeLine";

import styles from "./index.module.css";

class AutomationPageContentWrapper extends Component {
  componentWillMount = () => {
    const { fetchTimeLineData } = this.props;
    fetchTimeLineData();
  };

  render() {
    return (
      <div className={`${styles.mainContentWrapper}`}>
        <TopNav />

        <AutomationPageMainContent />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchTimeLineData }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AutomationPageContentWrapper);
