// @flow
import React, { Component } from "react";
//import styles from "./index.css";
import PopOverComponent from "../PopOverComponent";
import { preferences } from "../../common/default";
type Props = {
  sampleData: Object
};
type State = {};

class HelpMenucomponent extends Component<Props, State> {
  render() {
    return (
      <PopOverComponent
        pref={this.props.sampleData ? this.props.sampleData : null}
      />
    );
  }
}
HelpMenucomponent.defaultProps = {
  sampleData: preferences
};
export default HelpMenucomponent;
